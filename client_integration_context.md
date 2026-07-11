# Context & Plan: Wiring Frontend to Backend APIs (Phase 3)

This document details the architectural approach and implementation steps for connecting the Angular high-fidelity prototype frontend to the NestJS + PostgreSQL backend API.

---

## 1. Architectural Strategy

We will apply Angular and RESTful best practices:
1. **Centralized HTTP Interceptor**: Instead of manually adding the `Authorization: Bearer <token>` header to every single HTTP request, we will build an Angular functional HTTP interceptor (`auth.interceptor.ts`). It will retrieve the token from `AuthService` and inject it automatically for all outgoing requests to `localhost:3000`.
2. **Dedicated API Service Layer**: We will create reusable Angular services using `HttpClient` to manage CRUD resources:
   * `EmployeService` (`/employes`)
   * `ChauffeurService` (`/chauffeurs`)
   * `VehiculeService` (`/vehicules`)
   * `DestinationService` (`/destinations`)
   * `ObjetMissionService` (`/objets-mission`)
   * `OrdreMissionService` (`/ordre-missions`)
3. **Component Refactoring**: Replace all static mockup lists in the components with dynamic calls to the API services:
   * **Nouvelle Mission Page**: Load actual employees, destinations, objects, drivers, and vehicles from the database. Save created missions to the backend.
   * **Missions List Page**: Display real orders of mission, filter them dynamically using backend queries or frontend pipes, and support PDF generation with actual data.
   * **Settings Component**: Add true CRUD operations (Add/Edit/Delete) for referential tables (Chauffeurs, Vehicles, Destinations, Objects, Employees).
   * **RH Follow-up/Calendar**: Dynamically extract missions for the active month to construct the driver schedule grid.

---

## 2. Detailed Implementation Steps

### Step 1: HttpClient & Interceptor Configuration
* Create `auth.interceptor.ts` in `client/src/app/interceptors/`.
* Configure it to intercept all requests to `http://localhost:3000` and append `Authorization: Bearer <token>`.
* Register `authInterceptor` inside `app.config.ts` using `provideHttpClient(withInterceptors([authInterceptor]))`.

### Step 2: Create API Resource Services
* Create a central service folder or individual services for each DB model.
* Implement typed CRUD methods (`getAll`, `getOne`, `create`, `update`, `delete`).

### Step 3: Wire Nouvelle Mission Page
* Inject `EmployeService`, `DestinationService`, `ObjetMissionService`, `ChauffeurService`, `VehiculeService`, and `OrdreMissionService`.
* Load lists on `ngOnInit`.
* On form save, build the payload and send it to the backend `POST /ordre-missions` endpoint.

### Step 4: Wire Missions Lists (Admin and HR)
* Fetch all mission orders using `OrdreMissionService.getAll()`.
* Format and map backend models (e.g. nested employee names) to match the view bindings.

### Step 5: Wire Settings Page
* Implement active database persistence for each of the tabs (Chauffeurs, Vehicles, Objects, Destinations, Employees).
* Save items via `POST`/`PUT` and delete via `DELETE` REST requests.

### Step 6: Wire Calendriers / Follow-up (HR)
* Fetch live driver calendars and list monthly active missions.
* Ensure print monthly report pulls actual database records.

---

## 3. Deployment & Dev Mode
* Run NestJS server: `node dist/src/main.js` (production compiled) or via dev server.
* Run Angular Client: `cmd /c "npm start"` on port 4200.
* Verify cross-origin resource sharing (CORS) handles calls between `4200` and `3000`.
