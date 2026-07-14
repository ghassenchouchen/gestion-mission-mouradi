// Quick smoke test for the API
const http = require('http');

function request(method, path, body) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path,
      method,
      headers: { 'Content-Type': 'application/json' },
    };
    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, body: JSON.parse(data) });
        } catch {
          resolve({ status: res.statusCode, body: data });
        }
      });
    });
    req.on('error', reject);
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

async function test() {
  console.log('=== API Smoke Test ===\n');

  // 1. Test login
  console.log('1. POST /auth/login (admin)');
  const login = await request('POST', '/auth/login', {
    email: 'admin@elmouradi.com',
    password: 'admin123',
  });
  console.log(`   Status: ${login.status}`);
  if (login.status === 201 || login.status === 200) {
    console.log(`   Token: ${login.body.access_token?.substring(0, 30)}...`);
    console.log(`   User: ${login.body.user?.nom} ${login.body.user?.prenom} (${login.body.user?.role})`);
  } else {
    console.log(`   Response: ${JSON.stringify(login.body)}`);
  }

  const token = login.body?.access_token;
  if (!token) {
    console.log('\n❌ Login failed, cannot test protected routes.');
    process.exit(1);
  }

  // Helper for authenticated requests
  function authRequest(method, path, body) {
    return new Promise((resolve, reject) => {
      const options = {
        hostname: 'localhost',
        port: 3000,
        path,
        method,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };
      const req = http.request(options, (res) => {
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => {
          try {
            resolve({ status: res.statusCode, body: JSON.parse(data) });
          } catch {
            resolve({ status: res.statusCode, body: data });
          }
        });
      });
      req.on('error', reject);
      if (body) req.write(JSON.stringify(body));
      req.end();
    });
  }

  // 2. GET /employes
  console.log('\n2. GET /employes');
  const employes = await authRequest('GET', '/employes');
  console.log(`   Status: ${employes.status}`);
  console.log(`   Count: ${Array.isArray(employes.body) ? employes.body.length : 'N/A'}`);
  if (Array.isArray(employes.body) && employes.body.length > 0) {
    console.log(`   First: ${employes.body[0].nom} ${employes.body[0].prenom} (MLE: ${employes.body[0].mle})`);
  }

  // 3. GET /chauffeurs
  console.log('\n3. GET /chauffeurs');
  const chauffeurs = await authRequest('GET', '/chauffeurs');
  console.log(`   Status: ${chauffeurs.status}`);
  console.log(`   Count: ${Array.isArray(chauffeurs.body) ? chauffeurs.body.length : 'N/A'}`);

  // 4. GET /vehicules
  console.log('\n4. GET /vehicules');
  const vehicules = await authRequest('GET', '/vehicules');
  console.log(`   Status: ${vehicules.status}`);
  console.log(`   Count: ${Array.isArray(vehicules.body) ? vehicules.body.length : 'N/A'}`);

  // 5. GET /destinations
  console.log('\n5. GET /destinations');
  const destinations = await authRequest('GET', '/destinations');
  console.log(`   Status: ${destinations.status}`);
  console.log(`   Count: ${Array.isArray(destinations.body) ? destinations.body.length : 'N/A'}`);

  // 6. GET /objets-mission
  console.log('\n6. GET /objets-mission');
  const objets = await authRequest('GET', '/objets-mission');
  console.log(`   Status: ${objets.status}`);
  console.log(`   Count: ${Array.isArray(objets.body) ? objets.body.length : 'N/A'}`);

  // 7. GET /ordre-missions
  console.log('\n7. GET /ordre-missions');
  const missions = await authRequest('GET', '/ordre-missions');
  console.log(`   Status: ${missions.status}`);
  console.log(`   Count: ${Array.isArray(missions.body) ? missions.body.length : 'N/A'}`);
  if (Array.isArray(missions.body) && missions.body.length > 0) {
    console.log(`   First: ${missions.body[0].reference} - ${missions.body[0].statut}`);
  }

  // 8. Test HR login
  console.log('\n8. POST /auth/login (HR)');
  const hrLogin = await request('POST', '/auth/login', {
    email: 'hr@elmouradi.com',
    password: 'hr123',
  });
  console.log(`   Status: ${hrLogin.status}`);
  if (hrLogin.status === 201 || hrLogin.status === 200) {
    console.log(`   User: ${hrLogin.body.user?.nom} ${hrLogin.body.user?.prenom} (${hrLogin.body.user?.role})`);
  } else {
    console.log(`   Response: ${JSON.stringify(hrLogin.body)}`);
  }

  console.log('\n=== Test Complete ===');
}

test().catch(console.error);
