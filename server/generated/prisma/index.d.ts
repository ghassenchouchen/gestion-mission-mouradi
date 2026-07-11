
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Utilisateur
 * 
 */
export type Utilisateur = $Result.DefaultSelection<Prisma.$UtilisateurPayload>
/**
 * Model Employe
 * 
 */
export type Employe = $Result.DefaultSelection<Prisma.$EmployePayload>
/**
 * Model Chauffeur
 * 
 */
export type Chauffeur = $Result.DefaultSelection<Prisma.$ChauffeurPayload>
/**
 * Model Vehicule
 * 
 */
export type Vehicule = $Result.DefaultSelection<Prisma.$VehiculePayload>
/**
 * Model ObjetMission
 * 
 */
export type ObjetMission = $Result.DefaultSelection<Prisma.$ObjetMissionPayload>
/**
 * Model Destination
 * 
 */
export type Destination = $Result.DefaultSelection<Prisma.$DestinationPayload>
/**
 * Model OrdreMission
 * 
 */
export type OrdreMission = $Result.DefaultSelection<Prisma.$OrdreMissionPayload>
/**
 * Model Accompagnateur
 * 
 */
export type Accompagnateur = $Result.DefaultSelection<Prisma.$AccompagnateurPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Utilisateurs
 * const utilisateurs = await prisma.utilisateur.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Utilisateurs
   * const utilisateurs = await prisma.utilisateur.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.utilisateur`: Exposes CRUD operations for the **Utilisateur** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Utilisateurs
    * const utilisateurs = await prisma.utilisateur.findMany()
    * ```
    */
  get utilisateur(): Prisma.UtilisateurDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employe`: Exposes CRUD operations for the **Employe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employes
    * const employes = await prisma.employe.findMany()
    * ```
    */
  get employe(): Prisma.EmployeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chauffeur`: Exposes CRUD operations for the **Chauffeur** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chauffeurs
    * const chauffeurs = await prisma.chauffeur.findMany()
    * ```
    */
  get chauffeur(): Prisma.ChauffeurDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vehicule`: Exposes CRUD operations for the **Vehicule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicules
    * const vehicules = await prisma.vehicule.findMany()
    * ```
    */
  get vehicule(): Prisma.VehiculeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.objetMission`: Exposes CRUD operations for the **ObjetMission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ObjetMissions
    * const objetMissions = await prisma.objetMission.findMany()
    * ```
    */
  get objetMission(): Prisma.ObjetMissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.destination`: Exposes CRUD operations for the **Destination** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Destinations
    * const destinations = await prisma.destination.findMany()
    * ```
    */
  get destination(): Prisma.DestinationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ordreMission`: Exposes CRUD operations for the **OrdreMission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrdreMissions
    * const ordreMissions = await prisma.ordreMission.findMany()
    * ```
    */
  get ordreMission(): Prisma.OrdreMissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.accompagnateur`: Exposes CRUD operations for the **Accompagnateur** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accompagnateurs
    * const accompagnateurs = await prisma.accompagnateur.findMany()
    * ```
    */
  get accompagnateur(): Prisma.AccompagnateurDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Utilisateur: 'Utilisateur',
    Employe: 'Employe',
    Chauffeur: 'Chauffeur',
    Vehicule: 'Vehicule',
    ObjetMission: 'ObjetMission',
    Destination: 'Destination',
    OrdreMission: 'OrdreMission',
    Accompagnateur: 'Accompagnateur'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "utilisateur" | "employe" | "chauffeur" | "vehicule" | "objetMission" | "destination" | "ordreMission" | "accompagnateur"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Utilisateur: {
        payload: Prisma.$UtilisateurPayload<ExtArgs>
        fields: Prisma.UtilisateurFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UtilisateurFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UtilisateurFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          findFirst: {
            args: Prisma.UtilisateurFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UtilisateurFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          findMany: {
            args: Prisma.UtilisateurFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>[]
          }
          create: {
            args: Prisma.UtilisateurCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          createMany: {
            args: Prisma.UtilisateurCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UtilisateurCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>[]
          }
          delete: {
            args: Prisma.UtilisateurDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          update: {
            args: Prisma.UtilisateurUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          deleteMany: {
            args: Prisma.UtilisateurDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UtilisateurUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UtilisateurUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>[]
          }
          upsert: {
            args: Prisma.UtilisateurUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          aggregate: {
            args: Prisma.UtilisateurAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUtilisateur>
          }
          groupBy: {
            args: Prisma.UtilisateurGroupByArgs<ExtArgs>
            result: $Utils.Optional<UtilisateurGroupByOutputType>[]
          }
          count: {
            args: Prisma.UtilisateurCountArgs<ExtArgs>
            result: $Utils.Optional<UtilisateurCountAggregateOutputType> | number
          }
        }
      }
      Employe: {
        payload: Prisma.$EmployePayload<ExtArgs>
        fields: Prisma.EmployeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployePayload>
          }
          findFirst: {
            args: Prisma.EmployeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployePayload>
          }
          findMany: {
            args: Prisma.EmployeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployePayload>[]
          }
          create: {
            args: Prisma.EmployeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployePayload>
          }
          createMany: {
            args: Prisma.EmployeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployePayload>[]
          }
          delete: {
            args: Prisma.EmployeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployePayload>
          }
          update: {
            args: Prisma.EmployeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployePayload>
          }
          deleteMany: {
            args: Prisma.EmployeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployePayload>[]
          }
          upsert: {
            args: Prisma.EmployeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployePayload>
          }
          aggregate: {
            args: Prisma.EmployeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmploye>
          }
          groupBy: {
            args: Prisma.EmployeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeCountAggregateOutputType> | number
          }
        }
      }
      Chauffeur: {
        payload: Prisma.$ChauffeurPayload<ExtArgs>
        fields: Prisma.ChauffeurFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChauffeurFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChauffeurPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChauffeurFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChauffeurPayload>
          }
          findFirst: {
            args: Prisma.ChauffeurFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChauffeurPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChauffeurFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChauffeurPayload>
          }
          findMany: {
            args: Prisma.ChauffeurFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChauffeurPayload>[]
          }
          create: {
            args: Prisma.ChauffeurCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChauffeurPayload>
          }
          createMany: {
            args: Prisma.ChauffeurCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChauffeurCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChauffeurPayload>[]
          }
          delete: {
            args: Prisma.ChauffeurDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChauffeurPayload>
          }
          update: {
            args: Prisma.ChauffeurUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChauffeurPayload>
          }
          deleteMany: {
            args: Prisma.ChauffeurDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChauffeurUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChauffeurUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChauffeurPayload>[]
          }
          upsert: {
            args: Prisma.ChauffeurUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChauffeurPayload>
          }
          aggregate: {
            args: Prisma.ChauffeurAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChauffeur>
          }
          groupBy: {
            args: Prisma.ChauffeurGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChauffeurGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChauffeurCountArgs<ExtArgs>
            result: $Utils.Optional<ChauffeurCountAggregateOutputType> | number
          }
        }
      }
      Vehicule: {
        payload: Prisma.$VehiculePayload<ExtArgs>
        fields: Prisma.VehiculeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehiculeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehiculeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculePayload>
          }
          findFirst: {
            args: Prisma.VehiculeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehiculeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculePayload>
          }
          findMany: {
            args: Prisma.VehiculeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculePayload>[]
          }
          create: {
            args: Prisma.VehiculeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculePayload>
          }
          createMany: {
            args: Prisma.VehiculeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VehiculeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculePayload>[]
          }
          delete: {
            args: Prisma.VehiculeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculePayload>
          }
          update: {
            args: Prisma.VehiculeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculePayload>
          }
          deleteMany: {
            args: Prisma.VehiculeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehiculeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VehiculeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculePayload>[]
          }
          upsert: {
            args: Prisma.VehiculeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiculePayload>
          }
          aggregate: {
            args: Prisma.VehiculeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicule>
          }
          groupBy: {
            args: Prisma.VehiculeGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehiculeGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehiculeCountArgs<ExtArgs>
            result: $Utils.Optional<VehiculeCountAggregateOutputType> | number
          }
        }
      }
      ObjetMission: {
        payload: Prisma.$ObjetMissionPayload<ExtArgs>
        fields: Prisma.ObjetMissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ObjetMissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjetMissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ObjetMissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjetMissionPayload>
          }
          findFirst: {
            args: Prisma.ObjetMissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjetMissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ObjetMissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjetMissionPayload>
          }
          findMany: {
            args: Prisma.ObjetMissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjetMissionPayload>[]
          }
          create: {
            args: Prisma.ObjetMissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjetMissionPayload>
          }
          createMany: {
            args: Prisma.ObjetMissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ObjetMissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjetMissionPayload>[]
          }
          delete: {
            args: Prisma.ObjetMissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjetMissionPayload>
          }
          update: {
            args: Prisma.ObjetMissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjetMissionPayload>
          }
          deleteMany: {
            args: Prisma.ObjetMissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ObjetMissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ObjetMissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjetMissionPayload>[]
          }
          upsert: {
            args: Prisma.ObjetMissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ObjetMissionPayload>
          }
          aggregate: {
            args: Prisma.ObjetMissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateObjetMission>
          }
          groupBy: {
            args: Prisma.ObjetMissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ObjetMissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ObjetMissionCountArgs<ExtArgs>
            result: $Utils.Optional<ObjetMissionCountAggregateOutputType> | number
          }
        }
      }
      Destination: {
        payload: Prisma.$DestinationPayload<ExtArgs>
        fields: Prisma.DestinationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DestinationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DestinationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          findFirst: {
            args: Prisma.DestinationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DestinationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          findMany: {
            args: Prisma.DestinationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>[]
          }
          create: {
            args: Prisma.DestinationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          createMany: {
            args: Prisma.DestinationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DestinationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>[]
          }
          delete: {
            args: Prisma.DestinationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          update: {
            args: Prisma.DestinationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          deleteMany: {
            args: Prisma.DestinationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DestinationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DestinationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>[]
          }
          upsert: {
            args: Prisma.DestinationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DestinationPayload>
          }
          aggregate: {
            args: Prisma.DestinationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDestination>
          }
          groupBy: {
            args: Prisma.DestinationGroupByArgs<ExtArgs>
            result: $Utils.Optional<DestinationGroupByOutputType>[]
          }
          count: {
            args: Prisma.DestinationCountArgs<ExtArgs>
            result: $Utils.Optional<DestinationCountAggregateOutputType> | number
          }
        }
      }
      OrdreMission: {
        payload: Prisma.$OrdreMissionPayload<ExtArgs>
        fields: Prisma.OrdreMissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrdreMissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdreMissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrdreMissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdreMissionPayload>
          }
          findFirst: {
            args: Prisma.OrdreMissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdreMissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrdreMissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdreMissionPayload>
          }
          findMany: {
            args: Prisma.OrdreMissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdreMissionPayload>[]
          }
          create: {
            args: Prisma.OrdreMissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdreMissionPayload>
          }
          createMany: {
            args: Prisma.OrdreMissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrdreMissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdreMissionPayload>[]
          }
          delete: {
            args: Prisma.OrdreMissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdreMissionPayload>
          }
          update: {
            args: Prisma.OrdreMissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdreMissionPayload>
          }
          deleteMany: {
            args: Prisma.OrdreMissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrdreMissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrdreMissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdreMissionPayload>[]
          }
          upsert: {
            args: Prisma.OrdreMissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdreMissionPayload>
          }
          aggregate: {
            args: Prisma.OrdreMissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrdreMission>
          }
          groupBy: {
            args: Prisma.OrdreMissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdreMissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrdreMissionCountArgs<ExtArgs>
            result: $Utils.Optional<OrdreMissionCountAggregateOutputType> | number
          }
        }
      }
      Accompagnateur: {
        payload: Prisma.$AccompagnateurPayload<ExtArgs>
        fields: Prisma.AccompagnateurFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccompagnateurFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccompagnateurPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccompagnateurFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccompagnateurPayload>
          }
          findFirst: {
            args: Prisma.AccompagnateurFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccompagnateurPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccompagnateurFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccompagnateurPayload>
          }
          findMany: {
            args: Prisma.AccompagnateurFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccompagnateurPayload>[]
          }
          create: {
            args: Prisma.AccompagnateurCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccompagnateurPayload>
          }
          createMany: {
            args: Prisma.AccompagnateurCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccompagnateurCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccompagnateurPayload>[]
          }
          delete: {
            args: Prisma.AccompagnateurDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccompagnateurPayload>
          }
          update: {
            args: Prisma.AccompagnateurUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccompagnateurPayload>
          }
          deleteMany: {
            args: Prisma.AccompagnateurDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccompagnateurUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccompagnateurUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccompagnateurPayload>[]
          }
          upsert: {
            args: Prisma.AccompagnateurUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccompagnateurPayload>
          }
          aggregate: {
            args: Prisma.AccompagnateurAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccompagnateur>
          }
          groupBy: {
            args: Prisma.AccompagnateurGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccompagnateurGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccompagnateurCountArgs<ExtArgs>
            result: $Utils.Optional<AccompagnateurCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    utilisateur?: UtilisateurOmit
    employe?: EmployeOmit
    chauffeur?: ChauffeurOmit
    vehicule?: VehiculeOmit
    objetMission?: ObjetMissionOmit
    destination?: DestinationOmit
    ordreMission?: OrdreMissionOmit
    accompagnateur?: AccompagnateurOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UtilisateurCountOutputType
   */

  export type UtilisateurCountOutputType = {
    missions: number
  }

  export type UtilisateurCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    missions?: boolean | UtilisateurCountOutputTypeCountMissionsArgs
  }

  // Custom InputTypes
  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtilisateurCountOutputType
     */
    select?: UtilisateurCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeCountMissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdreMissionWhereInput
  }


  /**
   * Count Type EmployeCountOutputType
   */

  export type EmployeCountOutputType = {
    missions: number
    accompagnements: number
  }

  export type EmployeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    missions?: boolean | EmployeCountOutputTypeCountMissionsArgs
    accompagnements?: boolean | EmployeCountOutputTypeCountAccompagnementsArgs
  }

  // Custom InputTypes
  /**
   * EmployeCountOutputType without action
   */
  export type EmployeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeCountOutputType
     */
    select?: EmployeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeCountOutputType without action
   */
  export type EmployeCountOutputTypeCountMissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdreMissionWhereInput
  }

  /**
   * EmployeCountOutputType without action
   */
  export type EmployeCountOutputTypeCountAccompagnementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccompagnateurWhereInput
  }


  /**
   * Count Type ChauffeurCountOutputType
   */

  export type ChauffeurCountOutputType = {
    missions: number
  }

  export type ChauffeurCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    missions?: boolean | ChauffeurCountOutputTypeCountMissionsArgs
  }

  // Custom InputTypes
  /**
   * ChauffeurCountOutputType without action
   */
  export type ChauffeurCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChauffeurCountOutputType
     */
    select?: ChauffeurCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChauffeurCountOutputType without action
   */
  export type ChauffeurCountOutputTypeCountMissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdreMissionWhereInput
  }


  /**
   * Count Type VehiculeCountOutputType
   */

  export type VehiculeCountOutputType = {
    missions: number
  }

  export type VehiculeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    missions?: boolean | VehiculeCountOutputTypeCountMissionsArgs
  }

  // Custom InputTypes
  /**
   * VehiculeCountOutputType without action
   */
  export type VehiculeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehiculeCountOutputType
     */
    select?: VehiculeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehiculeCountOutputType without action
   */
  export type VehiculeCountOutputTypeCountMissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdreMissionWhereInput
  }


  /**
   * Count Type ObjetMissionCountOutputType
   */

  export type ObjetMissionCountOutputType = {
    missions: number
  }

  export type ObjetMissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    missions?: boolean | ObjetMissionCountOutputTypeCountMissionsArgs
  }

  // Custom InputTypes
  /**
   * ObjetMissionCountOutputType without action
   */
  export type ObjetMissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjetMissionCountOutputType
     */
    select?: ObjetMissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ObjetMissionCountOutputType without action
   */
  export type ObjetMissionCountOutputTypeCountMissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdreMissionWhereInput
  }


  /**
   * Count Type DestinationCountOutputType
   */

  export type DestinationCountOutputType = {
    missions: number
  }

  export type DestinationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    missions?: boolean | DestinationCountOutputTypeCountMissionsArgs
  }

  // Custom InputTypes
  /**
   * DestinationCountOutputType without action
   */
  export type DestinationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DestinationCountOutputType
     */
    select?: DestinationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DestinationCountOutputType without action
   */
  export type DestinationCountOutputTypeCountMissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdreMissionWhereInput
  }


  /**
   * Count Type OrdreMissionCountOutputType
   */

  export type OrdreMissionCountOutputType = {
    accompagnateurs: number
  }

  export type OrdreMissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accompagnateurs?: boolean | OrdreMissionCountOutputTypeCountAccompagnateursArgs
  }

  // Custom InputTypes
  /**
   * OrdreMissionCountOutputType without action
   */
  export type OrdreMissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdreMissionCountOutputType
     */
    select?: OrdreMissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrdreMissionCountOutputType without action
   */
  export type OrdreMissionCountOutputTypeCountAccompagnateursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccompagnateurWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Utilisateur
   */

  export type AggregateUtilisateur = {
    _count: UtilisateurCountAggregateOutputType | null
    _avg: UtilisateurAvgAggregateOutputType | null
    _sum: UtilisateurSumAggregateOutputType | null
    _min: UtilisateurMinAggregateOutputType | null
    _max: UtilisateurMaxAggregateOutputType | null
  }

  export type UtilisateurAvgAggregateOutputType = {
    id: number | null
  }

  export type UtilisateurSumAggregateOutputType = {
    id: number | null
  }

  export type UtilisateurMinAggregateOutputType = {
    id: number | null
    email: string | null
    passwordHash: string | null
    nom: string | null
    prenom: string | null
    role: string | null
    createdAt: Date | null
  }

  export type UtilisateurMaxAggregateOutputType = {
    id: number | null
    email: string | null
    passwordHash: string | null
    nom: string | null
    prenom: string | null
    role: string | null
    createdAt: Date | null
  }

  export type UtilisateurCountAggregateOutputType = {
    id: number
    email: number
    passwordHash: number
    nom: number
    prenom: number
    role: number
    createdAt: number
    _all: number
  }


  export type UtilisateurAvgAggregateInputType = {
    id?: true
  }

  export type UtilisateurSumAggregateInputType = {
    id?: true
  }

  export type UtilisateurMinAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    nom?: true
    prenom?: true
    role?: true
    createdAt?: true
  }

  export type UtilisateurMaxAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    nom?: true
    prenom?: true
    role?: true
    createdAt?: true
  }

  export type UtilisateurCountAggregateInputType = {
    id?: true
    email?: true
    passwordHash?: true
    nom?: true
    prenom?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type UtilisateurAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Utilisateur to aggregate.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Utilisateurs
    **/
    _count?: true | UtilisateurCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UtilisateurAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UtilisateurSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UtilisateurMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UtilisateurMaxAggregateInputType
  }

  export type GetUtilisateurAggregateType<T extends UtilisateurAggregateArgs> = {
        [P in keyof T & keyof AggregateUtilisateur]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUtilisateur[P]>
      : GetScalarType<T[P], AggregateUtilisateur[P]>
  }




  export type UtilisateurGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UtilisateurWhereInput
    orderBy?: UtilisateurOrderByWithAggregationInput | UtilisateurOrderByWithAggregationInput[]
    by: UtilisateurScalarFieldEnum[] | UtilisateurScalarFieldEnum
    having?: UtilisateurScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UtilisateurCountAggregateInputType | true
    _avg?: UtilisateurAvgAggregateInputType
    _sum?: UtilisateurSumAggregateInputType
    _min?: UtilisateurMinAggregateInputType
    _max?: UtilisateurMaxAggregateInputType
  }

  export type UtilisateurGroupByOutputType = {
    id: number
    email: string
    passwordHash: string
    nom: string
    prenom: string
    role: string
    createdAt: Date
    _count: UtilisateurCountAggregateOutputType | null
    _avg: UtilisateurAvgAggregateOutputType | null
    _sum: UtilisateurSumAggregateOutputType | null
    _min: UtilisateurMinAggregateOutputType | null
    _max: UtilisateurMaxAggregateOutputType | null
  }

  type GetUtilisateurGroupByPayload<T extends UtilisateurGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UtilisateurGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UtilisateurGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UtilisateurGroupByOutputType[P]>
            : GetScalarType<T[P], UtilisateurGroupByOutputType[P]>
        }
      >
    >


  export type UtilisateurSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    nom?: boolean
    prenom?: boolean
    role?: boolean
    createdAt?: boolean
    missions?: boolean | Utilisateur$missionsArgs<ExtArgs>
    _count?: boolean | UtilisateurCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["utilisateur"]>

  export type UtilisateurSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    nom?: boolean
    prenom?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["utilisateur"]>

  export type UtilisateurSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    nom?: boolean
    prenom?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["utilisateur"]>

  export type UtilisateurSelectScalar = {
    id?: boolean
    email?: boolean
    passwordHash?: boolean
    nom?: boolean
    prenom?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UtilisateurOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "passwordHash" | "nom" | "prenom" | "role" | "createdAt", ExtArgs["result"]["utilisateur"]>
  export type UtilisateurInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    missions?: boolean | Utilisateur$missionsArgs<ExtArgs>
    _count?: boolean | UtilisateurCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UtilisateurIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UtilisateurIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UtilisateurPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Utilisateur"
    objects: {
      missions: Prisma.$OrdreMissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      passwordHash: string
      nom: string
      prenom: string
      role: string
      createdAt: Date
    }, ExtArgs["result"]["utilisateur"]>
    composites: {}
  }

  type UtilisateurGetPayload<S extends boolean | null | undefined | UtilisateurDefaultArgs> = $Result.GetResult<Prisma.$UtilisateurPayload, S>

  type UtilisateurCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UtilisateurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UtilisateurCountAggregateInputType | true
    }

  export interface UtilisateurDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Utilisateur'], meta: { name: 'Utilisateur' } }
    /**
     * Find zero or one Utilisateur that matches the filter.
     * @param {UtilisateurFindUniqueArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UtilisateurFindUniqueArgs>(args: SelectSubset<T, UtilisateurFindUniqueArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Utilisateur that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UtilisateurFindUniqueOrThrowArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UtilisateurFindUniqueOrThrowArgs>(args: SelectSubset<T, UtilisateurFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utilisateur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindFirstArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UtilisateurFindFirstArgs>(args?: SelectSubset<T, UtilisateurFindFirstArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Utilisateur that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindFirstOrThrowArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UtilisateurFindFirstOrThrowArgs>(args?: SelectSubset<T, UtilisateurFindFirstOrThrowArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Utilisateurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Utilisateurs
     * const utilisateurs = await prisma.utilisateur.findMany()
     * 
     * // Get first 10 Utilisateurs
     * const utilisateurs = await prisma.utilisateur.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const utilisateurWithIdOnly = await prisma.utilisateur.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UtilisateurFindManyArgs>(args?: SelectSubset<T, UtilisateurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Utilisateur.
     * @param {UtilisateurCreateArgs} args - Arguments to create a Utilisateur.
     * @example
     * // Create one Utilisateur
     * const Utilisateur = await prisma.utilisateur.create({
     *   data: {
     *     // ... data to create a Utilisateur
     *   }
     * })
     * 
     */
    create<T extends UtilisateurCreateArgs>(args: SelectSubset<T, UtilisateurCreateArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Utilisateurs.
     * @param {UtilisateurCreateManyArgs} args - Arguments to create many Utilisateurs.
     * @example
     * // Create many Utilisateurs
     * const utilisateur = await prisma.utilisateur.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UtilisateurCreateManyArgs>(args?: SelectSubset<T, UtilisateurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Utilisateurs and returns the data saved in the database.
     * @param {UtilisateurCreateManyAndReturnArgs} args - Arguments to create many Utilisateurs.
     * @example
     * // Create many Utilisateurs
     * const utilisateur = await prisma.utilisateur.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Utilisateurs and only return the `id`
     * const utilisateurWithIdOnly = await prisma.utilisateur.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UtilisateurCreateManyAndReturnArgs>(args?: SelectSubset<T, UtilisateurCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Utilisateur.
     * @param {UtilisateurDeleteArgs} args - Arguments to delete one Utilisateur.
     * @example
     * // Delete one Utilisateur
     * const Utilisateur = await prisma.utilisateur.delete({
     *   where: {
     *     // ... filter to delete one Utilisateur
     *   }
     * })
     * 
     */
    delete<T extends UtilisateurDeleteArgs>(args: SelectSubset<T, UtilisateurDeleteArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Utilisateur.
     * @param {UtilisateurUpdateArgs} args - Arguments to update one Utilisateur.
     * @example
     * // Update one Utilisateur
     * const utilisateur = await prisma.utilisateur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UtilisateurUpdateArgs>(args: SelectSubset<T, UtilisateurUpdateArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Utilisateurs.
     * @param {UtilisateurDeleteManyArgs} args - Arguments to filter Utilisateurs to delete.
     * @example
     * // Delete a few Utilisateurs
     * const { count } = await prisma.utilisateur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UtilisateurDeleteManyArgs>(args?: SelectSubset<T, UtilisateurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Utilisateurs
     * const utilisateur = await prisma.utilisateur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UtilisateurUpdateManyArgs>(args: SelectSubset<T, UtilisateurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Utilisateurs and returns the data updated in the database.
     * @param {UtilisateurUpdateManyAndReturnArgs} args - Arguments to update many Utilisateurs.
     * @example
     * // Update many Utilisateurs
     * const utilisateur = await prisma.utilisateur.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Utilisateurs and only return the `id`
     * const utilisateurWithIdOnly = await prisma.utilisateur.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UtilisateurUpdateManyAndReturnArgs>(args: SelectSubset<T, UtilisateurUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Utilisateur.
     * @param {UtilisateurUpsertArgs} args - Arguments to update or create a Utilisateur.
     * @example
     * // Update or create a Utilisateur
     * const utilisateur = await prisma.utilisateur.upsert({
     *   create: {
     *     // ... data to create a Utilisateur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Utilisateur we want to update
     *   }
     * })
     */
    upsert<T extends UtilisateurUpsertArgs>(args: SelectSubset<T, UtilisateurUpsertArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurCountArgs} args - Arguments to filter Utilisateurs to count.
     * @example
     * // Count the number of Utilisateurs
     * const count = await prisma.utilisateur.count({
     *   where: {
     *     // ... the filter for the Utilisateurs we want to count
     *   }
     * })
    **/
    count<T extends UtilisateurCountArgs>(
      args?: Subset<T, UtilisateurCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UtilisateurCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Utilisateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UtilisateurAggregateArgs>(args: Subset<T, UtilisateurAggregateArgs>): Prisma.PrismaPromise<GetUtilisateurAggregateType<T>>

    /**
     * Group by Utilisateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UtilisateurGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UtilisateurGroupByArgs['orderBy'] }
        : { orderBy?: UtilisateurGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UtilisateurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUtilisateurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Utilisateur model
   */
  readonly fields: UtilisateurFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Utilisateur.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UtilisateurClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    missions<T extends Utilisateur$missionsArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$missionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdreMissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Utilisateur model
   */
  interface UtilisateurFieldRefs {
    readonly id: FieldRef<"Utilisateur", 'Int'>
    readonly email: FieldRef<"Utilisateur", 'String'>
    readonly passwordHash: FieldRef<"Utilisateur", 'String'>
    readonly nom: FieldRef<"Utilisateur", 'String'>
    readonly prenom: FieldRef<"Utilisateur", 'String'>
    readonly role: FieldRef<"Utilisateur", 'String'>
    readonly createdAt: FieldRef<"Utilisateur", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Utilisateur findUnique
   */
  export type UtilisateurFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur findUniqueOrThrow
   */
  export type UtilisateurFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur findFirst
   */
  export type UtilisateurFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Utilisateurs.
     */
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * Utilisateur findFirstOrThrow
   */
  export type UtilisateurFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Utilisateurs.
     */
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * Utilisateur findMany
   */
  export type UtilisateurFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateurs to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Utilisateurs.
     */
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }

  /**
   * Utilisateur create
   */
  export type UtilisateurCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The data needed to create a Utilisateur.
     */
    data: XOR<UtilisateurCreateInput, UtilisateurUncheckedCreateInput>
  }

  /**
   * Utilisateur createMany
   */
  export type UtilisateurCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Utilisateurs.
     */
    data: UtilisateurCreateManyInput | UtilisateurCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Utilisateur createManyAndReturn
   */
  export type UtilisateurCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * The data used to create many Utilisateurs.
     */
    data: UtilisateurCreateManyInput | UtilisateurCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Utilisateur update
   */
  export type UtilisateurUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The data needed to update a Utilisateur.
     */
    data: XOR<UtilisateurUpdateInput, UtilisateurUncheckedUpdateInput>
    /**
     * Choose, which Utilisateur to update.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur updateMany
   */
  export type UtilisateurUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Utilisateurs.
     */
    data: XOR<UtilisateurUpdateManyMutationInput, UtilisateurUncheckedUpdateManyInput>
    /**
     * Filter which Utilisateurs to update
     */
    where?: UtilisateurWhereInput
    /**
     * Limit how many Utilisateurs to update.
     */
    limit?: number
  }

  /**
   * Utilisateur updateManyAndReturn
   */
  export type UtilisateurUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * The data used to update Utilisateurs.
     */
    data: XOR<UtilisateurUpdateManyMutationInput, UtilisateurUncheckedUpdateManyInput>
    /**
     * Filter which Utilisateurs to update
     */
    where?: UtilisateurWhereInput
    /**
     * Limit how many Utilisateurs to update.
     */
    limit?: number
  }

  /**
   * Utilisateur upsert
   */
  export type UtilisateurUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The filter to search for the Utilisateur to update in case it exists.
     */
    where: UtilisateurWhereUniqueInput
    /**
     * In case the Utilisateur found by the `where` argument doesn't exist, create a new Utilisateur with this data.
     */
    create: XOR<UtilisateurCreateInput, UtilisateurUncheckedCreateInput>
    /**
     * In case the Utilisateur was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UtilisateurUpdateInput, UtilisateurUncheckedUpdateInput>
  }

  /**
   * Utilisateur delete
   */
  export type UtilisateurDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter which Utilisateur to delete.
     */
    where: UtilisateurWhereUniqueInput
  }

  /**
   * Utilisateur deleteMany
   */
  export type UtilisateurDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Utilisateurs to delete
     */
    where?: UtilisateurWhereInput
    /**
     * Limit how many Utilisateurs to delete.
     */
    limit?: number
  }

  /**
   * Utilisateur.missions
   */
  export type Utilisateur$missionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdreMission
     */
    select?: OrdreMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdreMission
     */
    omit?: OrdreMissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdreMissionInclude<ExtArgs> | null
    where?: OrdreMissionWhereInput
    orderBy?: OrdreMissionOrderByWithRelationInput | OrdreMissionOrderByWithRelationInput[]
    cursor?: OrdreMissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdreMissionScalarFieldEnum | OrdreMissionScalarFieldEnum[]
  }

  /**
   * Utilisateur without action
   */
  export type UtilisateurDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Utilisateur
     */
    omit?: UtilisateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UtilisateurInclude<ExtArgs> | null
  }


  /**
   * Model Employe
   */

  export type AggregateEmploye = {
    _count: EmployeCountAggregateOutputType | null
    _avg: EmployeAvgAggregateOutputType | null
    _sum: EmployeSumAggregateOutputType | null
    _min: EmployeMinAggregateOutputType | null
    _max: EmployeMaxAggregateOutputType | null
  }

  export type EmployeAvgAggregateOutputType = {
    id: number | null
  }

  export type EmployeSumAggregateOutputType = {
    id: number | null
  }

  export type EmployeMinAggregateOutputType = {
    id: number | null
    mle: string | null
    nom: string | null
    prenom: string | null
    fonction: string | null
    hotelAffectation: string | null
    actif: boolean | null
  }

  export type EmployeMaxAggregateOutputType = {
    id: number | null
    mle: string | null
    nom: string | null
    prenom: string | null
    fonction: string | null
    hotelAffectation: string | null
    actif: boolean | null
  }

  export type EmployeCountAggregateOutputType = {
    id: number
    mle: number
    nom: number
    prenom: number
    fonction: number
    hotelAffectation: number
    actif: number
    _all: number
  }


  export type EmployeAvgAggregateInputType = {
    id?: true
  }

  export type EmployeSumAggregateInputType = {
    id?: true
  }

  export type EmployeMinAggregateInputType = {
    id?: true
    mle?: true
    nom?: true
    prenom?: true
    fonction?: true
    hotelAffectation?: true
    actif?: true
  }

  export type EmployeMaxAggregateInputType = {
    id?: true
    mle?: true
    nom?: true
    prenom?: true
    fonction?: true
    hotelAffectation?: true
    actif?: true
  }

  export type EmployeCountAggregateInputType = {
    id?: true
    mle?: true
    nom?: true
    prenom?: true
    fonction?: true
    hotelAffectation?: true
    actif?: true
    _all?: true
  }

  export type EmployeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employe to aggregate.
     */
    where?: EmployeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employes to fetch.
     */
    orderBy?: EmployeOrderByWithRelationInput | EmployeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employes
    **/
    _count?: true | EmployeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeMaxAggregateInputType
  }

  export type GetEmployeAggregateType<T extends EmployeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmploye]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmploye[P]>
      : GetScalarType<T[P], AggregateEmploye[P]>
  }




  export type EmployeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeWhereInput
    orderBy?: EmployeOrderByWithAggregationInput | EmployeOrderByWithAggregationInput[]
    by: EmployeScalarFieldEnum[] | EmployeScalarFieldEnum
    having?: EmployeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeCountAggregateInputType | true
    _avg?: EmployeAvgAggregateInputType
    _sum?: EmployeSumAggregateInputType
    _min?: EmployeMinAggregateInputType
    _max?: EmployeMaxAggregateInputType
  }

  export type EmployeGroupByOutputType = {
    id: number
    mle: string
    nom: string
    prenom: string
    fonction: string
    hotelAffectation: string
    actif: boolean
    _count: EmployeCountAggregateOutputType | null
    _avg: EmployeAvgAggregateOutputType | null
    _sum: EmployeSumAggregateOutputType | null
    _min: EmployeMinAggregateOutputType | null
    _max: EmployeMaxAggregateOutputType | null
  }

  type GetEmployeGroupByPayload<T extends EmployeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mle?: boolean
    nom?: boolean
    prenom?: boolean
    fonction?: boolean
    hotelAffectation?: boolean
    actif?: boolean
    missions?: boolean | Employe$missionsArgs<ExtArgs>
    accompagnements?: boolean | Employe$accompagnementsArgs<ExtArgs>
    _count?: boolean | EmployeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employe"]>

  export type EmployeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mle?: boolean
    nom?: boolean
    prenom?: boolean
    fonction?: boolean
    hotelAffectation?: boolean
    actif?: boolean
  }, ExtArgs["result"]["employe"]>

  export type EmployeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mle?: boolean
    nom?: boolean
    prenom?: boolean
    fonction?: boolean
    hotelAffectation?: boolean
    actif?: boolean
  }, ExtArgs["result"]["employe"]>

  export type EmployeSelectScalar = {
    id?: boolean
    mle?: boolean
    nom?: boolean
    prenom?: boolean
    fonction?: boolean
    hotelAffectation?: boolean
    actif?: boolean
  }

  export type EmployeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mle" | "nom" | "prenom" | "fonction" | "hotelAffectation" | "actif", ExtArgs["result"]["employe"]>
  export type EmployeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    missions?: boolean | Employe$missionsArgs<ExtArgs>
    accompagnements?: boolean | Employe$accompagnementsArgs<ExtArgs>
    _count?: boolean | EmployeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmployeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type EmployeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EmployePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employe"
    objects: {
      missions: Prisma.$OrdreMissionPayload<ExtArgs>[]
      accompagnements: Prisma.$AccompagnateurPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mle: string
      nom: string
      prenom: string
      fonction: string
      hotelAffectation: string
      actif: boolean
    }, ExtArgs["result"]["employe"]>
    composites: {}
  }

  type EmployeGetPayload<S extends boolean | null | undefined | EmployeDefaultArgs> = $Result.GetResult<Prisma.$EmployePayload, S>

  type EmployeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeCountAggregateInputType | true
    }

  export interface EmployeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employe'], meta: { name: 'Employe' } }
    /**
     * Find zero or one Employe that matches the filter.
     * @param {EmployeFindUniqueArgs} args - Arguments to find a Employe
     * @example
     * // Get one Employe
     * const employe = await prisma.employe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeFindUniqueArgs>(args: SelectSubset<T, EmployeFindUniqueArgs<ExtArgs>>): Prisma__EmployeClient<$Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employe that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeFindUniqueOrThrowArgs} args - Arguments to find a Employe
     * @example
     * // Get one Employe
     * const employe = await prisma.employe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeClient<$Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeFindFirstArgs} args - Arguments to find a Employe
     * @example
     * // Get one Employe
     * const employe = await prisma.employe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeFindFirstArgs>(args?: SelectSubset<T, EmployeFindFirstArgs<ExtArgs>>): Prisma__EmployeClient<$Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeFindFirstOrThrowArgs} args - Arguments to find a Employe
     * @example
     * // Get one Employe
     * const employe = await prisma.employe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeClient<$Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employes
     * const employes = await prisma.employe.findMany()
     * 
     * // Get first 10 Employes
     * const employes = await prisma.employe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeWithIdOnly = await prisma.employe.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeFindManyArgs>(args?: SelectSubset<T, EmployeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employe.
     * @param {EmployeCreateArgs} args - Arguments to create a Employe.
     * @example
     * // Create one Employe
     * const Employe = await prisma.employe.create({
     *   data: {
     *     // ... data to create a Employe
     *   }
     * })
     * 
     */
    create<T extends EmployeCreateArgs>(args: SelectSubset<T, EmployeCreateArgs<ExtArgs>>): Prisma__EmployeClient<$Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employes.
     * @param {EmployeCreateManyArgs} args - Arguments to create many Employes.
     * @example
     * // Create many Employes
     * const employe = await prisma.employe.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeCreateManyArgs>(args?: SelectSubset<T, EmployeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employes and returns the data saved in the database.
     * @param {EmployeCreateManyAndReturnArgs} args - Arguments to create many Employes.
     * @example
     * // Create many Employes
     * const employe = await prisma.employe.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employes and only return the `id`
     * const employeWithIdOnly = await prisma.employe.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Employe.
     * @param {EmployeDeleteArgs} args - Arguments to delete one Employe.
     * @example
     * // Delete one Employe
     * const Employe = await prisma.employe.delete({
     *   where: {
     *     // ... filter to delete one Employe
     *   }
     * })
     * 
     */
    delete<T extends EmployeDeleteArgs>(args: SelectSubset<T, EmployeDeleteArgs<ExtArgs>>): Prisma__EmployeClient<$Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employe.
     * @param {EmployeUpdateArgs} args - Arguments to update one Employe.
     * @example
     * // Update one Employe
     * const employe = await prisma.employe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeUpdateArgs>(args: SelectSubset<T, EmployeUpdateArgs<ExtArgs>>): Prisma__EmployeClient<$Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employes.
     * @param {EmployeDeleteManyArgs} args - Arguments to filter Employes to delete.
     * @example
     * // Delete a few Employes
     * const { count } = await prisma.employe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeDeleteManyArgs>(args?: SelectSubset<T, EmployeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employes
     * const employe = await prisma.employe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeUpdateManyArgs>(args: SelectSubset<T, EmployeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employes and returns the data updated in the database.
     * @param {EmployeUpdateManyAndReturnArgs} args - Arguments to update many Employes.
     * @example
     * // Update many Employes
     * const employe = await prisma.employe.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employes and only return the `id`
     * const employeWithIdOnly = await prisma.employe.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EmployeUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Employe.
     * @param {EmployeUpsertArgs} args - Arguments to update or create a Employe.
     * @example
     * // Update or create a Employe
     * const employe = await prisma.employe.upsert({
     *   create: {
     *     // ... data to create a Employe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employe we want to update
     *   }
     * })
     */
    upsert<T extends EmployeUpsertArgs>(args: SelectSubset<T, EmployeUpsertArgs<ExtArgs>>): Prisma__EmployeClient<$Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeCountArgs} args - Arguments to filter Employes to count.
     * @example
     * // Count the number of Employes
     * const count = await prisma.employe.count({
     *   where: {
     *     // ... the filter for the Employes we want to count
     *   }
     * })
    **/
    count<T extends EmployeCountArgs>(
      args?: Subset<T, EmployeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployeAggregateArgs>(args: Subset<T, EmployeAggregateArgs>): Prisma.PrismaPromise<GetEmployeAggregateType<T>>

    /**
     * Group by Employe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmployeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employe model
   */
  readonly fields: EmployeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    missions<T extends Employe$missionsArgs<ExtArgs> = {}>(args?: Subset<T, Employe$missionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdreMissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accompagnements<T extends Employe$accompagnementsArgs<ExtArgs> = {}>(args?: Subset<T, Employe$accompagnementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccompagnateurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Employe model
   */
  interface EmployeFieldRefs {
    readonly id: FieldRef<"Employe", 'Int'>
    readonly mle: FieldRef<"Employe", 'String'>
    readonly nom: FieldRef<"Employe", 'String'>
    readonly prenom: FieldRef<"Employe", 'String'>
    readonly fonction: FieldRef<"Employe", 'String'>
    readonly hotelAffectation: FieldRef<"Employe", 'String'>
    readonly actif: FieldRef<"Employe", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Employe findUnique
   */
  export type EmployeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employe
     */
    select?: EmployeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employe
     */
    omit?: EmployeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeInclude<ExtArgs> | null
    /**
     * Filter, which Employe to fetch.
     */
    where: EmployeWhereUniqueInput
  }

  /**
   * Employe findUniqueOrThrow
   */
  export type EmployeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employe
     */
    select?: EmployeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employe
     */
    omit?: EmployeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeInclude<ExtArgs> | null
    /**
     * Filter, which Employe to fetch.
     */
    where: EmployeWhereUniqueInput
  }

  /**
   * Employe findFirst
   */
  export type EmployeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employe
     */
    select?: EmployeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employe
     */
    omit?: EmployeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeInclude<ExtArgs> | null
    /**
     * Filter, which Employe to fetch.
     */
    where?: EmployeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employes to fetch.
     */
    orderBy?: EmployeOrderByWithRelationInput | EmployeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employes.
     */
    cursor?: EmployeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employes.
     */
    distinct?: EmployeScalarFieldEnum | EmployeScalarFieldEnum[]
  }

  /**
   * Employe findFirstOrThrow
   */
  export type EmployeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employe
     */
    select?: EmployeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employe
     */
    omit?: EmployeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeInclude<ExtArgs> | null
    /**
     * Filter, which Employe to fetch.
     */
    where?: EmployeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employes to fetch.
     */
    orderBy?: EmployeOrderByWithRelationInput | EmployeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employes.
     */
    cursor?: EmployeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employes.
     */
    distinct?: EmployeScalarFieldEnum | EmployeScalarFieldEnum[]
  }

  /**
   * Employe findMany
   */
  export type EmployeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employe
     */
    select?: EmployeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employe
     */
    omit?: EmployeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeInclude<ExtArgs> | null
    /**
     * Filter, which Employes to fetch.
     */
    where?: EmployeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employes to fetch.
     */
    orderBy?: EmployeOrderByWithRelationInput | EmployeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employes.
     */
    cursor?: EmployeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employes.
     */
    distinct?: EmployeScalarFieldEnum | EmployeScalarFieldEnum[]
  }

  /**
   * Employe create
   */
  export type EmployeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employe
     */
    select?: EmployeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employe
     */
    omit?: EmployeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employe.
     */
    data: XOR<EmployeCreateInput, EmployeUncheckedCreateInput>
  }

  /**
   * Employe createMany
   */
  export type EmployeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employes.
     */
    data: EmployeCreateManyInput | EmployeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employe createManyAndReturn
   */
  export type EmployeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employe
     */
    select?: EmployeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employe
     */
    omit?: EmployeOmit<ExtArgs> | null
    /**
     * The data used to create many Employes.
     */
    data: EmployeCreateManyInput | EmployeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employe update
   */
  export type EmployeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employe
     */
    select?: EmployeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employe
     */
    omit?: EmployeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employe.
     */
    data: XOR<EmployeUpdateInput, EmployeUncheckedUpdateInput>
    /**
     * Choose, which Employe to update.
     */
    where: EmployeWhereUniqueInput
  }

  /**
   * Employe updateMany
   */
  export type EmployeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employes.
     */
    data: XOR<EmployeUpdateManyMutationInput, EmployeUncheckedUpdateManyInput>
    /**
     * Filter which Employes to update
     */
    where?: EmployeWhereInput
    /**
     * Limit how many Employes to update.
     */
    limit?: number
  }

  /**
   * Employe updateManyAndReturn
   */
  export type EmployeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employe
     */
    select?: EmployeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employe
     */
    omit?: EmployeOmit<ExtArgs> | null
    /**
     * The data used to update Employes.
     */
    data: XOR<EmployeUpdateManyMutationInput, EmployeUncheckedUpdateManyInput>
    /**
     * Filter which Employes to update
     */
    where?: EmployeWhereInput
    /**
     * Limit how many Employes to update.
     */
    limit?: number
  }

  /**
   * Employe upsert
   */
  export type EmployeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employe
     */
    select?: EmployeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employe
     */
    omit?: EmployeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employe to update in case it exists.
     */
    where: EmployeWhereUniqueInput
    /**
     * In case the Employe found by the `where` argument doesn't exist, create a new Employe with this data.
     */
    create: XOR<EmployeCreateInput, EmployeUncheckedCreateInput>
    /**
     * In case the Employe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeUpdateInput, EmployeUncheckedUpdateInput>
  }

  /**
   * Employe delete
   */
  export type EmployeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employe
     */
    select?: EmployeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employe
     */
    omit?: EmployeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeInclude<ExtArgs> | null
    /**
     * Filter which Employe to delete.
     */
    where: EmployeWhereUniqueInput
  }

  /**
   * Employe deleteMany
   */
  export type EmployeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employes to delete
     */
    where?: EmployeWhereInput
    /**
     * Limit how many Employes to delete.
     */
    limit?: number
  }

  /**
   * Employe.missions
   */
  export type Employe$missionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdreMission
     */
    select?: OrdreMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdreMission
     */
    omit?: OrdreMissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdreMissionInclude<ExtArgs> | null
    where?: OrdreMissionWhereInput
    orderBy?: OrdreMissionOrderByWithRelationInput | OrdreMissionOrderByWithRelationInput[]
    cursor?: OrdreMissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdreMissionScalarFieldEnum | OrdreMissionScalarFieldEnum[]
  }

  /**
   * Employe.accompagnements
   */
  export type Employe$accompagnementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accompagnateur
     */
    select?: AccompagnateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accompagnateur
     */
    omit?: AccompagnateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccompagnateurInclude<ExtArgs> | null
    where?: AccompagnateurWhereInput
    orderBy?: AccompagnateurOrderByWithRelationInput | AccompagnateurOrderByWithRelationInput[]
    cursor?: AccompagnateurWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccompagnateurScalarFieldEnum | AccompagnateurScalarFieldEnum[]
  }

  /**
   * Employe without action
   */
  export type EmployeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employe
     */
    select?: EmployeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employe
     */
    omit?: EmployeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeInclude<ExtArgs> | null
  }


  /**
   * Model Chauffeur
   */

  export type AggregateChauffeur = {
    _count: ChauffeurCountAggregateOutputType | null
    _avg: ChauffeurAvgAggregateOutputType | null
    _sum: ChauffeurSumAggregateOutputType | null
    _min: ChauffeurMinAggregateOutputType | null
    _max: ChauffeurMaxAggregateOutputType | null
  }

  export type ChauffeurAvgAggregateOutputType = {
    id: number | null
  }

  export type ChauffeurSumAggregateOutputType = {
    id: number | null
  }

  export type ChauffeurMinAggregateOutputType = {
    id: number | null
    mle: string | null
    nom: string | null
    prenom: string | null
    telephone: string | null
    disponible: boolean | null
  }

  export type ChauffeurMaxAggregateOutputType = {
    id: number | null
    mle: string | null
    nom: string | null
    prenom: string | null
    telephone: string | null
    disponible: boolean | null
  }

  export type ChauffeurCountAggregateOutputType = {
    id: number
    mle: number
    nom: number
    prenom: number
    telephone: number
    disponible: number
    _all: number
  }


  export type ChauffeurAvgAggregateInputType = {
    id?: true
  }

  export type ChauffeurSumAggregateInputType = {
    id?: true
  }

  export type ChauffeurMinAggregateInputType = {
    id?: true
    mle?: true
    nom?: true
    prenom?: true
    telephone?: true
    disponible?: true
  }

  export type ChauffeurMaxAggregateInputType = {
    id?: true
    mle?: true
    nom?: true
    prenom?: true
    telephone?: true
    disponible?: true
  }

  export type ChauffeurCountAggregateInputType = {
    id?: true
    mle?: true
    nom?: true
    prenom?: true
    telephone?: true
    disponible?: true
    _all?: true
  }

  export type ChauffeurAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chauffeur to aggregate.
     */
    where?: ChauffeurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chauffeurs to fetch.
     */
    orderBy?: ChauffeurOrderByWithRelationInput | ChauffeurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChauffeurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chauffeurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chauffeurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chauffeurs
    **/
    _count?: true | ChauffeurCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChauffeurAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChauffeurSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChauffeurMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChauffeurMaxAggregateInputType
  }

  export type GetChauffeurAggregateType<T extends ChauffeurAggregateArgs> = {
        [P in keyof T & keyof AggregateChauffeur]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChauffeur[P]>
      : GetScalarType<T[P], AggregateChauffeur[P]>
  }




  export type ChauffeurGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChauffeurWhereInput
    orderBy?: ChauffeurOrderByWithAggregationInput | ChauffeurOrderByWithAggregationInput[]
    by: ChauffeurScalarFieldEnum[] | ChauffeurScalarFieldEnum
    having?: ChauffeurScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChauffeurCountAggregateInputType | true
    _avg?: ChauffeurAvgAggregateInputType
    _sum?: ChauffeurSumAggregateInputType
    _min?: ChauffeurMinAggregateInputType
    _max?: ChauffeurMaxAggregateInputType
  }

  export type ChauffeurGroupByOutputType = {
    id: number
    mle: string
    nom: string
    prenom: string
    telephone: string | null
    disponible: boolean
    _count: ChauffeurCountAggregateOutputType | null
    _avg: ChauffeurAvgAggregateOutputType | null
    _sum: ChauffeurSumAggregateOutputType | null
    _min: ChauffeurMinAggregateOutputType | null
    _max: ChauffeurMaxAggregateOutputType | null
  }

  type GetChauffeurGroupByPayload<T extends ChauffeurGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChauffeurGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChauffeurGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChauffeurGroupByOutputType[P]>
            : GetScalarType<T[P], ChauffeurGroupByOutputType[P]>
        }
      >
    >


  export type ChauffeurSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mle?: boolean
    nom?: boolean
    prenom?: boolean
    telephone?: boolean
    disponible?: boolean
    missions?: boolean | Chauffeur$missionsArgs<ExtArgs>
    _count?: boolean | ChauffeurCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chauffeur"]>

  export type ChauffeurSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mle?: boolean
    nom?: boolean
    prenom?: boolean
    telephone?: boolean
    disponible?: boolean
  }, ExtArgs["result"]["chauffeur"]>

  export type ChauffeurSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mle?: boolean
    nom?: boolean
    prenom?: boolean
    telephone?: boolean
    disponible?: boolean
  }, ExtArgs["result"]["chauffeur"]>

  export type ChauffeurSelectScalar = {
    id?: boolean
    mle?: boolean
    nom?: boolean
    prenom?: boolean
    telephone?: boolean
    disponible?: boolean
  }

  export type ChauffeurOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mle" | "nom" | "prenom" | "telephone" | "disponible", ExtArgs["result"]["chauffeur"]>
  export type ChauffeurInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    missions?: boolean | Chauffeur$missionsArgs<ExtArgs>
    _count?: boolean | ChauffeurCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChauffeurIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ChauffeurIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ChauffeurPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chauffeur"
    objects: {
      missions: Prisma.$OrdreMissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mle: string
      nom: string
      prenom: string
      telephone: string | null
      disponible: boolean
    }, ExtArgs["result"]["chauffeur"]>
    composites: {}
  }

  type ChauffeurGetPayload<S extends boolean | null | undefined | ChauffeurDefaultArgs> = $Result.GetResult<Prisma.$ChauffeurPayload, S>

  type ChauffeurCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChauffeurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChauffeurCountAggregateInputType | true
    }

  export interface ChauffeurDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chauffeur'], meta: { name: 'Chauffeur' } }
    /**
     * Find zero or one Chauffeur that matches the filter.
     * @param {ChauffeurFindUniqueArgs} args - Arguments to find a Chauffeur
     * @example
     * // Get one Chauffeur
     * const chauffeur = await prisma.chauffeur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChauffeurFindUniqueArgs>(args: SelectSubset<T, ChauffeurFindUniqueArgs<ExtArgs>>): Prisma__ChauffeurClient<$Result.GetResult<Prisma.$ChauffeurPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chauffeur that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChauffeurFindUniqueOrThrowArgs} args - Arguments to find a Chauffeur
     * @example
     * // Get one Chauffeur
     * const chauffeur = await prisma.chauffeur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChauffeurFindUniqueOrThrowArgs>(args: SelectSubset<T, ChauffeurFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChauffeurClient<$Result.GetResult<Prisma.$ChauffeurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chauffeur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChauffeurFindFirstArgs} args - Arguments to find a Chauffeur
     * @example
     * // Get one Chauffeur
     * const chauffeur = await prisma.chauffeur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChauffeurFindFirstArgs>(args?: SelectSubset<T, ChauffeurFindFirstArgs<ExtArgs>>): Prisma__ChauffeurClient<$Result.GetResult<Prisma.$ChauffeurPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chauffeur that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChauffeurFindFirstOrThrowArgs} args - Arguments to find a Chauffeur
     * @example
     * // Get one Chauffeur
     * const chauffeur = await prisma.chauffeur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChauffeurFindFirstOrThrowArgs>(args?: SelectSubset<T, ChauffeurFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChauffeurClient<$Result.GetResult<Prisma.$ChauffeurPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chauffeurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChauffeurFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chauffeurs
     * const chauffeurs = await prisma.chauffeur.findMany()
     * 
     * // Get first 10 Chauffeurs
     * const chauffeurs = await prisma.chauffeur.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chauffeurWithIdOnly = await prisma.chauffeur.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChauffeurFindManyArgs>(args?: SelectSubset<T, ChauffeurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChauffeurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chauffeur.
     * @param {ChauffeurCreateArgs} args - Arguments to create a Chauffeur.
     * @example
     * // Create one Chauffeur
     * const Chauffeur = await prisma.chauffeur.create({
     *   data: {
     *     // ... data to create a Chauffeur
     *   }
     * })
     * 
     */
    create<T extends ChauffeurCreateArgs>(args: SelectSubset<T, ChauffeurCreateArgs<ExtArgs>>): Prisma__ChauffeurClient<$Result.GetResult<Prisma.$ChauffeurPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chauffeurs.
     * @param {ChauffeurCreateManyArgs} args - Arguments to create many Chauffeurs.
     * @example
     * // Create many Chauffeurs
     * const chauffeur = await prisma.chauffeur.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChauffeurCreateManyArgs>(args?: SelectSubset<T, ChauffeurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chauffeurs and returns the data saved in the database.
     * @param {ChauffeurCreateManyAndReturnArgs} args - Arguments to create many Chauffeurs.
     * @example
     * // Create many Chauffeurs
     * const chauffeur = await prisma.chauffeur.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chauffeurs and only return the `id`
     * const chauffeurWithIdOnly = await prisma.chauffeur.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChauffeurCreateManyAndReturnArgs>(args?: SelectSubset<T, ChauffeurCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChauffeurPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chauffeur.
     * @param {ChauffeurDeleteArgs} args - Arguments to delete one Chauffeur.
     * @example
     * // Delete one Chauffeur
     * const Chauffeur = await prisma.chauffeur.delete({
     *   where: {
     *     // ... filter to delete one Chauffeur
     *   }
     * })
     * 
     */
    delete<T extends ChauffeurDeleteArgs>(args: SelectSubset<T, ChauffeurDeleteArgs<ExtArgs>>): Prisma__ChauffeurClient<$Result.GetResult<Prisma.$ChauffeurPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chauffeur.
     * @param {ChauffeurUpdateArgs} args - Arguments to update one Chauffeur.
     * @example
     * // Update one Chauffeur
     * const chauffeur = await prisma.chauffeur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChauffeurUpdateArgs>(args: SelectSubset<T, ChauffeurUpdateArgs<ExtArgs>>): Prisma__ChauffeurClient<$Result.GetResult<Prisma.$ChauffeurPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chauffeurs.
     * @param {ChauffeurDeleteManyArgs} args - Arguments to filter Chauffeurs to delete.
     * @example
     * // Delete a few Chauffeurs
     * const { count } = await prisma.chauffeur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChauffeurDeleteManyArgs>(args?: SelectSubset<T, ChauffeurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chauffeurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChauffeurUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chauffeurs
     * const chauffeur = await prisma.chauffeur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChauffeurUpdateManyArgs>(args: SelectSubset<T, ChauffeurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chauffeurs and returns the data updated in the database.
     * @param {ChauffeurUpdateManyAndReturnArgs} args - Arguments to update many Chauffeurs.
     * @example
     * // Update many Chauffeurs
     * const chauffeur = await prisma.chauffeur.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chauffeurs and only return the `id`
     * const chauffeurWithIdOnly = await prisma.chauffeur.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChauffeurUpdateManyAndReturnArgs>(args: SelectSubset<T, ChauffeurUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChauffeurPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chauffeur.
     * @param {ChauffeurUpsertArgs} args - Arguments to update or create a Chauffeur.
     * @example
     * // Update or create a Chauffeur
     * const chauffeur = await prisma.chauffeur.upsert({
     *   create: {
     *     // ... data to create a Chauffeur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chauffeur we want to update
     *   }
     * })
     */
    upsert<T extends ChauffeurUpsertArgs>(args: SelectSubset<T, ChauffeurUpsertArgs<ExtArgs>>): Prisma__ChauffeurClient<$Result.GetResult<Prisma.$ChauffeurPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chauffeurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChauffeurCountArgs} args - Arguments to filter Chauffeurs to count.
     * @example
     * // Count the number of Chauffeurs
     * const count = await prisma.chauffeur.count({
     *   where: {
     *     // ... the filter for the Chauffeurs we want to count
     *   }
     * })
    **/
    count<T extends ChauffeurCountArgs>(
      args?: Subset<T, ChauffeurCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChauffeurCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chauffeur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChauffeurAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChauffeurAggregateArgs>(args: Subset<T, ChauffeurAggregateArgs>): Prisma.PrismaPromise<GetChauffeurAggregateType<T>>

    /**
     * Group by Chauffeur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChauffeurGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChauffeurGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChauffeurGroupByArgs['orderBy'] }
        : { orderBy?: ChauffeurGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChauffeurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChauffeurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chauffeur model
   */
  readonly fields: ChauffeurFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chauffeur.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChauffeurClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    missions<T extends Chauffeur$missionsArgs<ExtArgs> = {}>(args?: Subset<T, Chauffeur$missionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdreMissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Chauffeur model
   */
  interface ChauffeurFieldRefs {
    readonly id: FieldRef<"Chauffeur", 'Int'>
    readonly mle: FieldRef<"Chauffeur", 'String'>
    readonly nom: FieldRef<"Chauffeur", 'String'>
    readonly prenom: FieldRef<"Chauffeur", 'String'>
    readonly telephone: FieldRef<"Chauffeur", 'String'>
    readonly disponible: FieldRef<"Chauffeur", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Chauffeur findUnique
   */
  export type ChauffeurFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chauffeur
     */
    select?: ChauffeurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chauffeur
     */
    omit?: ChauffeurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChauffeurInclude<ExtArgs> | null
    /**
     * Filter, which Chauffeur to fetch.
     */
    where: ChauffeurWhereUniqueInput
  }

  /**
   * Chauffeur findUniqueOrThrow
   */
  export type ChauffeurFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chauffeur
     */
    select?: ChauffeurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chauffeur
     */
    omit?: ChauffeurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChauffeurInclude<ExtArgs> | null
    /**
     * Filter, which Chauffeur to fetch.
     */
    where: ChauffeurWhereUniqueInput
  }

  /**
   * Chauffeur findFirst
   */
  export type ChauffeurFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chauffeur
     */
    select?: ChauffeurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chauffeur
     */
    omit?: ChauffeurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChauffeurInclude<ExtArgs> | null
    /**
     * Filter, which Chauffeur to fetch.
     */
    where?: ChauffeurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chauffeurs to fetch.
     */
    orderBy?: ChauffeurOrderByWithRelationInput | ChauffeurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chauffeurs.
     */
    cursor?: ChauffeurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chauffeurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chauffeurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chauffeurs.
     */
    distinct?: ChauffeurScalarFieldEnum | ChauffeurScalarFieldEnum[]
  }

  /**
   * Chauffeur findFirstOrThrow
   */
  export type ChauffeurFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chauffeur
     */
    select?: ChauffeurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chauffeur
     */
    omit?: ChauffeurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChauffeurInclude<ExtArgs> | null
    /**
     * Filter, which Chauffeur to fetch.
     */
    where?: ChauffeurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chauffeurs to fetch.
     */
    orderBy?: ChauffeurOrderByWithRelationInput | ChauffeurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chauffeurs.
     */
    cursor?: ChauffeurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chauffeurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chauffeurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chauffeurs.
     */
    distinct?: ChauffeurScalarFieldEnum | ChauffeurScalarFieldEnum[]
  }

  /**
   * Chauffeur findMany
   */
  export type ChauffeurFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chauffeur
     */
    select?: ChauffeurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chauffeur
     */
    omit?: ChauffeurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChauffeurInclude<ExtArgs> | null
    /**
     * Filter, which Chauffeurs to fetch.
     */
    where?: ChauffeurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chauffeurs to fetch.
     */
    orderBy?: ChauffeurOrderByWithRelationInput | ChauffeurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chauffeurs.
     */
    cursor?: ChauffeurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chauffeurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chauffeurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chauffeurs.
     */
    distinct?: ChauffeurScalarFieldEnum | ChauffeurScalarFieldEnum[]
  }

  /**
   * Chauffeur create
   */
  export type ChauffeurCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chauffeur
     */
    select?: ChauffeurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chauffeur
     */
    omit?: ChauffeurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChauffeurInclude<ExtArgs> | null
    /**
     * The data needed to create a Chauffeur.
     */
    data: XOR<ChauffeurCreateInput, ChauffeurUncheckedCreateInput>
  }

  /**
   * Chauffeur createMany
   */
  export type ChauffeurCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chauffeurs.
     */
    data: ChauffeurCreateManyInput | ChauffeurCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chauffeur createManyAndReturn
   */
  export type ChauffeurCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chauffeur
     */
    select?: ChauffeurSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chauffeur
     */
    omit?: ChauffeurOmit<ExtArgs> | null
    /**
     * The data used to create many Chauffeurs.
     */
    data: ChauffeurCreateManyInput | ChauffeurCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chauffeur update
   */
  export type ChauffeurUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chauffeur
     */
    select?: ChauffeurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chauffeur
     */
    omit?: ChauffeurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChauffeurInclude<ExtArgs> | null
    /**
     * The data needed to update a Chauffeur.
     */
    data: XOR<ChauffeurUpdateInput, ChauffeurUncheckedUpdateInput>
    /**
     * Choose, which Chauffeur to update.
     */
    where: ChauffeurWhereUniqueInput
  }

  /**
   * Chauffeur updateMany
   */
  export type ChauffeurUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chauffeurs.
     */
    data: XOR<ChauffeurUpdateManyMutationInput, ChauffeurUncheckedUpdateManyInput>
    /**
     * Filter which Chauffeurs to update
     */
    where?: ChauffeurWhereInput
    /**
     * Limit how many Chauffeurs to update.
     */
    limit?: number
  }

  /**
   * Chauffeur updateManyAndReturn
   */
  export type ChauffeurUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chauffeur
     */
    select?: ChauffeurSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chauffeur
     */
    omit?: ChauffeurOmit<ExtArgs> | null
    /**
     * The data used to update Chauffeurs.
     */
    data: XOR<ChauffeurUpdateManyMutationInput, ChauffeurUncheckedUpdateManyInput>
    /**
     * Filter which Chauffeurs to update
     */
    where?: ChauffeurWhereInput
    /**
     * Limit how many Chauffeurs to update.
     */
    limit?: number
  }

  /**
   * Chauffeur upsert
   */
  export type ChauffeurUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chauffeur
     */
    select?: ChauffeurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chauffeur
     */
    omit?: ChauffeurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChauffeurInclude<ExtArgs> | null
    /**
     * The filter to search for the Chauffeur to update in case it exists.
     */
    where: ChauffeurWhereUniqueInput
    /**
     * In case the Chauffeur found by the `where` argument doesn't exist, create a new Chauffeur with this data.
     */
    create: XOR<ChauffeurCreateInput, ChauffeurUncheckedCreateInput>
    /**
     * In case the Chauffeur was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChauffeurUpdateInput, ChauffeurUncheckedUpdateInput>
  }

  /**
   * Chauffeur delete
   */
  export type ChauffeurDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chauffeur
     */
    select?: ChauffeurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chauffeur
     */
    omit?: ChauffeurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChauffeurInclude<ExtArgs> | null
    /**
     * Filter which Chauffeur to delete.
     */
    where: ChauffeurWhereUniqueInput
  }

  /**
   * Chauffeur deleteMany
   */
  export type ChauffeurDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chauffeurs to delete
     */
    where?: ChauffeurWhereInput
    /**
     * Limit how many Chauffeurs to delete.
     */
    limit?: number
  }

  /**
   * Chauffeur.missions
   */
  export type Chauffeur$missionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdreMission
     */
    select?: OrdreMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdreMission
     */
    omit?: OrdreMissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdreMissionInclude<ExtArgs> | null
    where?: OrdreMissionWhereInput
    orderBy?: OrdreMissionOrderByWithRelationInput | OrdreMissionOrderByWithRelationInput[]
    cursor?: OrdreMissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdreMissionScalarFieldEnum | OrdreMissionScalarFieldEnum[]
  }

  /**
   * Chauffeur without action
   */
  export type ChauffeurDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chauffeur
     */
    select?: ChauffeurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chauffeur
     */
    omit?: ChauffeurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChauffeurInclude<ExtArgs> | null
  }


  /**
   * Model Vehicule
   */

  export type AggregateVehicule = {
    _count: VehiculeCountAggregateOutputType | null
    _avg: VehiculeAvgAggregateOutputType | null
    _sum: VehiculeSumAggregateOutputType | null
    _min: VehiculeMinAggregateOutputType | null
    _max: VehiculeMaxAggregateOutputType | null
  }

  export type VehiculeAvgAggregateOutputType = {
    id: number | null
  }

  export type VehiculeSumAggregateOutputType = {
    id: number | null
  }

  export type VehiculeMinAggregateOutputType = {
    id: number | null
    immatriculation: string | null
    marque: string | null
    modele: string | null
    type: string | null
    disponible: boolean | null
  }

  export type VehiculeMaxAggregateOutputType = {
    id: number | null
    immatriculation: string | null
    marque: string | null
    modele: string | null
    type: string | null
    disponible: boolean | null
  }

  export type VehiculeCountAggregateOutputType = {
    id: number
    immatriculation: number
    marque: number
    modele: number
    type: number
    disponible: number
    _all: number
  }


  export type VehiculeAvgAggregateInputType = {
    id?: true
  }

  export type VehiculeSumAggregateInputType = {
    id?: true
  }

  export type VehiculeMinAggregateInputType = {
    id?: true
    immatriculation?: true
    marque?: true
    modele?: true
    type?: true
    disponible?: true
  }

  export type VehiculeMaxAggregateInputType = {
    id?: true
    immatriculation?: true
    marque?: true
    modele?: true
    type?: true
    disponible?: true
  }

  export type VehiculeCountAggregateInputType = {
    id?: true
    immatriculation?: true
    marque?: true
    modele?: true
    type?: true
    disponible?: true
    _all?: true
  }

  export type VehiculeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicule to aggregate.
     */
    where?: VehiculeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicules to fetch.
     */
    orderBy?: VehiculeOrderByWithRelationInput | VehiculeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehiculeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehicules
    **/
    _count?: true | VehiculeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehiculeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehiculeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehiculeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehiculeMaxAggregateInputType
  }

  export type GetVehiculeAggregateType<T extends VehiculeAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicule[P]>
      : GetScalarType<T[P], AggregateVehicule[P]>
  }




  export type VehiculeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehiculeWhereInput
    orderBy?: VehiculeOrderByWithAggregationInput | VehiculeOrderByWithAggregationInput[]
    by: VehiculeScalarFieldEnum[] | VehiculeScalarFieldEnum
    having?: VehiculeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehiculeCountAggregateInputType | true
    _avg?: VehiculeAvgAggregateInputType
    _sum?: VehiculeSumAggregateInputType
    _min?: VehiculeMinAggregateInputType
    _max?: VehiculeMaxAggregateInputType
  }

  export type VehiculeGroupByOutputType = {
    id: number
    immatriculation: string
    marque: string
    modele: string
    type: string
    disponible: boolean
    _count: VehiculeCountAggregateOutputType | null
    _avg: VehiculeAvgAggregateOutputType | null
    _sum: VehiculeSumAggregateOutputType | null
    _min: VehiculeMinAggregateOutputType | null
    _max: VehiculeMaxAggregateOutputType | null
  }

  type GetVehiculeGroupByPayload<T extends VehiculeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehiculeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehiculeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehiculeGroupByOutputType[P]>
            : GetScalarType<T[P], VehiculeGroupByOutputType[P]>
        }
      >
    >


  export type VehiculeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    immatriculation?: boolean
    marque?: boolean
    modele?: boolean
    type?: boolean
    disponible?: boolean
    missions?: boolean | Vehicule$missionsArgs<ExtArgs>
    _count?: boolean | VehiculeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicule"]>

  export type VehiculeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    immatriculation?: boolean
    marque?: boolean
    modele?: boolean
    type?: boolean
    disponible?: boolean
  }, ExtArgs["result"]["vehicule"]>

  export type VehiculeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    immatriculation?: boolean
    marque?: boolean
    modele?: boolean
    type?: boolean
    disponible?: boolean
  }, ExtArgs["result"]["vehicule"]>

  export type VehiculeSelectScalar = {
    id?: boolean
    immatriculation?: boolean
    marque?: boolean
    modele?: boolean
    type?: boolean
    disponible?: boolean
  }

  export type VehiculeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "immatriculation" | "marque" | "modele" | "type" | "disponible", ExtArgs["result"]["vehicule"]>
  export type VehiculeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    missions?: boolean | Vehicule$missionsArgs<ExtArgs>
    _count?: boolean | VehiculeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VehiculeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type VehiculeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $VehiculePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehicule"
    objects: {
      missions: Prisma.$OrdreMissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      immatriculation: string
      marque: string
      modele: string
      type: string
      disponible: boolean
    }, ExtArgs["result"]["vehicule"]>
    composites: {}
  }

  type VehiculeGetPayload<S extends boolean | null | undefined | VehiculeDefaultArgs> = $Result.GetResult<Prisma.$VehiculePayload, S>

  type VehiculeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehiculeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehiculeCountAggregateInputType | true
    }

  export interface VehiculeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehicule'], meta: { name: 'Vehicule' } }
    /**
     * Find zero or one Vehicule that matches the filter.
     * @param {VehiculeFindUniqueArgs} args - Arguments to find a Vehicule
     * @example
     * // Get one Vehicule
     * const vehicule = await prisma.vehicule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehiculeFindUniqueArgs>(args: SelectSubset<T, VehiculeFindUniqueArgs<ExtArgs>>): Prisma__VehiculeClient<$Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vehicule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehiculeFindUniqueOrThrowArgs} args - Arguments to find a Vehicule
     * @example
     * // Get one Vehicule
     * const vehicule = await prisma.vehicule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehiculeFindUniqueOrThrowArgs>(args: SelectSubset<T, VehiculeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehiculeClient<$Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculeFindFirstArgs} args - Arguments to find a Vehicule
     * @example
     * // Get one Vehicule
     * const vehicule = await prisma.vehicule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehiculeFindFirstArgs>(args?: SelectSubset<T, VehiculeFindFirstArgs<ExtArgs>>): Prisma__VehiculeClient<$Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculeFindFirstOrThrowArgs} args - Arguments to find a Vehicule
     * @example
     * // Get one Vehicule
     * const vehicule = await prisma.vehicule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehiculeFindFirstOrThrowArgs>(args?: SelectSubset<T, VehiculeFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehiculeClient<$Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vehicules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicules
     * const vehicules = await prisma.vehicule.findMany()
     * 
     * // Get first 10 Vehicules
     * const vehicules = await prisma.vehicule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehiculeWithIdOnly = await prisma.vehicule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehiculeFindManyArgs>(args?: SelectSubset<T, VehiculeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vehicule.
     * @param {VehiculeCreateArgs} args - Arguments to create a Vehicule.
     * @example
     * // Create one Vehicule
     * const Vehicule = await prisma.vehicule.create({
     *   data: {
     *     // ... data to create a Vehicule
     *   }
     * })
     * 
     */
    create<T extends VehiculeCreateArgs>(args: SelectSubset<T, VehiculeCreateArgs<ExtArgs>>): Prisma__VehiculeClient<$Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vehicules.
     * @param {VehiculeCreateManyArgs} args - Arguments to create many Vehicules.
     * @example
     * // Create many Vehicules
     * const vehicule = await prisma.vehicule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehiculeCreateManyArgs>(args?: SelectSubset<T, VehiculeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vehicules and returns the data saved in the database.
     * @param {VehiculeCreateManyAndReturnArgs} args - Arguments to create many Vehicules.
     * @example
     * // Create many Vehicules
     * const vehicule = await prisma.vehicule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vehicules and only return the `id`
     * const vehiculeWithIdOnly = await prisma.vehicule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VehiculeCreateManyAndReturnArgs>(args?: SelectSubset<T, VehiculeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vehicule.
     * @param {VehiculeDeleteArgs} args - Arguments to delete one Vehicule.
     * @example
     * // Delete one Vehicule
     * const Vehicule = await prisma.vehicule.delete({
     *   where: {
     *     // ... filter to delete one Vehicule
     *   }
     * })
     * 
     */
    delete<T extends VehiculeDeleteArgs>(args: SelectSubset<T, VehiculeDeleteArgs<ExtArgs>>): Prisma__VehiculeClient<$Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vehicule.
     * @param {VehiculeUpdateArgs} args - Arguments to update one Vehicule.
     * @example
     * // Update one Vehicule
     * const vehicule = await prisma.vehicule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehiculeUpdateArgs>(args: SelectSubset<T, VehiculeUpdateArgs<ExtArgs>>): Prisma__VehiculeClient<$Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vehicules.
     * @param {VehiculeDeleteManyArgs} args - Arguments to filter Vehicules to delete.
     * @example
     * // Delete a few Vehicules
     * const { count } = await prisma.vehicule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehiculeDeleteManyArgs>(args?: SelectSubset<T, VehiculeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicules
     * const vehicule = await prisma.vehicule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehiculeUpdateManyArgs>(args: SelectSubset<T, VehiculeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicules and returns the data updated in the database.
     * @param {VehiculeUpdateManyAndReturnArgs} args - Arguments to update many Vehicules.
     * @example
     * // Update many Vehicules
     * const vehicule = await prisma.vehicule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vehicules and only return the `id`
     * const vehiculeWithIdOnly = await prisma.vehicule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VehiculeUpdateManyAndReturnArgs>(args: SelectSubset<T, VehiculeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vehicule.
     * @param {VehiculeUpsertArgs} args - Arguments to update or create a Vehicule.
     * @example
     * // Update or create a Vehicule
     * const vehicule = await prisma.vehicule.upsert({
     *   create: {
     *     // ... data to create a Vehicule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicule we want to update
     *   }
     * })
     */
    upsert<T extends VehiculeUpsertArgs>(args: SelectSubset<T, VehiculeUpsertArgs<ExtArgs>>): Prisma__VehiculeClient<$Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vehicules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculeCountArgs} args - Arguments to filter Vehicules to count.
     * @example
     * // Count the number of Vehicules
     * const count = await prisma.vehicule.count({
     *   where: {
     *     // ... the filter for the Vehicules we want to count
     *   }
     * })
    **/
    count<T extends VehiculeCountArgs>(
      args?: Subset<T, VehiculeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehiculeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VehiculeAggregateArgs>(args: Subset<T, VehiculeAggregateArgs>): Prisma.PrismaPromise<GetVehiculeAggregateType<T>>

    /**
     * Group by Vehicule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiculeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VehiculeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehiculeGroupByArgs['orderBy'] }
        : { orderBy?: VehiculeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VehiculeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehiculeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehicule model
   */
  readonly fields: VehiculeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehicule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehiculeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    missions<T extends Vehicule$missionsArgs<ExtArgs> = {}>(args?: Subset<T, Vehicule$missionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdreMissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Vehicule model
   */
  interface VehiculeFieldRefs {
    readonly id: FieldRef<"Vehicule", 'Int'>
    readonly immatriculation: FieldRef<"Vehicule", 'String'>
    readonly marque: FieldRef<"Vehicule", 'String'>
    readonly modele: FieldRef<"Vehicule", 'String'>
    readonly type: FieldRef<"Vehicule", 'String'>
    readonly disponible: FieldRef<"Vehicule", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Vehicule findUnique
   */
  export type VehiculeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicule
     */
    select?: VehiculeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicule
     */
    omit?: VehiculeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculeInclude<ExtArgs> | null
    /**
     * Filter, which Vehicule to fetch.
     */
    where: VehiculeWhereUniqueInput
  }

  /**
   * Vehicule findUniqueOrThrow
   */
  export type VehiculeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicule
     */
    select?: VehiculeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicule
     */
    omit?: VehiculeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculeInclude<ExtArgs> | null
    /**
     * Filter, which Vehicule to fetch.
     */
    where: VehiculeWhereUniqueInput
  }

  /**
   * Vehicule findFirst
   */
  export type VehiculeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicule
     */
    select?: VehiculeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicule
     */
    omit?: VehiculeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculeInclude<ExtArgs> | null
    /**
     * Filter, which Vehicule to fetch.
     */
    where?: VehiculeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicules to fetch.
     */
    orderBy?: VehiculeOrderByWithRelationInput | VehiculeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicules.
     */
    cursor?: VehiculeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicules.
     */
    distinct?: VehiculeScalarFieldEnum | VehiculeScalarFieldEnum[]
  }

  /**
   * Vehicule findFirstOrThrow
   */
  export type VehiculeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicule
     */
    select?: VehiculeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicule
     */
    omit?: VehiculeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculeInclude<ExtArgs> | null
    /**
     * Filter, which Vehicule to fetch.
     */
    where?: VehiculeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicules to fetch.
     */
    orderBy?: VehiculeOrderByWithRelationInput | VehiculeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicules.
     */
    cursor?: VehiculeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicules.
     */
    distinct?: VehiculeScalarFieldEnum | VehiculeScalarFieldEnum[]
  }

  /**
   * Vehicule findMany
   */
  export type VehiculeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicule
     */
    select?: VehiculeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicule
     */
    omit?: VehiculeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculeInclude<ExtArgs> | null
    /**
     * Filter, which Vehicules to fetch.
     */
    where?: VehiculeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicules to fetch.
     */
    orderBy?: VehiculeOrderByWithRelationInput | VehiculeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehicules.
     */
    cursor?: VehiculeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicules.
     */
    distinct?: VehiculeScalarFieldEnum | VehiculeScalarFieldEnum[]
  }

  /**
   * Vehicule create
   */
  export type VehiculeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicule
     */
    select?: VehiculeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicule
     */
    omit?: VehiculeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculeInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehicule.
     */
    data: XOR<VehiculeCreateInput, VehiculeUncheckedCreateInput>
  }

  /**
   * Vehicule createMany
   */
  export type VehiculeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehicules.
     */
    data: VehiculeCreateManyInput | VehiculeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicule createManyAndReturn
   */
  export type VehiculeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicule
     */
    select?: VehiculeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicule
     */
    omit?: VehiculeOmit<ExtArgs> | null
    /**
     * The data used to create many Vehicules.
     */
    data: VehiculeCreateManyInput | VehiculeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicule update
   */
  export type VehiculeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicule
     */
    select?: VehiculeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicule
     */
    omit?: VehiculeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculeInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehicule.
     */
    data: XOR<VehiculeUpdateInput, VehiculeUncheckedUpdateInput>
    /**
     * Choose, which Vehicule to update.
     */
    where: VehiculeWhereUniqueInput
  }

  /**
   * Vehicule updateMany
   */
  export type VehiculeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehicules.
     */
    data: XOR<VehiculeUpdateManyMutationInput, VehiculeUncheckedUpdateManyInput>
    /**
     * Filter which Vehicules to update
     */
    where?: VehiculeWhereInput
    /**
     * Limit how many Vehicules to update.
     */
    limit?: number
  }

  /**
   * Vehicule updateManyAndReturn
   */
  export type VehiculeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicule
     */
    select?: VehiculeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicule
     */
    omit?: VehiculeOmit<ExtArgs> | null
    /**
     * The data used to update Vehicules.
     */
    data: XOR<VehiculeUpdateManyMutationInput, VehiculeUncheckedUpdateManyInput>
    /**
     * Filter which Vehicules to update
     */
    where?: VehiculeWhereInput
    /**
     * Limit how many Vehicules to update.
     */
    limit?: number
  }

  /**
   * Vehicule upsert
   */
  export type VehiculeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicule
     */
    select?: VehiculeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicule
     */
    omit?: VehiculeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculeInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehicule to update in case it exists.
     */
    where: VehiculeWhereUniqueInput
    /**
     * In case the Vehicule found by the `where` argument doesn't exist, create a new Vehicule with this data.
     */
    create: XOR<VehiculeCreateInput, VehiculeUncheckedCreateInput>
    /**
     * In case the Vehicule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehiculeUpdateInput, VehiculeUncheckedUpdateInput>
  }

  /**
   * Vehicule delete
   */
  export type VehiculeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicule
     */
    select?: VehiculeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicule
     */
    omit?: VehiculeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculeInclude<ExtArgs> | null
    /**
     * Filter which Vehicule to delete.
     */
    where: VehiculeWhereUniqueInput
  }

  /**
   * Vehicule deleteMany
   */
  export type VehiculeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicules to delete
     */
    where?: VehiculeWhereInput
    /**
     * Limit how many Vehicules to delete.
     */
    limit?: number
  }

  /**
   * Vehicule.missions
   */
  export type Vehicule$missionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdreMission
     */
    select?: OrdreMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdreMission
     */
    omit?: OrdreMissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdreMissionInclude<ExtArgs> | null
    where?: OrdreMissionWhereInput
    orderBy?: OrdreMissionOrderByWithRelationInput | OrdreMissionOrderByWithRelationInput[]
    cursor?: OrdreMissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdreMissionScalarFieldEnum | OrdreMissionScalarFieldEnum[]
  }

  /**
   * Vehicule without action
   */
  export type VehiculeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicule
     */
    select?: VehiculeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicule
     */
    omit?: VehiculeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehiculeInclude<ExtArgs> | null
  }


  /**
   * Model ObjetMission
   */

  export type AggregateObjetMission = {
    _count: ObjetMissionCountAggregateOutputType | null
    _avg: ObjetMissionAvgAggregateOutputType | null
    _sum: ObjetMissionSumAggregateOutputType | null
    _min: ObjetMissionMinAggregateOutputType | null
    _max: ObjetMissionMaxAggregateOutputType | null
  }

  export type ObjetMissionAvgAggregateOutputType = {
    id: number | null
  }

  export type ObjetMissionSumAggregateOutputType = {
    id: number | null
  }

  export type ObjetMissionMinAggregateOutputType = {
    id: number | null
    libelle: string | null
    actif: boolean | null
  }

  export type ObjetMissionMaxAggregateOutputType = {
    id: number | null
    libelle: string | null
    actif: boolean | null
  }

  export type ObjetMissionCountAggregateOutputType = {
    id: number
    libelle: number
    actif: number
    _all: number
  }


  export type ObjetMissionAvgAggregateInputType = {
    id?: true
  }

  export type ObjetMissionSumAggregateInputType = {
    id?: true
  }

  export type ObjetMissionMinAggregateInputType = {
    id?: true
    libelle?: true
    actif?: true
  }

  export type ObjetMissionMaxAggregateInputType = {
    id?: true
    libelle?: true
    actif?: true
  }

  export type ObjetMissionCountAggregateInputType = {
    id?: true
    libelle?: true
    actif?: true
    _all?: true
  }

  export type ObjetMissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ObjetMission to aggregate.
     */
    where?: ObjetMissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ObjetMissions to fetch.
     */
    orderBy?: ObjetMissionOrderByWithRelationInput | ObjetMissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ObjetMissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ObjetMissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ObjetMissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ObjetMissions
    **/
    _count?: true | ObjetMissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ObjetMissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ObjetMissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ObjetMissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ObjetMissionMaxAggregateInputType
  }

  export type GetObjetMissionAggregateType<T extends ObjetMissionAggregateArgs> = {
        [P in keyof T & keyof AggregateObjetMission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateObjetMission[P]>
      : GetScalarType<T[P], AggregateObjetMission[P]>
  }




  export type ObjetMissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ObjetMissionWhereInput
    orderBy?: ObjetMissionOrderByWithAggregationInput | ObjetMissionOrderByWithAggregationInput[]
    by: ObjetMissionScalarFieldEnum[] | ObjetMissionScalarFieldEnum
    having?: ObjetMissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ObjetMissionCountAggregateInputType | true
    _avg?: ObjetMissionAvgAggregateInputType
    _sum?: ObjetMissionSumAggregateInputType
    _min?: ObjetMissionMinAggregateInputType
    _max?: ObjetMissionMaxAggregateInputType
  }

  export type ObjetMissionGroupByOutputType = {
    id: number
    libelle: string
    actif: boolean
    _count: ObjetMissionCountAggregateOutputType | null
    _avg: ObjetMissionAvgAggregateOutputType | null
    _sum: ObjetMissionSumAggregateOutputType | null
    _min: ObjetMissionMinAggregateOutputType | null
    _max: ObjetMissionMaxAggregateOutputType | null
  }

  type GetObjetMissionGroupByPayload<T extends ObjetMissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ObjetMissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ObjetMissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ObjetMissionGroupByOutputType[P]>
            : GetScalarType<T[P], ObjetMissionGroupByOutputType[P]>
        }
      >
    >


  export type ObjetMissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    libelle?: boolean
    actif?: boolean
    missions?: boolean | ObjetMission$missionsArgs<ExtArgs>
    _count?: boolean | ObjetMissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["objetMission"]>

  export type ObjetMissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    libelle?: boolean
    actif?: boolean
  }, ExtArgs["result"]["objetMission"]>

  export type ObjetMissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    libelle?: boolean
    actif?: boolean
  }, ExtArgs["result"]["objetMission"]>

  export type ObjetMissionSelectScalar = {
    id?: boolean
    libelle?: boolean
    actif?: boolean
  }

  export type ObjetMissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "libelle" | "actif", ExtArgs["result"]["objetMission"]>
  export type ObjetMissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    missions?: boolean | ObjetMission$missionsArgs<ExtArgs>
    _count?: boolean | ObjetMissionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ObjetMissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ObjetMissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ObjetMissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ObjetMission"
    objects: {
      missions: Prisma.$OrdreMissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      libelle: string
      actif: boolean
    }, ExtArgs["result"]["objetMission"]>
    composites: {}
  }

  type ObjetMissionGetPayload<S extends boolean | null | undefined | ObjetMissionDefaultArgs> = $Result.GetResult<Prisma.$ObjetMissionPayload, S>

  type ObjetMissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ObjetMissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ObjetMissionCountAggregateInputType | true
    }

  export interface ObjetMissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ObjetMission'], meta: { name: 'ObjetMission' } }
    /**
     * Find zero or one ObjetMission that matches the filter.
     * @param {ObjetMissionFindUniqueArgs} args - Arguments to find a ObjetMission
     * @example
     * // Get one ObjetMission
     * const objetMission = await prisma.objetMission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ObjetMissionFindUniqueArgs>(args: SelectSubset<T, ObjetMissionFindUniqueArgs<ExtArgs>>): Prisma__ObjetMissionClient<$Result.GetResult<Prisma.$ObjetMissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ObjetMission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ObjetMissionFindUniqueOrThrowArgs} args - Arguments to find a ObjetMission
     * @example
     * // Get one ObjetMission
     * const objetMission = await prisma.objetMission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ObjetMissionFindUniqueOrThrowArgs>(args: SelectSubset<T, ObjetMissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ObjetMissionClient<$Result.GetResult<Prisma.$ObjetMissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ObjetMission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjetMissionFindFirstArgs} args - Arguments to find a ObjetMission
     * @example
     * // Get one ObjetMission
     * const objetMission = await prisma.objetMission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ObjetMissionFindFirstArgs>(args?: SelectSubset<T, ObjetMissionFindFirstArgs<ExtArgs>>): Prisma__ObjetMissionClient<$Result.GetResult<Prisma.$ObjetMissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ObjetMission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjetMissionFindFirstOrThrowArgs} args - Arguments to find a ObjetMission
     * @example
     * // Get one ObjetMission
     * const objetMission = await prisma.objetMission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ObjetMissionFindFirstOrThrowArgs>(args?: SelectSubset<T, ObjetMissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ObjetMissionClient<$Result.GetResult<Prisma.$ObjetMissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ObjetMissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjetMissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ObjetMissions
     * const objetMissions = await prisma.objetMission.findMany()
     * 
     * // Get first 10 ObjetMissions
     * const objetMissions = await prisma.objetMission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const objetMissionWithIdOnly = await prisma.objetMission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ObjetMissionFindManyArgs>(args?: SelectSubset<T, ObjetMissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObjetMissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ObjetMission.
     * @param {ObjetMissionCreateArgs} args - Arguments to create a ObjetMission.
     * @example
     * // Create one ObjetMission
     * const ObjetMission = await prisma.objetMission.create({
     *   data: {
     *     // ... data to create a ObjetMission
     *   }
     * })
     * 
     */
    create<T extends ObjetMissionCreateArgs>(args: SelectSubset<T, ObjetMissionCreateArgs<ExtArgs>>): Prisma__ObjetMissionClient<$Result.GetResult<Prisma.$ObjetMissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ObjetMissions.
     * @param {ObjetMissionCreateManyArgs} args - Arguments to create many ObjetMissions.
     * @example
     * // Create many ObjetMissions
     * const objetMission = await prisma.objetMission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ObjetMissionCreateManyArgs>(args?: SelectSubset<T, ObjetMissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ObjetMissions and returns the data saved in the database.
     * @param {ObjetMissionCreateManyAndReturnArgs} args - Arguments to create many ObjetMissions.
     * @example
     * // Create many ObjetMissions
     * const objetMission = await prisma.objetMission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ObjetMissions and only return the `id`
     * const objetMissionWithIdOnly = await prisma.objetMission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ObjetMissionCreateManyAndReturnArgs>(args?: SelectSubset<T, ObjetMissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObjetMissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ObjetMission.
     * @param {ObjetMissionDeleteArgs} args - Arguments to delete one ObjetMission.
     * @example
     * // Delete one ObjetMission
     * const ObjetMission = await prisma.objetMission.delete({
     *   where: {
     *     // ... filter to delete one ObjetMission
     *   }
     * })
     * 
     */
    delete<T extends ObjetMissionDeleteArgs>(args: SelectSubset<T, ObjetMissionDeleteArgs<ExtArgs>>): Prisma__ObjetMissionClient<$Result.GetResult<Prisma.$ObjetMissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ObjetMission.
     * @param {ObjetMissionUpdateArgs} args - Arguments to update one ObjetMission.
     * @example
     * // Update one ObjetMission
     * const objetMission = await prisma.objetMission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ObjetMissionUpdateArgs>(args: SelectSubset<T, ObjetMissionUpdateArgs<ExtArgs>>): Prisma__ObjetMissionClient<$Result.GetResult<Prisma.$ObjetMissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ObjetMissions.
     * @param {ObjetMissionDeleteManyArgs} args - Arguments to filter ObjetMissions to delete.
     * @example
     * // Delete a few ObjetMissions
     * const { count } = await prisma.objetMission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ObjetMissionDeleteManyArgs>(args?: SelectSubset<T, ObjetMissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ObjetMissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjetMissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ObjetMissions
     * const objetMission = await prisma.objetMission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ObjetMissionUpdateManyArgs>(args: SelectSubset<T, ObjetMissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ObjetMissions and returns the data updated in the database.
     * @param {ObjetMissionUpdateManyAndReturnArgs} args - Arguments to update many ObjetMissions.
     * @example
     * // Update many ObjetMissions
     * const objetMission = await prisma.objetMission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ObjetMissions and only return the `id`
     * const objetMissionWithIdOnly = await prisma.objetMission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ObjetMissionUpdateManyAndReturnArgs>(args: SelectSubset<T, ObjetMissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ObjetMissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ObjetMission.
     * @param {ObjetMissionUpsertArgs} args - Arguments to update or create a ObjetMission.
     * @example
     * // Update or create a ObjetMission
     * const objetMission = await prisma.objetMission.upsert({
     *   create: {
     *     // ... data to create a ObjetMission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ObjetMission we want to update
     *   }
     * })
     */
    upsert<T extends ObjetMissionUpsertArgs>(args: SelectSubset<T, ObjetMissionUpsertArgs<ExtArgs>>): Prisma__ObjetMissionClient<$Result.GetResult<Prisma.$ObjetMissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ObjetMissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjetMissionCountArgs} args - Arguments to filter ObjetMissions to count.
     * @example
     * // Count the number of ObjetMissions
     * const count = await prisma.objetMission.count({
     *   where: {
     *     // ... the filter for the ObjetMissions we want to count
     *   }
     * })
    **/
    count<T extends ObjetMissionCountArgs>(
      args?: Subset<T, ObjetMissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ObjetMissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ObjetMission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjetMissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ObjetMissionAggregateArgs>(args: Subset<T, ObjetMissionAggregateArgs>): Prisma.PrismaPromise<GetObjetMissionAggregateType<T>>

    /**
     * Group by ObjetMission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ObjetMissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ObjetMissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ObjetMissionGroupByArgs['orderBy'] }
        : { orderBy?: ObjetMissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ObjetMissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetObjetMissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ObjetMission model
   */
  readonly fields: ObjetMissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ObjetMission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ObjetMissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    missions<T extends ObjetMission$missionsArgs<ExtArgs> = {}>(args?: Subset<T, ObjetMission$missionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdreMissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ObjetMission model
   */
  interface ObjetMissionFieldRefs {
    readonly id: FieldRef<"ObjetMission", 'Int'>
    readonly libelle: FieldRef<"ObjetMission", 'String'>
    readonly actif: FieldRef<"ObjetMission", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ObjetMission findUnique
   */
  export type ObjetMissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjetMission
     */
    select?: ObjetMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObjetMission
     */
    omit?: ObjetMissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetMissionInclude<ExtArgs> | null
    /**
     * Filter, which ObjetMission to fetch.
     */
    where: ObjetMissionWhereUniqueInput
  }

  /**
   * ObjetMission findUniqueOrThrow
   */
  export type ObjetMissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjetMission
     */
    select?: ObjetMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObjetMission
     */
    omit?: ObjetMissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetMissionInclude<ExtArgs> | null
    /**
     * Filter, which ObjetMission to fetch.
     */
    where: ObjetMissionWhereUniqueInput
  }

  /**
   * ObjetMission findFirst
   */
  export type ObjetMissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjetMission
     */
    select?: ObjetMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObjetMission
     */
    omit?: ObjetMissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetMissionInclude<ExtArgs> | null
    /**
     * Filter, which ObjetMission to fetch.
     */
    where?: ObjetMissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ObjetMissions to fetch.
     */
    orderBy?: ObjetMissionOrderByWithRelationInput | ObjetMissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ObjetMissions.
     */
    cursor?: ObjetMissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ObjetMissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ObjetMissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ObjetMissions.
     */
    distinct?: ObjetMissionScalarFieldEnum | ObjetMissionScalarFieldEnum[]
  }

  /**
   * ObjetMission findFirstOrThrow
   */
  export type ObjetMissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjetMission
     */
    select?: ObjetMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObjetMission
     */
    omit?: ObjetMissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetMissionInclude<ExtArgs> | null
    /**
     * Filter, which ObjetMission to fetch.
     */
    where?: ObjetMissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ObjetMissions to fetch.
     */
    orderBy?: ObjetMissionOrderByWithRelationInput | ObjetMissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ObjetMissions.
     */
    cursor?: ObjetMissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ObjetMissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ObjetMissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ObjetMissions.
     */
    distinct?: ObjetMissionScalarFieldEnum | ObjetMissionScalarFieldEnum[]
  }

  /**
   * ObjetMission findMany
   */
  export type ObjetMissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjetMission
     */
    select?: ObjetMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObjetMission
     */
    omit?: ObjetMissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetMissionInclude<ExtArgs> | null
    /**
     * Filter, which ObjetMissions to fetch.
     */
    where?: ObjetMissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ObjetMissions to fetch.
     */
    orderBy?: ObjetMissionOrderByWithRelationInput | ObjetMissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ObjetMissions.
     */
    cursor?: ObjetMissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ObjetMissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ObjetMissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ObjetMissions.
     */
    distinct?: ObjetMissionScalarFieldEnum | ObjetMissionScalarFieldEnum[]
  }

  /**
   * ObjetMission create
   */
  export type ObjetMissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjetMission
     */
    select?: ObjetMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObjetMission
     */
    omit?: ObjetMissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetMissionInclude<ExtArgs> | null
    /**
     * The data needed to create a ObjetMission.
     */
    data: XOR<ObjetMissionCreateInput, ObjetMissionUncheckedCreateInput>
  }

  /**
   * ObjetMission createMany
   */
  export type ObjetMissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ObjetMissions.
     */
    data: ObjetMissionCreateManyInput | ObjetMissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ObjetMission createManyAndReturn
   */
  export type ObjetMissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjetMission
     */
    select?: ObjetMissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ObjetMission
     */
    omit?: ObjetMissionOmit<ExtArgs> | null
    /**
     * The data used to create many ObjetMissions.
     */
    data: ObjetMissionCreateManyInput | ObjetMissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ObjetMission update
   */
  export type ObjetMissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjetMission
     */
    select?: ObjetMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObjetMission
     */
    omit?: ObjetMissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetMissionInclude<ExtArgs> | null
    /**
     * The data needed to update a ObjetMission.
     */
    data: XOR<ObjetMissionUpdateInput, ObjetMissionUncheckedUpdateInput>
    /**
     * Choose, which ObjetMission to update.
     */
    where: ObjetMissionWhereUniqueInput
  }

  /**
   * ObjetMission updateMany
   */
  export type ObjetMissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ObjetMissions.
     */
    data: XOR<ObjetMissionUpdateManyMutationInput, ObjetMissionUncheckedUpdateManyInput>
    /**
     * Filter which ObjetMissions to update
     */
    where?: ObjetMissionWhereInput
    /**
     * Limit how many ObjetMissions to update.
     */
    limit?: number
  }

  /**
   * ObjetMission updateManyAndReturn
   */
  export type ObjetMissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjetMission
     */
    select?: ObjetMissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ObjetMission
     */
    omit?: ObjetMissionOmit<ExtArgs> | null
    /**
     * The data used to update ObjetMissions.
     */
    data: XOR<ObjetMissionUpdateManyMutationInput, ObjetMissionUncheckedUpdateManyInput>
    /**
     * Filter which ObjetMissions to update
     */
    where?: ObjetMissionWhereInput
    /**
     * Limit how many ObjetMissions to update.
     */
    limit?: number
  }

  /**
   * ObjetMission upsert
   */
  export type ObjetMissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjetMission
     */
    select?: ObjetMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObjetMission
     */
    omit?: ObjetMissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetMissionInclude<ExtArgs> | null
    /**
     * The filter to search for the ObjetMission to update in case it exists.
     */
    where: ObjetMissionWhereUniqueInput
    /**
     * In case the ObjetMission found by the `where` argument doesn't exist, create a new ObjetMission with this data.
     */
    create: XOR<ObjetMissionCreateInput, ObjetMissionUncheckedCreateInput>
    /**
     * In case the ObjetMission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ObjetMissionUpdateInput, ObjetMissionUncheckedUpdateInput>
  }

  /**
   * ObjetMission delete
   */
  export type ObjetMissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjetMission
     */
    select?: ObjetMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObjetMission
     */
    omit?: ObjetMissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetMissionInclude<ExtArgs> | null
    /**
     * Filter which ObjetMission to delete.
     */
    where: ObjetMissionWhereUniqueInput
  }

  /**
   * ObjetMission deleteMany
   */
  export type ObjetMissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ObjetMissions to delete
     */
    where?: ObjetMissionWhereInput
    /**
     * Limit how many ObjetMissions to delete.
     */
    limit?: number
  }

  /**
   * ObjetMission.missions
   */
  export type ObjetMission$missionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdreMission
     */
    select?: OrdreMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdreMission
     */
    omit?: OrdreMissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdreMissionInclude<ExtArgs> | null
    where?: OrdreMissionWhereInput
    orderBy?: OrdreMissionOrderByWithRelationInput | OrdreMissionOrderByWithRelationInput[]
    cursor?: OrdreMissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdreMissionScalarFieldEnum | OrdreMissionScalarFieldEnum[]
  }

  /**
   * ObjetMission without action
   */
  export type ObjetMissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ObjetMission
     */
    select?: ObjetMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ObjetMission
     */
    omit?: ObjetMissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ObjetMissionInclude<ExtArgs> | null
  }


  /**
   * Model Destination
   */

  export type AggregateDestination = {
    _count: DestinationCountAggregateOutputType | null
    _avg: DestinationAvgAggregateOutputType | null
    _sum: DestinationSumAggregateOutputType | null
    _min: DestinationMinAggregateOutputType | null
    _max: DestinationMaxAggregateOutputType | null
  }

  export type DestinationAvgAggregateOutputType = {
    id: number | null
  }

  export type DestinationSumAggregateOutputType = {
    id: number | null
  }

  export type DestinationMinAggregateOutputType = {
    id: number | null
    nom: string | null
    ville: string | null
  }

  export type DestinationMaxAggregateOutputType = {
    id: number | null
    nom: string | null
    ville: string | null
  }

  export type DestinationCountAggregateOutputType = {
    id: number
    nom: number
    ville: number
    _all: number
  }


  export type DestinationAvgAggregateInputType = {
    id?: true
  }

  export type DestinationSumAggregateInputType = {
    id?: true
  }

  export type DestinationMinAggregateInputType = {
    id?: true
    nom?: true
    ville?: true
  }

  export type DestinationMaxAggregateInputType = {
    id?: true
    nom?: true
    ville?: true
  }

  export type DestinationCountAggregateInputType = {
    id?: true
    nom?: true
    ville?: true
    _all?: true
  }

  export type DestinationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Destination to aggregate.
     */
    where?: DestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinations to fetch.
     */
    orderBy?: DestinationOrderByWithRelationInput | DestinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Destinations
    **/
    _count?: true | DestinationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DestinationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DestinationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DestinationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DestinationMaxAggregateInputType
  }

  export type GetDestinationAggregateType<T extends DestinationAggregateArgs> = {
        [P in keyof T & keyof AggregateDestination]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDestination[P]>
      : GetScalarType<T[P], AggregateDestination[P]>
  }




  export type DestinationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DestinationWhereInput
    orderBy?: DestinationOrderByWithAggregationInput | DestinationOrderByWithAggregationInput[]
    by: DestinationScalarFieldEnum[] | DestinationScalarFieldEnum
    having?: DestinationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DestinationCountAggregateInputType | true
    _avg?: DestinationAvgAggregateInputType
    _sum?: DestinationSumAggregateInputType
    _min?: DestinationMinAggregateInputType
    _max?: DestinationMaxAggregateInputType
  }

  export type DestinationGroupByOutputType = {
    id: number
    nom: string
    ville: string
    _count: DestinationCountAggregateOutputType | null
    _avg: DestinationAvgAggregateOutputType | null
    _sum: DestinationSumAggregateOutputType | null
    _min: DestinationMinAggregateOutputType | null
    _max: DestinationMaxAggregateOutputType | null
  }

  type GetDestinationGroupByPayload<T extends DestinationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DestinationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DestinationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DestinationGroupByOutputType[P]>
            : GetScalarType<T[P], DestinationGroupByOutputType[P]>
        }
      >
    >


  export type DestinationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    ville?: boolean
    missions?: boolean | Destination$missionsArgs<ExtArgs>
    _count?: boolean | DestinationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["destination"]>

  export type DestinationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    ville?: boolean
  }, ExtArgs["result"]["destination"]>

  export type DestinationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    ville?: boolean
  }, ExtArgs["result"]["destination"]>

  export type DestinationSelectScalar = {
    id?: boolean
    nom?: boolean
    ville?: boolean
  }

  export type DestinationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "ville", ExtArgs["result"]["destination"]>
  export type DestinationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    missions?: boolean | Destination$missionsArgs<ExtArgs>
    _count?: boolean | DestinationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DestinationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DestinationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DestinationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Destination"
    objects: {
      missions: Prisma.$OrdreMissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nom: string
      ville: string
    }, ExtArgs["result"]["destination"]>
    composites: {}
  }

  type DestinationGetPayload<S extends boolean | null | undefined | DestinationDefaultArgs> = $Result.GetResult<Prisma.$DestinationPayload, S>

  type DestinationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DestinationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DestinationCountAggregateInputType | true
    }

  export interface DestinationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Destination'], meta: { name: 'Destination' } }
    /**
     * Find zero or one Destination that matches the filter.
     * @param {DestinationFindUniqueArgs} args - Arguments to find a Destination
     * @example
     * // Get one Destination
     * const destination = await prisma.destination.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DestinationFindUniqueArgs>(args: SelectSubset<T, DestinationFindUniqueArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Destination that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DestinationFindUniqueOrThrowArgs} args - Arguments to find a Destination
     * @example
     * // Get one Destination
     * const destination = await prisma.destination.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DestinationFindUniqueOrThrowArgs>(args: SelectSubset<T, DestinationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Destination that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationFindFirstArgs} args - Arguments to find a Destination
     * @example
     * // Get one Destination
     * const destination = await prisma.destination.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DestinationFindFirstArgs>(args?: SelectSubset<T, DestinationFindFirstArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Destination that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationFindFirstOrThrowArgs} args - Arguments to find a Destination
     * @example
     * // Get one Destination
     * const destination = await prisma.destination.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DestinationFindFirstOrThrowArgs>(args?: SelectSubset<T, DestinationFindFirstOrThrowArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Destinations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Destinations
     * const destinations = await prisma.destination.findMany()
     * 
     * // Get first 10 Destinations
     * const destinations = await prisma.destination.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const destinationWithIdOnly = await prisma.destination.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DestinationFindManyArgs>(args?: SelectSubset<T, DestinationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Destination.
     * @param {DestinationCreateArgs} args - Arguments to create a Destination.
     * @example
     * // Create one Destination
     * const Destination = await prisma.destination.create({
     *   data: {
     *     // ... data to create a Destination
     *   }
     * })
     * 
     */
    create<T extends DestinationCreateArgs>(args: SelectSubset<T, DestinationCreateArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Destinations.
     * @param {DestinationCreateManyArgs} args - Arguments to create many Destinations.
     * @example
     * // Create many Destinations
     * const destination = await prisma.destination.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DestinationCreateManyArgs>(args?: SelectSubset<T, DestinationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Destinations and returns the data saved in the database.
     * @param {DestinationCreateManyAndReturnArgs} args - Arguments to create many Destinations.
     * @example
     * // Create many Destinations
     * const destination = await prisma.destination.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Destinations and only return the `id`
     * const destinationWithIdOnly = await prisma.destination.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DestinationCreateManyAndReturnArgs>(args?: SelectSubset<T, DestinationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Destination.
     * @param {DestinationDeleteArgs} args - Arguments to delete one Destination.
     * @example
     * // Delete one Destination
     * const Destination = await prisma.destination.delete({
     *   where: {
     *     // ... filter to delete one Destination
     *   }
     * })
     * 
     */
    delete<T extends DestinationDeleteArgs>(args: SelectSubset<T, DestinationDeleteArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Destination.
     * @param {DestinationUpdateArgs} args - Arguments to update one Destination.
     * @example
     * // Update one Destination
     * const destination = await prisma.destination.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DestinationUpdateArgs>(args: SelectSubset<T, DestinationUpdateArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Destinations.
     * @param {DestinationDeleteManyArgs} args - Arguments to filter Destinations to delete.
     * @example
     * // Delete a few Destinations
     * const { count } = await prisma.destination.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DestinationDeleteManyArgs>(args?: SelectSubset<T, DestinationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Destinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Destinations
     * const destination = await prisma.destination.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DestinationUpdateManyArgs>(args: SelectSubset<T, DestinationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Destinations and returns the data updated in the database.
     * @param {DestinationUpdateManyAndReturnArgs} args - Arguments to update many Destinations.
     * @example
     * // Update many Destinations
     * const destination = await prisma.destination.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Destinations and only return the `id`
     * const destinationWithIdOnly = await prisma.destination.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DestinationUpdateManyAndReturnArgs>(args: SelectSubset<T, DestinationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Destination.
     * @param {DestinationUpsertArgs} args - Arguments to update or create a Destination.
     * @example
     * // Update or create a Destination
     * const destination = await prisma.destination.upsert({
     *   create: {
     *     // ... data to create a Destination
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Destination we want to update
     *   }
     * })
     */
    upsert<T extends DestinationUpsertArgs>(args: SelectSubset<T, DestinationUpsertArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Destinations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationCountArgs} args - Arguments to filter Destinations to count.
     * @example
     * // Count the number of Destinations
     * const count = await prisma.destination.count({
     *   where: {
     *     // ... the filter for the Destinations we want to count
     *   }
     * })
    **/
    count<T extends DestinationCountArgs>(
      args?: Subset<T, DestinationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DestinationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Destination.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DestinationAggregateArgs>(args: Subset<T, DestinationAggregateArgs>): Prisma.PrismaPromise<GetDestinationAggregateType<T>>

    /**
     * Group by Destination.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DestinationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DestinationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DestinationGroupByArgs['orderBy'] }
        : { orderBy?: DestinationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DestinationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDestinationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Destination model
   */
  readonly fields: DestinationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Destination.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DestinationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    missions<T extends Destination$missionsArgs<ExtArgs> = {}>(args?: Subset<T, Destination$missionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdreMissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Destination model
   */
  interface DestinationFieldRefs {
    readonly id: FieldRef<"Destination", 'Int'>
    readonly nom: FieldRef<"Destination", 'String'>
    readonly ville: FieldRef<"Destination", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Destination findUnique
   */
  export type DestinationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destination to fetch.
     */
    where: DestinationWhereUniqueInput
  }

  /**
   * Destination findUniqueOrThrow
   */
  export type DestinationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destination to fetch.
     */
    where: DestinationWhereUniqueInput
  }

  /**
   * Destination findFirst
   */
  export type DestinationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destination to fetch.
     */
    where?: DestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinations to fetch.
     */
    orderBy?: DestinationOrderByWithRelationInput | DestinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Destinations.
     */
    cursor?: DestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Destinations.
     */
    distinct?: DestinationScalarFieldEnum | DestinationScalarFieldEnum[]
  }

  /**
   * Destination findFirstOrThrow
   */
  export type DestinationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destination to fetch.
     */
    where?: DestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinations to fetch.
     */
    orderBy?: DestinationOrderByWithRelationInput | DestinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Destinations.
     */
    cursor?: DestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Destinations.
     */
    distinct?: DestinationScalarFieldEnum | DestinationScalarFieldEnum[]
  }

  /**
   * Destination findMany
   */
  export type DestinationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter, which Destinations to fetch.
     */
    where?: DestinationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Destinations to fetch.
     */
    orderBy?: DestinationOrderByWithRelationInput | DestinationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Destinations.
     */
    cursor?: DestinationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Destinations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Destinations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Destinations.
     */
    distinct?: DestinationScalarFieldEnum | DestinationScalarFieldEnum[]
  }

  /**
   * Destination create
   */
  export type DestinationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * The data needed to create a Destination.
     */
    data: XOR<DestinationCreateInput, DestinationUncheckedCreateInput>
  }

  /**
   * Destination createMany
   */
  export type DestinationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Destinations.
     */
    data: DestinationCreateManyInput | DestinationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Destination createManyAndReturn
   */
  export type DestinationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * The data used to create many Destinations.
     */
    data: DestinationCreateManyInput | DestinationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Destination update
   */
  export type DestinationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * The data needed to update a Destination.
     */
    data: XOR<DestinationUpdateInput, DestinationUncheckedUpdateInput>
    /**
     * Choose, which Destination to update.
     */
    where: DestinationWhereUniqueInput
  }

  /**
   * Destination updateMany
   */
  export type DestinationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Destinations.
     */
    data: XOR<DestinationUpdateManyMutationInput, DestinationUncheckedUpdateManyInput>
    /**
     * Filter which Destinations to update
     */
    where?: DestinationWhereInput
    /**
     * Limit how many Destinations to update.
     */
    limit?: number
  }

  /**
   * Destination updateManyAndReturn
   */
  export type DestinationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * The data used to update Destinations.
     */
    data: XOR<DestinationUpdateManyMutationInput, DestinationUncheckedUpdateManyInput>
    /**
     * Filter which Destinations to update
     */
    where?: DestinationWhereInput
    /**
     * Limit how many Destinations to update.
     */
    limit?: number
  }

  /**
   * Destination upsert
   */
  export type DestinationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * The filter to search for the Destination to update in case it exists.
     */
    where: DestinationWhereUniqueInput
    /**
     * In case the Destination found by the `where` argument doesn't exist, create a new Destination with this data.
     */
    create: XOR<DestinationCreateInput, DestinationUncheckedCreateInput>
    /**
     * In case the Destination was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DestinationUpdateInput, DestinationUncheckedUpdateInput>
  }

  /**
   * Destination delete
   */
  export type DestinationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
    /**
     * Filter which Destination to delete.
     */
    where: DestinationWhereUniqueInput
  }

  /**
   * Destination deleteMany
   */
  export type DestinationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Destinations to delete
     */
    where?: DestinationWhereInput
    /**
     * Limit how many Destinations to delete.
     */
    limit?: number
  }

  /**
   * Destination.missions
   */
  export type Destination$missionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdreMission
     */
    select?: OrdreMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdreMission
     */
    omit?: OrdreMissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdreMissionInclude<ExtArgs> | null
    where?: OrdreMissionWhereInput
    orderBy?: OrdreMissionOrderByWithRelationInput | OrdreMissionOrderByWithRelationInput[]
    cursor?: OrdreMissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdreMissionScalarFieldEnum | OrdreMissionScalarFieldEnum[]
  }

  /**
   * Destination without action
   */
  export type DestinationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Destination
     */
    select?: DestinationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Destination
     */
    omit?: DestinationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DestinationInclude<ExtArgs> | null
  }


  /**
   * Model OrdreMission
   */

  export type AggregateOrdreMission = {
    _count: OrdreMissionCountAggregateOutputType | null
    _avg: OrdreMissionAvgAggregateOutputType | null
    _sum: OrdreMissionSumAggregateOutputType | null
    _min: OrdreMissionMinAggregateOutputType | null
    _max: OrdreMissionMaxAggregateOutputType | null
  }

  export type OrdreMissionAvgAggregateOutputType = {
    id: number | null
    employeId: number | null
    destinationId: number | null
    chauffeurId: number | null
    vehiculeId: number | null
    objetMissionId: number | null
    creeParId: number | null
    fraisParticipation: number | null
    fraisMission: number | null
  }

  export type OrdreMissionSumAggregateOutputType = {
    id: number | null
    employeId: number | null
    destinationId: number | null
    chauffeurId: number | null
    vehiculeId: number | null
    objetMissionId: number | null
    creeParId: number | null
    fraisParticipation: number | null
    fraisMission: number | null
  }

  export type OrdreMissionMinAggregateOutputType = {
    id: number | null
    reference: string | null
    employeId: number | null
    destinationId: number | null
    chauffeurId: number | null
    vehiculeId: number | null
    objetMissionId: number | null
    creeParId: number | null
    dateDebut: Date | null
    dateFin: Date | null
    heureDepart: string | null
    heureRetour: string | null
    departReel: Date | null
    retourReel: Date | null
    statut: string | null
    itineraire: string | null
    fraisParticipation: number | null
    fraisMission: number | null
    notes: string | null
    createdAt: Date | null
  }

  export type OrdreMissionMaxAggregateOutputType = {
    id: number | null
    reference: string | null
    employeId: number | null
    destinationId: number | null
    chauffeurId: number | null
    vehiculeId: number | null
    objetMissionId: number | null
    creeParId: number | null
    dateDebut: Date | null
    dateFin: Date | null
    heureDepart: string | null
    heureRetour: string | null
    departReel: Date | null
    retourReel: Date | null
    statut: string | null
    itineraire: string | null
    fraisParticipation: number | null
    fraisMission: number | null
    notes: string | null
    createdAt: Date | null
  }

  export type OrdreMissionCountAggregateOutputType = {
    id: number
    reference: number
    employeId: number
    destinationId: number
    chauffeurId: number
    vehiculeId: number
    objetMissionId: number
    creeParId: number
    dateDebut: number
    dateFin: number
    heureDepart: number
    heureRetour: number
    departReel: number
    retourReel: number
    statut: number
    itineraire: number
    fraisParticipation: number
    fraisMission: number
    notes: number
    createdAt: number
    _all: number
  }


  export type OrdreMissionAvgAggregateInputType = {
    id?: true
    employeId?: true
    destinationId?: true
    chauffeurId?: true
    vehiculeId?: true
    objetMissionId?: true
    creeParId?: true
    fraisParticipation?: true
    fraisMission?: true
  }

  export type OrdreMissionSumAggregateInputType = {
    id?: true
    employeId?: true
    destinationId?: true
    chauffeurId?: true
    vehiculeId?: true
    objetMissionId?: true
    creeParId?: true
    fraisParticipation?: true
    fraisMission?: true
  }

  export type OrdreMissionMinAggregateInputType = {
    id?: true
    reference?: true
    employeId?: true
    destinationId?: true
    chauffeurId?: true
    vehiculeId?: true
    objetMissionId?: true
    creeParId?: true
    dateDebut?: true
    dateFin?: true
    heureDepart?: true
    heureRetour?: true
    departReel?: true
    retourReel?: true
    statut?: true
    itineraire?: true
    fraisParticipation?: true
    fraisMission?: true
    notes?: true
    createdAt?: true
  }

  export type OrdreMissionMaxAggregateInputType = {
    id?: true
    reference?: true
    employeId?: true
    destinationId?: true
    chauffeurId?: true
    vehiculeId?: true
    objetMissionId?: true
    creeParId?: true
    dateDebut?: true
    dateFin?: true
    heureDepart?: true
    heureRetour?: true
    departReel?: true
    retourReel?: true
    statut?: true
    itineraire?: true
    fraisParticipation?: true
    fraisMission?: true
    notes?: true
    createdAt?: true
  }

  export type OrdreMissionCountAggregateInputType = {
    id?: true
    reference?: true
    employeId?: true
    destinationId?: true
    chauffeurId?: true
    vehiculeId?: true
    objetMissionId?: true
    creeParId?: true
    dateDebut?: true
    dateFin?: true
    heureDepart?: true
    heureRetour?: true
    departReel?: true
    retourReel?: true
    statut?: true
    itineraire?: true
    fraisParticipation?: true
    fraisMission?: true
    notes?: true
    createdAt?: true
    _all?: true
  }

  export type OrdreMissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrdreMission to aggregate.
     */
    where?: OrdreMissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrdreMissions to fetch.
     */
    orderBy?: OrdreMissionOrderByWithRelationInput | OrdreMissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrdreMissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrdreMissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrdreMissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrdreMissions
    **/
    _count?: true | OrdreMissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdreMissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdreMissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdreMissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdreMissionMaxAggregateInputType
  }

  export type GetOrdreMissionAggregateType<T extends OrdreMissionAggregateArgs> = {
        [P in keyof T & keyof AggregateOrdreMission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrdreMission[P]>
      : GetScalarType<T[P], AggregateOrdreMission[P]>
  }




  export type OrdreMissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdreMissionWhereInput
    orderBy?: OrdreMissionOrderByWithAggregationInput | OrdreMissionOrderByWithAggregationInput[]
    by: OrdreMissionScalarFieldEnum[] | OrdreMissionScalarFieldEnum
    having?: OrdreMissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdreMissionCountAggregateInputType | true
    _avg?: OrdreMissionAvgAggregateInputType
    _sum?: OrdreMissionSumAggregateInputType
    _min?: OrdreMissionMinAggregateInputType
    _max?: OrdreMissionMaxAggregateInputType
  }

  export type OrdreMissionGroupByOutputType = {
    id: number
    reference: string
    employeId: number
    destinationId: number
    chauffeurId: number
    vehiculeId: number
    objetMissionId: number
    creeParId: number
    dateDebut: Date
    dateFin: Date | null
    heureDepart: string
    heureRetour: string | null
    departReel: Date | null
    retourReel: Date | null
    statut: string
    itineraire: string | null
    fraisParticipation: number | null
    fraisMission: number | null
    notes: string | null
    createdAt: Date
    _count: OrdreMissionCountAggregateOutputType | null
    _avg: OrdreMissionAvgAggregateOutputType | null
    _sum: OrdreMissionSumAggregateOutputType | null
    _min: OrdreMissionMinAggregateOutputType | null
    _max: OrdreMissionMaxAggregateOutputType | null
  }

  type GetOrdreMissionGroupByPayload<T extends OrdreMissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdreMissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdreMissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdreMissionGroupByOutputType[P]>
            : GetScalarType<T[P], OrdreMissionGroupByOutputType[P]>
        }
      >
    >


  export type OrdreMissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reference?: boolean
    employeId?: boolean
    destinationId?: boolean
    chauffeurId?: boolean
    vehiculeId?: boolean
    objetMissionId?: boolean
    creeParId?: boolean
    dateDebut?: boolean
    dateFin?: boolean
    heureDepart?: boolean
    heureRetour?: boolean
    departReel?: boolean
    retourReel?: boolean
    statut?: boolean
    itineraire?: boolean
    fraisParticipation?: boolean
    fraisMission?: boolean
    notes?: boolean
    createdAt?: boolean
    employe?: boolean | EmployeDefaultArgs<ExtArgs>
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
    chauffeur?: boolean | ChauffeurDefaultArgs<ExtArgs>
    vehicule?: boolean | VehiculeDefaultArgs<ExtArgs>
    objetMission?: boolean | ObjetMissionDefaultArgs<ExtArgs>
    creePar?: boolean | UtilisateurDefaultArgs<ExtArgs>
    accompagnateurs?: boolean | OrdreMission$accompagnateursArgs<ExtArgs>
    _count?: boolean | OrdreMissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ordreMission"]>

  export type OrdreMissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reference?: boolean
    employeId?: boolean
    destinationId?: boolean
    chauffeurId?: boolean
    vehiculeId?: boolean
    objetMissionId?: boolean
    creeParId?: boolean
    dateDebut?: boolean
    dateFin?: boolean
    heureDepart?: boolean
    heureRetour?: boolean
    departReel?: boolean
    retourReel?: boolean
    statut?: boolean
    itineraire?: boolean
    fraisParticipation?: boolean
    fraisMission?: boolean
    notes?: boolean
    createdAt?: boolean
    employe?: boolean | EmployeDefaultArgs<ExtArgs>
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
    chauffeur?: boolean | ChauffeurDefaultArgs<ExtArgs>
    vehicule?: boolean | VehiculeDefaultArgs<ExtArgs>
    objetMission?: boolean | ObjetMissionDefaultArgs<ExtArgs>
    creePar?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ordreMission"]>

  export type OrdreMissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reference?: boolean
    employeId?: boolean
    destinationId?: boolean
    chauffeurId?: boolean
    vehiculeId?: boolean
    objetMissionId?: boolean
    creeParId?: boolean
    dateDebut?: boolean
    dateFin?: boolean
    heureDepart?: boolean
    heureRetour?: boolean
    departReel?: boolean
    retourReel?: boolean
    statut?: boolean
    itineraire?: boolean
    fraisParticipation?: boolean
    fraisMission?: boolean
    notes?: boolean
    createdAt?: boolean
    employe?: boolean | EmployeDefaultArgs<ExtArgs>
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
    chauffeur?: boolean | ChauffeurDefaultArgs<ExtArgs>
    vehicule?: boolean | VehiculeDefaultArgs<ExtArgs>
    objetMission?: boolean | ObjetMissionDefaultArgs<ExtArgs>
    creePar?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ordreMission"]>

  export type OrdreMissionSelectScalar = {
    id?: boolean
    reference?: boolean
    employeId?: boolean
    destinationId?: boolean
    chauffeurId?: boolean
    vehiculeId?: boolean
    objetMissionId?: boolean
    creeParId?: boolean
    dateDebut?: boolean
    dateFin?: boolean
    heureDepart?: boolean
    heureRetour?: boolean
    departReel?: boolean
    retourReel?: boolean
    statut?: boolean
    itineraire?: boolean
    fraisParticipation?: boolean
    fraisMission?: boolean
    notes?: boolean
    createdAt?: boolean
  }

  export type OrdreMissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reference" | "employeId" | "destinationId" | "chauffeurId" | "vehiculeId" | "objetMissionId" | "creeParId" | "dateDebut" | "dateFin" | "heureDepart" | "heureRetour" | "departReel" | "retourReel" | "statut" | "itineraire" | "fraisParticipation" | "fraisMission" | "notes" | "createdAt", ExtArgs["result"]["ordreMission"]>
  export type OrdreMissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employe?: boolean | EmployeDefaultArgs<ExtArgs>
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
    chauffeur?: boolean | ChauffeurDefaultArgs<ExtArgs>
    vehicule?: boolean | VehiculeDefaultArgs<ExtArgs>
    objetMission?: boolean | ObjetMissionDefaultArgs<ExtArgs>
    creePar?: boolean | UtilisateurDefaultArgs<ExtArgs>
    accompagnateurs?: boolean | OrdreMission$accompagnateursArgs<ExtArgs>
    _count?: boolean | OrdreMissionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrdreMissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employe?: boolean | EmployeDefaultArgs<ExtArgs>
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
    chauffeur?: boolean | ChauffeurDefaultArgs<ExtArgs>
    vehicule?: boolean | VehiculeDefaultArgs<ExtArgs>
    objetMission?: boolean | ObjetMissionDefaultArgs<ExtArgs>
    creePar?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }
  export type OrdreMissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employe?: boolean | EmployeDefaultArgs<ExtArgs>
    destination?: boolean | DestinationDefaultArgs<ExtArgs>
    chauffeur?: boolean | ChauffeurDefaultArgs<ExtArgs>
    vehicule?: boolean | VehiculeDefaultArgs<ExtArgs>
    objetMission?: boolean | ObjetMissionDefaultArgs<ExtArgs>
    creePar?: boolean | UtilisateurDefaultArgs<ExtArgs>
  }

  export type $OrdreMissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrdreMission"
    objects: {
      employe: Prisma.$EmployePayload<ExtArgs>
      destination: Prisma.$DestinationPayload<ExtArgs>
      chauffeur: Prisma.$ChauffeurPayload<ExtArgs>
      vehicule: Prisma.$VehiculePayload<ExtArgs>
      objetMission: Prisma.$ObjetMissionPayload<ExtArgs>
      creePar: Prisma.$UtilisateurPayload<ExtArgs>
      accompagnateurs: Prisma.$AccompagnateurPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      reference: string
      employeId: number
      destinationId: number
      chauffeurId: number
      vehiculeId: number
      objetMissionId: number
      creeParId: number
      dateDebut: Date
      dateFin: Date | null
      heureDepart: string
      heureRetour: string | null
      departReel: Date | null
      retourReel: Date | null
      statut: string
      itineraire: string | null
      fraisParticipation: number | null
      fraisMission: number | null
      notes: string | null
      createdAt: Date
    }, ExtArgs["result"]["ordreMission"]>
    composites: {}
  }

  type OrdreMissionGetPayload<S extends boolean | null | undefined | OrdreMissionDefaultArgs> = $Result.GetResult<Prisma.$OrdreMissionPayload, S>

  type OrdreMissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrdreMissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdreMissionCountAggregateInputType | true
    }

  export interface OrdreMissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrdreMission'], meta: { name: 'OrdreMission' } }
    /**
     * Find zero or one OrdreMission that matches the filter.
     * @param {OrdreMissionFindUniqueArgs} args - Arguments to find a OrdreMission
     * @example
     * // Get one OrdreMission
     * const ordreMission = await prisma.ordreMission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrdreMissionFindUniqueArgs>(args: SelectSubset<T, OrdreMissionFindUniqueArgs<ExtArgs>>): Prisma__OrdreMissionClient<$Result.GetResult<Prisma.$OrdreMissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrdreMission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrdreMissionFindUniqueOrThrowArgs} args - Arguments to find a OrdreMission
     * @example
     * // Get one OrdreMission
     * const ordreMission = await prisma.ordreMission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrdreMissionFindUniqueOrThrowArgs>(args: SelectSubset<T, OrdreMissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrdreMissionClient<$Result.GetResult<Prisma.$OrdreMissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrdreMission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdreMissionFindFirstArgs} args - Arguments to find a OrdreMission
     * @example
     * // Get one OrdreMission
     * const ordreMission = await prisma.ordreMission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrdreMissionFindFirstArgs>(args?: SelectSubset<T, OrdreMissionFindFirstArgs<ExtArgs>>): Prisma__OrdreMissionClient<$Result.GetResult<Prisma.$OrdreMissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrdreMission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdreMissionFindFirstOrThrowArgs} args - Arguments to find a OrdreMission
     * @example
     * // Get one OrdreMission
     * const ordreMission = await prisma.ordreMission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrdreMissionFindFirstOrThrowArgs>(args?: SelectSubset<T, OrdreMissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrdreMissionClient<$Result.GetResult<Prisma.$OrdreMissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrdreMissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdreMissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrdreMissions
     * const ordreMissions = await prisma.ordreMission.findMany()
     * 
     * // Get first 10 OrdreMissions
     * const ordreMissions = await prisma.ordreMission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordreMissionWithIdOnly = await prisma.ordreMission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrdreMissionFindManyArgs>(args?: SelectSubset<T, OrdreMissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdreMissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrdreMission.
     * @param {OrdreMissionCreateArgs} args - Arguments to create a OrdreMission.
     * @example
     * // Create one OrdreMission
     * const OrdreMission = await prisma.ordreMission.create({
     *   data: {
     *     // ... data to create a OrdreMission
     *   }
     * })
     * 
     */
    create<T extends OrdreMissionCreateArgs>(args: SelectSubset<T, OrdreMissionCreateArgs<ExtArgs>>): Prisma__OrdreMissionClient<$Result.GetResult<Prisma.$OrdreMissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrdreMissions.
     * @param {OrdreMissionCreateManyArgs} args - Arguments to create many OrdreMissions.
     * @example
     * // Create many OrdreMissions
     * const ordreMission = await prisma.ordreMission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrdreMissionCreateManyArgs>(args?: SelectSubset<T, OrdreMissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrdreMissions and returns the data saved in the database.
     * @param {OrdreMissionCreateManyAndReturnArgs} args - Arguments to create many OrdreMissions.
     * @example
     * // Create many OrdreMissions
     * const ordreMission = await prisma.ordreMission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrdreMissions and only return the `id`
     * const ordreMissionWithIdOnly = await prisma.ordreMission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrdreMissionCreateManyAndReturnArgs>(args?: SelectSubset<T, OrdreMissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdreMissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrdreMission.
     * @param {OrdreMissionDeleteArgs} args - Arguments to delete one OrdreMission.
     * @example
     * // Delete one OrdreMission
     * const OrdreMission = await prisma.ordreMission.delete({
     *   where: {
     *     // ... filter to delete one OrdreMission
     *   }
     * })
     * 
     */
    delete<T extends OrdreMissionDeleteArgs>(args: SelectSubset<T, OrdreMissionDeleteArgs<ExtArgs>>): Prisma__OrdreMissionClient<$Result.GetResult<Prisma.$OrdreMissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrdreMission.
     * @param {OrdreMissionUpdateArgs} args - Arguments to update one OrdreMission.
     * @example
     * // Update one OrdreMission
     * const ordreMission = await prisma.ordreMission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrdreMissionUpdateArgs>(args: SelectSubset<T, OrdreMissionUpdateArgs<ExtArgs>>): Prisma__OrdreMissionClient<$Result.GetResult<Prisma.$OrdreMissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrdreMissions.
     * @param {OrdreMissionDeleteManyArgs} args - Arguments to filter OrdreMissions to delete.
     * @example
     * // Delete a few OrdreMissions
     * const { count } = await prisma.ordreMission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrdreMissionDeleteManyArgs>(args?: SelectSubset<T, OrdreMissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrdreMissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdreMissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrdreMissions
     * const ordreMission = await prisma.ordreMission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrdreMissionUpdateManyArgs>(args: SelectSubset<T, OrdreMissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrdreMissions and returns the data updated in the database.
     * @param {OrdreMissionUpdateManyAndReturnArgs} args - Arguments to update many OrdreMissions.
     * @example
     * // Update many OrdreMissions
     * const ordreMission = await prisma.ordreMission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrdreMissions and only return the `id`
     * const ordreMissionWithIdOnly = await prisma.ordreMission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrdreMissionUpdateManyAndReturnArgs>(args: SelectSubset<T, OrdreMissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdreMissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrdreMission.
     * @param {OrdreMissionUpsertArgs} args - Arguments to update or create a OrdreMission.
     * @example
     * // Update or create a OrdreMission
     * const ordreMission = await prisma.ordreMission.upsert({
     *   create: {
     *     // ... data to create a OrdreMission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrdreMission we want to update
     *   }
     * })
     */
    upsert<T extends OrdreMissionUpsertArgs>(args: SelectSubset<T, OrdreMissionUpsertArgs<ExtArgs>>): Prisma__OrdreMissionClient<$Result.GetResult<Prisma.$OrdreMissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrdreMissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdreMissionCountArgs} args - Arguments to filter OrdreMissions to count.
     * @example
     * // Count the number of OrdreMissions
     * const count = await prisma.ordreMission.count({
     *   where: {
     *     // ... the filter for the OrdreMissions we want to count
     *   }
     * })
    **/
    count<T extends OrdreMissionCountArgs>(
      args?: Subset<T, OrdreMissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdreMissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrdreMission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdreMissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrdreMissionAggregateArgs>(args: Subset<T, OrdreMissionAggregateArgs>): Prisma.PrismaPromise<GetOrdreMissionAggregateType<T>>

    /**
     * Group by OrdreMission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdreMissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrdreMissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdreMissionGroupByArgs['orderBy'] }
        : { orderBy?: OrdreMissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrdreMissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdreMissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrdreMission model
   */
  readonly fields: OrdreMissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrdreMission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrdreMissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employe<T extends EmployeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeDefaultArgs<ExtArgs>>): Prisma__EmployeClient<$Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    destination<T extends DestinationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DestinationDefaultArgs<ExtArgs>>): Prisma__DestinationClient<$Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    chauffeur<T extends ChauffeurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChauffeurDefaultArgs<ExtArgs>>): Prisma__ChauffeurClient<$Result.GetResult<Prisma.$ChauffeurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    vehicule<T extends VehiculeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehiculeDefaultArgs<ExtArgs>>): Prisma__VehiculeClient<$Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    objetMission<T extends ObjetMissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ObjetMissionDefaultArgs<ExtArgs>>): Prisma__ObjetMissionClient<$Result.GetResult<Prisma.$ObjetMissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creePar<T extends UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtilisateurDefaultArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    accompagnateurs<T extends OrdreMission$accompagnateursArgs<ExtArgs> = {}>(args?: Subset<T, OrdreMission$accompagnateursArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccompagnateurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrdreMission model
   */
  interface OrdreMissionFieldRefs {
    readonly id: FieldRef<"OrdreMission", 'Int'>
    readonly reference: FieldRef<"OrdreMission", 'String'>
    readonly employeId: FieldRef<"OrdreMission", 'Int'>
    readonly destinationId: FieldRef<"OrdreMission", 'Int'>
    readonly chauffeurId: FieldRef<"OrdreMission", 'Int'>
    readonly vehiculeId: FieldRef<"OrdreMission", 'Int'>
    readonly objetMissionId: FieldRef<"OrdreMission", 'Int'>
    readonly creeParId: FieldRef<"OrdreMission", 'Int'>
    readonly dateDebut: FieldRef<"OrdreMission", 'DateTime'>
    readonly dateFin: FieldRef<"OrdreMission", 'DateTime'>
    readonly heureDepart: FieldRef<"OrdreMission", 'String'>
    readonly heureRetour: FieldRef<"OrdreMission", 'String'>
    readonly departReel: FieldRef<"OrdreMission", 'DateTime'>
    readonly retourReel: FieldRef<"OrdreMission", 'DateTime'>
    readonly statut: FieldRef<"OrdreMission", 'String'>
    readonly itineraire: FieldRef<"OrdreMission", 'String'>
    readonly fraisParticipation: FieldRef<"OrdreMission", 'Float'>
    readonly fraisMission: FieldRef<"OrdreMission", 'Float'>
    readonly notes: FieldRef<"OrdreMission", 'String'>
    readonly createdAt: FieldRef<"OrdreMission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrdreMission findUnique
   */
  export type OrdreMissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdreMission
     */
    select?: OrdreMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdreMission
     */
    omit?: OrdreMissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdreMissionInclude<ExtArgs> | null
    /**
     * Filter, which OrdreMission to fetch.
     */
    where: OrdreMissionWhereUniqueInput
  }

  /**
   * OrdreMission findUniqueOrThrow
   */
  export type OrdreMissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdreMission
     */
    select?: OrdreMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdreMission
     */
    omit?: OrdreMissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdreMissionInclude<ExtArgs> | null
    /**
     * Filter, which OrdreMission to fetch.
     */
    where: OrdreMissionWhereUniqueInput
  }

  /**
   * OrdreMission findFirst
   */
  export type OrdreMissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdreMission
     */
    select?: OrdreMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdreMission
     */
    omit?: OrdreMissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdreMissionInclude<ExtArgs> | null
    /**
     * Filter, which OrdreMission to fetch.
     */
    where?: OrdreMissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrdreMissions to fetch.
     */
    orderBy?: OrdreMissionOrderByWithRelationInput | OrdreMissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrdreMissions.
     */
    cursor?: OrdreMissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrdreMissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrdreMissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrdreMissions.
     */
    distinct?: OrdreMissionScalarFieldEnum | OrdreMissionScalarFieldEnum[]
  }

  /**
   * OrdreMission findFirstOrThrow
   */
  export type OrdreMissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdreMission
     */
    select?: OrdreMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdreMission
     */
    omit?: OrdreMissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdreMissionInclude<ExtArgs> | null
    /**
     * Filter, which OrdreMission to fetch.
     */
    where?: OrdreMissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrdreMissions to fetch.
     */
    orderBy?: OrdreMissionOrderByWithRelationInput | OrdreMissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrdreMissions.
     */
    cursor?: OrdreMissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrdreMissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrdreMissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrdreMissions.
     */
    distinct?: OrdreMissionScalarFieldEnum | OrdreMissionScalarFieldEnum[]
  }

  /**
   * OrdreMission findMany
   */
  export type OrdreMissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdreMission
     */
    select?: OrdreMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdreMission
     */
    omit?: OrdreMissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdreMissionInclude<ExtArgs> | null
    /**
     * Filter, which OrdreMissions to fetch.
     */
    where?: OrdreMissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrdreMissions to fetch.
     */
    orderBy?: OrdreMissionOrderByWithRelationInput | OrdreMissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrdreMissions.
     */
    cursor?: OrdreMissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrdreMissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrdreMissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrdreMissions.
     */
    distinct?: OrdreMissionScalarFieldEnum | OrdreMissionScalarFieldEnum[]
  }

  /**
   * OrdreMission create
   */
  export type OrdreMissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdreMission
     */
    select?: OrdreMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdreMission
     */
    omit?: OrdreMissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdreMissionInclude<ExtArgs> | null
    /**
     * The data needed to create a OrdreMission.
     */
    data: XOR<OrdreMissionCreateInput, OrdreMissionUncheckedCreateInput>
  }

  /**
   * OrdreMission createMany
   */
  export type OrdreMissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrdreMissions.
     */
    data: OrdreMissionCreateManyInput | OrdreMissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrdreMission createManyAndReturn
   */
  export type OrdreMissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdreMission
     */
    select?: OrdreMissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrdreMission
     */
    omit?: OrdreMissionOmit<ExtArgs> | null
    /**
     * The data used to create many OrdreMissions.
     */
    data: OrdreMissionCreateManyInput | OrdreMissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdreMissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrdreMission update
   */
  export type OrdreMissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdreMission
     */
    select?: OrdreMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdreMission
     */
    omit?: OrdreMissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdreMissionInclude<ExtArgs> | null
    /**
     * The data needed to update a OrdreMission.
     */
    data: XOR<OrdreMissionUpdateInput, OrdreMissionUncheckedUpdateInput>
    /**
     * Choose, which OrdreMission to update.
     */
    where: OrdreMissionWhereUniqueInput
  }

  /**
   * OrdreMission updateMany
   */
  export type OrdreMissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrdreMissions.
     */
    data: XOR<OrdreMissionUpdateManyMutationInput, OrdreMissionUncheckedUpdateManyInput>
    /**
     * Filter which OrdreMissions to update
     */
    where?: OrdreMissionWhereInput
    /**
     * Limit how many OrdreMissions to update.
     */
    limit?: number
  }

  /**
   * OrdreMission updateManyAndReturn
   */
  export type OrdreMissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdreMission
     */
    select?: OrdreMissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrdreMission
     */
    omit?: OrdreMissionOmit<ExtArgs> | null
    /**
     * The data used to update OrdreMissions.
     */
    data: XOR<OrdreMissionUpdateManyMutationInput, OrdreMissionUncheckedUpdateManyInput>
    /**
     * Filter which OrdreMissions to update
     */
    where?: OrdreMissionWhereInput
    /**
     * Limit how many OrdreMissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdreMissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrdreMission upsert
   */
  export type OrdreMissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdreMission
     */
    select?: OrdreMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdreMission
     */
    omit?: OrdreMissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdreMissionInclude<ExtArgs> | null
    /**
     * The filter to search for the OrdreMission to update in case it exists.
     */
    where: OrdreMissionWhereUniqueInput
    /**
     * In case the OrdreMission found by the `where` argument doesn't exist, create a new OrdreMission with this data.
     */
    create: XOR<OrdreMissionCreateInput, OrdreMissionUncheckedCreateInput>
    /**
     * In case the OrdreMission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrdreMissionUpdateInput, OrdreMissionUncheckedUpdateInput>
  }

  /**
   * OrdreMission delete
   */
  export type OrdreMissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdreMission
     */
    select?: OrdreMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdreMission
     */
    omit?: OrdreMissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdreMissionInclude<ExtArgs> | null
    /**
     * Filter which OrdreMission to delete.
     */
    where: OrdreMissionWhereUniqueInput
  }

  /**
   * OrdreMission deleteMany
   */
  export type OrdreMissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrdreMissions to delete
     */
    where?: OrdreMissionWhereInput
    /**
     * Limit how many OrdreMissions to delete.
     */
    limit?: number
  }

  /**
   * OrdreMission.accompagnateurs
   */
  export type OrdreMission$accompagnateursArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accompagnateur
     */
    select?: AccompagnateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accompagnateur
     */
    omit?: AccompagnateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccompagnateurInclude<ExtArgs> | null
    where?: AccompagnateurWhereInput
    orderBy?: AccompagnateurOrderByWithRelationInput | AccompagnateurOrderByWithRelationInput[]
    cursor?: AccompagnateurWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccompagnateurScalarFieldEnum | AccompagnateurScalarFieldEnum[]
  }

  /**
   * OrdreMission without action
   */
  export type OrdreMissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdreMission
     */
    select?: OrdreMissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrdreMission
     */
    omit?: OrdreMissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdreMissionInclude<ExtArgs> | null
  }


  /**
   * Model Accompagnateur
   */

  export type AggregateAccompagnateur = {
    _count: AccompagnateurCountAggregateOutputType | null
    _avg: AccompagnateurAvgAggregateOutputType | null
    _sum: AccompagnateurSumAggregateOutputType | null
    _min: AccompagnateurMinAggregateOutputType | null
    _max: AccompagnateurMaxAggregateOutputType | null
  }

  export type AccompagnateurAvgAggregateOutputType = {
    id: number | null
    ordreMissionId: number | null
    employeId: number | null
  }

  export type AccompagnateurSumAggregateOutputType = {
    id: number | null
    ordreMissionId: number | null
    employeId: number | null
  }

  export type AccompagnateurMinAggregateOutputType = {
    id: number | null
    ordreMissionId: number | null
    employeId: number | null
  }

  export type AccompagnateurMaxAggregateOutputType = {
    id: number | null
    ordreMissionId: number | null
    employeId: number | null
  }

  export type AccompagnateurCountAggregateOutputType = {
    id: number
    ordreMissionId: number
    employeId: number
    _all: number
  }


  export type AccompagnateurAvgAggregateInputType = {
    id?: true
    ordreMissionId?: true
    employeId?: true
  }

  export type AccompagnateurSumAggregateInputType = {
    id?: true
    ordreMissionId?: true
    employeId?: true
  }

  export type AccompagnateurMinAggregateInputType = {
    id?: true
    ordreMissionId?: true
    employeId?: true
  }

  export type AccompagnateurMaxAggregateInputType = {
    id?: true
    ordreMissionId?: true
    employeId?: true
  }

  export type AccompagnateurCountAggregateInputType = {
    id?: true
    ordreMissionId?: true
    employeId?: true
    _all?: true
  }

  export type AccompagnateurAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accompagnateur to aggregate.
     */
    where?: AccompagnateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accompagnateurs to fetch.
     */
    orderBy?: AccompagnateurOrderByWithRelationInput | AccompagnateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccompagnateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accompagnateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accompagnateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accompagnateurs
    **/
    _count?: true | AccompagnateurCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccompagnateurAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccompagnateurSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccompagnateurMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccompagnateurMaxAggregateInputType
  }

  export type GetAccompagnateurAggregateType<T extends AccompagnateurAggregateArgs> = {
        [P in keyof T & keyof AggregateAccompagnateur]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccompagnateur[P]>
      : GetScalarType<T[P], AggregateAccompagnateur[P]>
  }




  export type AccompagnateurGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccompagnateurWhereInput
    orderBy?: AccompagnateurOrderByWithAggregationInput | AccompagnateurOrderByWithAggregationInput[]
    by: AccompagnateurScalarFieldEnum[] | AccompagnateurScalarFieldEnum
    having?: AccompagnateurScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccompagnateurCountAggregateInputType | true
    _avg?: AccompagnateurAvgAggregateInputType
    _sum?: AccompagnateurSumAggregateInputType
    _min?: AccompagnateurMinAggregateInputType
    _max?: AccompagnateurMaxAggregateInputType
  }

  export type AccompagnateurGroupByOutputType = {
    id: number
    ordreMissionId: number
    employeId: number
    _count: AccompagnateurCountAggregateOutputType | null
    _avg: AccompagnateurAvgAggregateOutputType | null
    _sum: AccompagnateurSumAggregateOutputType | null
    _min: AccompagnateurMinAggregateOutputType | null
    _max: AccompagnateurMaxAggregateOutputType | null
  }

  type GetAccompagnateurGroupByPayload<T extends AccompagnateurGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccompagnateurGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccompagnateurGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccompagnateurGroupByOutputType[P]>
            : GetScalarType<T[P], AccompagnateurGroupByOutputType[P]>
        }
      >
    >


  export type AccompagnateurSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ordreMissionId?: boolean
    employeId?: boolean
    ordreMission?: boolean | OrdreMissionDefaultArgs<ExtArgs>
    employe?: boolean | EmployeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accompagnateur"]>

  export type AccompagnateurSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ordreMissionId?: boolean
    employeId?: boolean
    ordreMission?: boolean | OrdreMissionDefaultArgs<ExtArgs>
    employe?: boolean | EmployeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accompagnateur"]>

  export type AccompagnateurSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ordreMissionId?: boolean
    employeId?: boolean
    ordreMission?: boolean | OrdreMissionDefaultArgs<ExtArgs>
    employe?: boolean | EmployeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["accompagnateur"]>

  export type AccompagnateurSelectScalar = {
    id?: boolean
    ordreMissionId?: boolean
    employeId?: boolean
  }

  export type AccompagnateurOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ordreMissionId" | "employeId", ExtArgs["result"]["accompagnateur"]>
  export type AccompagnateurInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ordreMission?: boolean | OrdreMissionDefaultArgs<ExtArgs>
    employe?: boolean | EmployeDefaultArgs<ExtArgs>
  }
  export type AccompagnateurIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ordreMission?: boolean | OrdreMissionDefaultArgs<ExtArgs>
    employe?: boolean | EmployeDefaultArgs<ExtArgs>
  }
  export type AccompagnateurIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ordreMission?: boolean | OrdreMissionDefaultArgs<ExtArgs>
    employe?: boolean | EmployeDefaultArgs<ExtArgs>
  }

  export type $AccompagnateurPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Accompagnateur"
    objects: {
      ordreMission: Prisma.$OrdreMissionPayload<ExtArgs>
      employe: Prisma.$EmployePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ordreMissionId: number
      employeId: number
    }, ExtArgs["result"]["accompagnateur"]>
    composites: {}
  }

  type AccompagnateurGetPayload<S extends boolean | null | undefined | AccompagnateurDefaultArgs> = $Result.GetResult<Prisma.$AccompagnateurPayload, S>

  type AccompagnateurCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccompagnateurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccompagnateurCountAggregateInputType | true
    }

  export interface AccompagnateurDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Accompagnateur'], meta: { name: 'Accompagnateur' } }
    /**
     * Find zero or one Accompagnateur that matches the filter.
     * @param {AccompagnateurFindUniqueArgs} args - Arguments to find a Accompagnateur
     * @example
     * // Get one Accompagnateur
     * const accompagnateur = await prisma.accompagnateur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccompagnateurFindUniqueArgs>(args: SelectSubset<T, AccompagnateurFindUniqueArgs<ExtArgs>>): Prisma__AccompagnateurClient<$Result.GetResult<Prisma.$AccompagnateurPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Accompagnateur that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccompagnateurFindUniqueOrThrowArgs} args - Arguments to find a Accompagnateur
     * @example
     * // Get one Accompagnateur
     * const accompagnateur = await prisma.accompagnateur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccompagnateurFindUniqueOrThrowArgs>(args: SelectSubset<T, AccompagnateurFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccompagnateurClient<$Result.GetResult<Prisma.$AccompagnateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Accompagnateur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccompagnateurFindFirstArgs} args - Arguments to find a Accompagnateur
     * @example
     * // Get one Accompagnateur
     * const accompagnateur = await prisma.accompagnateur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccompagnateurFindFirstArgs>(args?: SelectSubset<T, AccompagnateurFindFirstArgs<ExtArgs>>): Prisma__AccompagnateurClient<$Result.GetResult<Prisma.$AccompagnateurPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Accompagnateur that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccompagnateurFindFirstOrThrowArgs} args - Arguments to find a Accompagnateur
     * @example
     * // Get one Accompagnateur
     * const accompagnateur = await prisma.accompagnateur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccompagnateurFindFirstOrThrowArgs>(args?: SelectSubset<T, AccompagnateurFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccompagnateurClient<$Result.GetResult<Prisma.$AccompagnateurPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accompagnateurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccompagnateurFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accompagnateurs
     * const accompagnateurs = await prisma.accompagnateur.findMany()
     * 
     * // Get first 10 Accompagnateurs
     * const accompagnateurs = await prisma.accompagnateur.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accompagnateurWithIdOnly = await prisma.accompagnateur.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccompagnateurFindManyArgs>(args?: SelectSubset<T, AccompagnateurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccompagnateurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Accompagnateur.
     * @param {AccompagnateurCreateArgs} args - Arguments to create a Accompagnateur.
     * @example
     * // Create one Accompagnateur
     * const Accompagnateur = await prisma.accompagnateur.create({
     *   data: {
     *     // ... data to create a Accompagnateur
     *   }
     * })
     * 
     */
    create<T extends AccompagnateurCreateArgs>(args: SelectSubset<T, AccompagnateurCreateArgs<ExtArgs>>): Prisma__AccompagnateurClient<$Result.GetResult<Prisma.$AccompagnateurPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accompagnateurs.
     * @param {AccompagnateurCreateManyArgs} args - Arguments to create many Accompagnateurs.
     * @example
     * // Create many Accompagnateurs
     * const accompagnateur = await prisma.accompagnateur.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccompagnateurCreateManyArgs>(args?: SelectSubset<T, AccompagnateurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accompagnateurs and returns the data saved in the database.
     * @param {AccompagnateurCreateManyAndReturnArgs} args - Arguments to create many Accompagnateurs.
     * @example
     * // Create many Accompagnateurs
     * const accompagnateur = await prisma.accompagnateur.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accompagnateurs and only return the `id`
     * const accompagnateurWithIdOnly = await prisma.accompagnateur.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccompagnateurCreateManyAndReturnArgs>(args?: SelectSubset<T, AccompagnateurCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccompagnateurPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Accompagnateur.
     * @param {AccompagnateurDeleteArgs} args - Arguments to delete one Accompagnateur.
     * @example
     * // Delete one Accompagnateur
     * const Accompagnateur = await prisma.accompagnateur.delete({
     *   where: {
     *     // ... filter to delete one Accompagnateur
     *   }
     * })
     * 
     */
    delete<T extends AccompagnateurDeleteArgs>(args: SelectSubset<T, AccompagnateurDeleteArgs<ExtArgs>>): Prisma__AccompagnateurClient<$Result.GetResult<Prisma.$AccompagnateurPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Accompagnateur.
     * @param {AccompagnateurUpdateArgs} args - Arguments to update one Accompagnateur.
     * @example
     * // Update one Accompagnateur
     * const accompagnateur = await prisma.accompagnateur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccompagnateurUpdateArgs>(args: SelectSubset<T, AccompagnateurUpdateArgs<ExtArgs>>): Prisma__AccompagnateurClient<$Result.GetResult<Prisma.$AccompagnateurPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accompagnateurs.
     * @param {AccompagnateurDeleteManyArgs} args - Arguments to filter Accompagnateurs to delete.
     * @example
     * // Delete a few Accompagnateurs
     * const { count } = await prisma.accompagnateur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccompagnateurDeleteManyArgs>(args?: SelectSubset<T, AccompagnateurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accompagnateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccompagnateurUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accompagnateurs
     * const accompagnateur = await prisma.accompagnateur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccompagnateurUpdateManyArgs>(args: SelectSubset<T, AccompagnateurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accompagnateurs and returns the data updated in the database.
     * @param {AccompagnateurUpdateManyAndReturnArgs} args - Arguments to update many Accompagnateurs.
     * @example
     * // Update many Accompagnateurs
     * const accompagnateur = await prisma.accompagnateur.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accompagnateurs and only return the `id`
     * const accompagnateurWithIdOnly = await prisma.accompagnateur.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccompagnateurUpdateManyAndReturnArgs>(args: SelectSubset<T, AccompagnateurUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccompagnateurPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Accompagnateur.
     * @param {AccompagnateurUpsertArgs} args - Arguments to update or create a Accompagnateur.
     * @example
     * // Update or create a Accompagnateur
     * const accompagnateur = await prisma.accompagnateur.upsert({
     *   create: {
     *     // ... data to create a Accompagnateur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Accompagnateur we want to update
     *   }
     * })
     */
    upsert<T extends AccompagnateurUpsertArgs>(args: SelectSubset<T, AccompagnateurUpsertArgs<ExtArgs>>): Prisma__AccompagnateurClient<$Result.GetResult<Prisma.$AccompagnateurPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accompagnateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccompagnateurCountArgs} args - Arguments to filter Accompagnateurs to count.
     * @example
     * // Count the number of Accompagnateurs
     * const count = await prisma.accompagnateur.count({
     *   where: {
     *     // ... the filter for the Accompagnateurs we want to count
     *   }
     * })
    **/
    count<T extends AccompagnateurCountArgs>(
      args?: Subset<T, AccompagnateurCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccompagnateurCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Accompagnateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccompagnateurAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccompagnateurAggregateArgs>(args: Subset<T, AccompagnateurAggregateArgs>): Prisma.PrismaPromise<GetAccompagnateurAggregateType<T>>

    /**
     * Group by Accompagnateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccompagnateurGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccompagnateurGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccompagnateurGroupByArgs['orderBy'] }
        : { orderBy?: AccompagnateurGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccompagnateurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccompagnateurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Accompagnateur model
   */
  readonly fields: AccompagnateurFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Accompagnateur.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccompagnateurClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ordreMission<T extends OrdreMissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrdreMissionDefaultArgs<ExtArgs>>): Prisma__OrdreMissionClient<$Result.GetResult<Prisma.$OrdreMissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    employe<T extends EmployeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeDefaultArgs<ExtArgs>>): Prisma__EmployeClient<$Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Accompagnateur model
   */
  interface AccompagnateurFieldRefs {
    readonly id: FieldRef<"Accompagnateur", 'Int'>
    readonly ordreMissionId: FieldRef<"Accompagnateur", 'Int'>
    readonly employeId: FieldRef<"Accompagnateur", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Accompagnateur findUnique
   */
  export type AccompagnateurFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accompagnateur
     */
    select?: AccompagnateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accompagnateur
     */
    omit?: AccompagnateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccompagnateurInclude<ExtArgs> | null
    /**
     * Filter, which Accompagnateur to fetch.
     */
    where: AccompagnateurWhereUniqueInput
  }

  /**
   * Accompagnateur findUniqueOrThrow
   */
  export type AccompagnateurFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accompagnateur
     */
    select?: AccompagnateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accompagnateur
     */
    omit?: AccompagnateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccompagnateurInclude<ExtArgs> | null
    /**
     * Filter, which Accompagnateur to fetch.
     */
    where: AccompagnateurWhereUniqueInput
  }

  /**
   * Accompagnateur findFirst
   */
  export type AccompagnateurFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accompagnateur
     */
    select?: AccompagnateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accompagnateur
     */
    omit?: AccompagnateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccompagnateurInclude<ExtArgs> | null
    /**
     * Filter, which Accompagnateur to fetch.
     */
    where?: AccompagnateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accompagnateurs to fetch.
     */
    orderBy?: AccompagnateurOrderByWithRelationInput | AccompagnateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accompagnateurs.
     */
    cursor?: AccompagnateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accompagnateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accompagnateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accompagnateurs.
     */
    distinct?: AccompagnateurScalarFieldEnum | AccompagnateurScalarFieldEnum[]
  }

  /**
   * Accompagnateur findFirstOrThrow
   */
  export type AccompagnateurFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accompagnateur
     */
    select?: AccompagnateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accompagnateur
     */
    omit?: AccompagnateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccompagnateurInclude<ExtArgs> | null
    /**
     * Filter, which Accompagnateur to fetch.
     */
    where?: AccompagnateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accompagnateurs to fetch.
     */
    orderBy?: AccompagnateurOrderByWithRelationInput | AccompagnateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accompagnateurs.
     */
    cursor?: AccompagnateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accompagnateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accompagnateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accompagnateurs.
     */
    distinct?: AccompagnateurScalarFieldEnum | AccompagnateurScalarFieldEnum[]
  }

  /**
   * Accompagnateur findMany
   */
  export type AccompagnateurFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accompagnateur
     */
    select?: AccompagnateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accompagnateur
     */
    omit?: AccompagnateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccompagnateurInclude<ExtArgs> | null
    /**
     * Filter, which Accompagnateurs to fetch.
     */
    where?: AccompagnateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accompagnateurs to fetch.
     */
    orderBy?: AccompagnateurOrderByWithRelationInput | AccompagnateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accompagnateurs.
     */
    cursor?: AccompagnateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accompagnateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accompagnateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accompagnateurs.
     */
    distinct?: AccompagnateurScalarFieldEnum | AccompagnateurScalarFieldEnum[]
  }

  /**
   * Accompagnateur create
   */
  export type AccompagnateurCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accompagnateur
     */
    select?: AccompagnateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accompagnateur
     */
    omit?: AccompagnateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccompagnateurInclude<ExtArgs> | null
    /**
     * The data needed to create a Accompagnateur.
     */
    data: XOR<AccompagnateurCreateInput, AccompagnateurUncheckedCreateInput>
  }

  /**
   * Accompagnateur createMany
   */
  export type AccompagnateurCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accompagnateurs.
     */
    data: AccompagnateurCreateManyInput | AccompagnateurCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Accompagnateur createManyAndReturn
   */
  export type AccompagnateurCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accompagnateur
     */
    select?: AccompagnateurSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Accompagnateur
     */
    omit?: AccompagnateurOmit<ExtArgs> | null
    /**
     * The data used to create many Accompagnateurs.
     */
    data: AccompagnateurCreateManyInput | AccompagnateurCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccompagnateurIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Accompagnateur update
   */
  export type AccompagnateurUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accompagnateur
     */
    select?: AccompagnateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accompagnateur
     */
    omit?: AccompagnateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccompagnateurInclude<ExtArgs> | null
    /**
     * The data needed to update a Accompagnateur.
     */
    data: XOR<AccompagnateurUpdateInput, AccompagnateurUncheckedUpdateInput>
    /**
     * Choose, which Accompagnateur to update.
     */
    where: AccompagnateurWhereUniqueInput
  }

  /**
   * Accompagnateur updateMany
   */
  export type AccompagnateurUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accompagnateurs.
     */
    data: XOR<AccompagnateurUpdateManyMutationInput, AccompagnateurUncheckedUpdateManyInput>
    /**
     * Filter which Accompagnateurs to update
     */
    where?: AccompagnateurWhereInput
    /**
     * Limit how many Accompagnateurs to update.
     */
    limit?: number
  }

  /**
   * Accompagnateur updateManyAndReturn
   */
  export type AccompagnateurUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accompagnateur
     */
    select?: AccompagnateurSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Accompagnateur
     */
    omit?: AccompagnateurOmit<ExtArgs> | null
    /**
     * The data used to update Accompagnateurs.
     */
    data: XOR<AccompagnateurUpdateManyMutationInput, AccompagnateurUncheckedUpdateManyInput>
    /**
     * Filter which Accompagnateurs to update
     */
    where?: AccompagnateurWhereInput
    /**
     * Limit how many Accompagnateurs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccompagnateurIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Accompagnateur upsert
   */
  export type AccompagnateurUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accompagnateur
     */
    select?: AccompagnateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accompagnateur
     */
    omit?: AccompagnateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccompagnateurInclude<ExtArgs> | null
    /**
     * The filter to search for the Accompagnateur to update in case it exists.
     */
    where: AccompagnateurWhereUniqueInput
    /**
     * In case the Accompagnateur found by the `where` argument doesn't exist, create a new Accompagnateur with this data.
     */
    create: XOR<AccompagnateurCreateInput, AccompagnateurUncheckedCreateInput>
    /**
     * In case the Accompagnateur was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccompagnateurUpdateInput, AccompagnateurUncheckedUpdateInput>
  }

  /**
   * Accompagnateur delete
   */
  export type AccompagnateurDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accompagnateur
     */
    select?: AccompagnateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accompagnateur
     */
    omit?: AccompagnateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccompagnateurInclude<ExtArgs> | null
    /**
     * Filter which Accompagnateur to delete.
     */
    where: AccompagnateurWhereUniqueInput
  }

  /**
   * Accompagnateur deleteMany
   */
  export type AccompagnateurDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accompagnateurs to delete
     */
    where?: AccompagnateurWhereInput
    /**
     * Limit how many Accompagnateurs to delete.
     */
    limit?: number
  }

  /**
   * Accompagnateur without action
   */
  export type AccompagnateurDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Accompagnateur
     */
    select?: AccompagnateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Accompagnateur
     */
    omit?: AccompagnateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccompagnateurInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UtilisateurScalarFieldEnum: {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    nom: 'nom',
    prenom: 'prenom',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UtilisateurScalarFieldEnum = (typeof UtilisateurScalarFieldEnum)[keyof typeof UtilisateurScalarFieldEnum]


  export const EmployeScalarFieldEnum: {
    id: 'id',
    mle: 'mle',
    nom: 'nom',
    prenom: 'prenom',
    fonction: 'fonction',
    hotelAffectation: 'hotelAffectation',
    actif: 'actif'
  };

  export type EmployeScalarFieldEnum = (typeof EmployeScalarFieldEnum)[keyof typeof EmployeScalarFieldEnum]


  export const ChauffeurScalarFieldEnum: {
    id: 'id',
    mle: 'mle',
    nom: 'nom',
    prenom: 'prenom',
    telephone: 'telephone',
    disponible: 'disponible'
  };

  export type ChauffeurScalarFieldEnum = (typeof ChauffeurScalarFieldEnum)[keyof typeof ChauffeurScalarFieldEnum]


  export const VehiculeScalarFieldEnum: {
    id: 'id',
    immatriculation: 'immatriculation',
    marque: 'marque',
    modele: 'modele',
    type: 'type',
    disponible: 'disponible'
  };

  export type VehiculeScalarFieldEnum = (typeof VehiculeScalarFieldEnum)[keyof typeof VehiculeScalarFieldEnum]


  export const ObjetMissionScalarFieldEnum: {
    id: 'id',
    libelle: 'libelle',
    actif: 'actif'
  };

  export type ObjetMissionScalarFieldEnum = (typeof ObjetMissionScalarFieldEnum)[keyof typeof ObjetMissionScalarFieldEnum]


  export const DestinationScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    ville: 'ville'
  };

  export type DestinationScalarFieldEnum = (typeof DestinationScalarFieldEnum)[keyof typeof DestinationScalarFieldEnum]


  export const OrdreMissionScalarFieldEnum: {
    id: 'id',
    reference: 'reference',
    employeId: 'employeId',
    destinationId: 'destinationId',
    chauffeurId: 'chauffeurId',
    vehiculeId: 'vehiculeId',
    objetMissionId: 'objetMissionId',
    creeParId: 'creeParId',
    dateDebut: 'dateDebut',
    dateFin: 'dateFin',
    heureDepart: 'heureDepart',
    heureRetour: 'heureRetour',
    departReel: 'departReel',
    retourReel: 'retourReel',
    statut: 'statut',
    itineraire: 'itineraire',
    fraisParticipation: 'fraisParticipation',
    fraisMission: 'fraisMission',
    notes: 'notes',
    createdAt: 'createdAt'
  };

  export type OrdreMissionScalarFieldEnum = (typeof OrdreMissionScalarFieldEnum)[keyof typeof OrdreMissionScalarFieldEnum]


  export const AccompagnateurScalarFieldEnum: {
    id: 'id',
    ordreMissionId: 'ordreMissionId',
    employeId: 'employeId'
  };

  export type AccompagnateurScalarFieldEnum = (typeof AccompagnateurScalarFieldEnum)[keyof typeof AccompagnateurScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UtilisateurWhereInput = {
    AND?: UtilisateurWhereInput | UtilisateurWhereInput[]
    OR?: UtilisateurWhereInput[]
    NOT?: UtilisateurWhereInput | UtilisateurWhereInput[]
    id?: IntFilter<"Utilisateur"> | number
    email?: StringFilter<"Utilisateur"> | string
    passwordHash?: StringFilter<"Utilisateur"> | string
    nom?: StringFilter<"Utilisateur"> | string
    prenom?: StringFilter<"Utilisateur"> | string
    role?: StringFilter<"Utilisateur"> | string
    createdAt?: DateTimeFilter<"Utilisateur"> | Date | string
    missions?: OrdreMissionListRelationFilter
  }

  export type UtilisateurOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    missions?: OrdreMissionOrderByRelationAggregateInput
  }

  export type UtilisateurWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UtilisateurWhereInput | UtilisateurWhereInput[]
    OR?: UtilisateurWhereInput[]
    NOT?: UtilisateurWhereInput | UtilisateurWhereInput[]
    passwordHash?: StringFilter<"Utilisateur"> | string
    nom?: StringFilter<"Utilisateur"> | string
    prenom?: StringFilter<"Utilisateur"> | string
    role?: StringFilter<"Utilisateur"> | string
    createdAt?: DateTimeFilter<"Utilisateur"> | Date | string
    missions?: OrdreMissionListRelationFilter
  }, "id" | "email">

  export type UtilisateurOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UtilisateurCountOrderByAggregateInput
    _avg?: UtilisateurAvgOrderByAggregateInput
    _max?: UtilisateurMaxOrderByAggregateInput
    _min?: UtilisateurMinOrderByAggregateInput
    _sum?: UtilisateurSumOrderByAggregateInput
  }

  export type UtilisateurScalarWhereWithAggregatesInput = {
    AND?: UtilisateurScalarWhereWithAggregatesInput | UtilisateurScalarWhereWithAggregatesInput[]
    OR?: UtilisateurScalarWhereWithAggregatesInput[]
    NOT?: UtilisateurScalarWhereWithAggregatesInput | UtilisateurScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Utilisateur"> | number
    email?: StringWithAggregatesFilter<"Utilisateur"> | string
    passwordHash?: StringWithAggregatesFilter<"Utilisateur"> | string
    nom?: StringWithAggregatesFilter<"Utilisateur"> | string
    prenom?: StringWithAggregatesFilter<"Utilisateur"> | string
    role?: StringWithAggregatesFilter<"Utilisateur"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Utilisateur"> | Date | string
  }

  export type EmployeWhereInput = {
    AND?: EmployeWhereInput | EmployeWhereInput[]
    OR?: EmployeWhereInput[]
    NOT?: EmployeWhereInput | EmployeWhereInput[]
    id?: IntFilter<"Employe"> | number
    mle?: StringFilter<"Employe"> | string
    nom?: StringFilter<"Employe"> | string
    prenom?: StringFilter<"Employe"> | string
    fonction?: StringFilter<"Employe"> | string
    hotelAffectation?: StringFilter<"Employe"> | string
    actif?: BoolFilter<"Employe"> | boolean
    missions?: OrdreMissionListRelationFilter
    accompagnements?: AccompagnateurListRelationFilter
  }

  export type EmployeOrderByWithRelationInput = {
    id?: SortOrder
    mle?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    fonction?: SortOrder
    hotelAffectation?: SortOrder
    actif?: SortOrder
    missions?: OrdreMissionOrderByRelationAggregateInput
    accompagnements?: AccompagnateurOrderByRelationAggregateInput
  }

  export type EmployeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    mle?: string
    AND?: EmployeWhereInput | EmployeWhereInput[]
    OR?: EmployeWhereInput[]
    NOT?: EmployeWhereInput | EmployeWhereInput[]
    nom?: StringFilter<"Employe"> | string
    prenom?: StringFilter<"Employe"> | string
    fonction?: StringFilter<"Employe"> | string
    hotelAffectation?: StringFilter<"Employe"> | string
    actif?: BoolFilter<"Employe"> | boolean
    missions?: OrdreMissionListRelationFilter
    accompagnements?: AccompagnateurListRelationFilter
  }, "id" | "mle">

  export type EmployeOrderByWithAggregationInput = {
    id?: SortOrder
    mle?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    fonction?: SortOrder
    hotelAffectation?: SortOrder
    actif?: SortOrder
    _count?: EmployeCountOrderByAggregateInput
    _avg?: EmployeAvgOrderByAggregateInput
    _max?: EmployeMaxOrderByAggregateInput
    _min?: EmployeMinOrderByAggregateInput
    _sum?: EmployeSumOrderByAggregateInput
  }

  export type EmployeScalarWhereWithAggregatesInput = {
    AND?: EmployeScalarWhereWithAggregatesInput | EmployeScalarWhereWithAggregatesInput[]
    OR?: EmployeScalarWhereWithAggregatesInput[]
    NOT?: EmployeScalarWhereWithAggregatesInput | EmployeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Employe"> | number
    mle?: StringWithAggregatesFilter<"Employe"> | string
    nom?: StringWithAggregatesFilter<"Employe"> | string
    prenom?: StringWithAggregatesFilter<"Employe"> | string
    fonction?: StringWithAggregatesFilter<"Employe"> | string
    hotelAffectation?: StringWithAggregatesFilter<"Employe"> | string
    actif?: BoolWithAggregatesFilter<"Employe"> | boolean
  }

  export type ChauffeurWhereInput = {
    AND?: ChauffeurWhereInput | ChauffeurWhereInput[]
    OR?: ChauffeurWhereInput[]
    NOT?: ChauffeurWhereInput | ChauffeurWhereInput[]
    id?: IntFilter<"Chauffeur"> | number
    mle?: StringFilter<"Chauffeur"> | string
    nom?: StringFilter<"Chauffeur"> | string
    prenom?: StringFilter<"Chauffeur"> | string
    telephone?: StringNullableFilter<"Chauffeur"> | string | null
    disponible?: BoolFilter<"Chauffeur"> | boolean
    missions?: OrdreMissionListRelationFilter
  }

  export type ChauffeurOrderByWithRelationInput = {
    id?: SortOrder
    mle?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    telephone?: SortOrderInput | SortOrder
    disponible?: SortOrder
    missions?: OrdreMissionOrderByRelationAggregateInput
  }

  export type ChauffeurWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    mle?: string
    AND?: ChauffeurWhereInput | ChauffeurWhereInput[]
    OR?: ChauffeurWhereInput[]
    NOT?: ChauffeurWhereInput | ChauffeurWhereInput[]
    nom?: StringFilter<"Chauffeur"> | string
    prenom?: StringFilter<"Chauffeur"> | string
    telephone?: StringNullableFilter<"Chauffeur"> | string | null
    disponible?: BoolFilter<"Chauffeur"> | boolean
    missions?: OrdreMissionListRelationFilter
  }, "id" | "mle">

  export type ChauffeurOrderByWithAggregationInput = {
    id?: SortOrder
    mle?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    telephone?: SortOrderInput | SortOrder
    disponible?: SortOrder
    _count?: ChauffeurCountOrderByAggregateInput
    _avg?: ChauffeurAvgOrderByAggregateInput
    _max?: ChauffeurMaxOrderByAggregateInput
    _min?: ChauffeurMinOrderByAggregateInput
    _sum?: ChauffeurSumOrderByAggregateInput
  }

  export type ChauffeurScalarWhereWithAggregatesInput = {
    AND?: ChauffeurScalarWhereWithAggregatesInput | ChauffeurScalarWhereWithAggregatesInput[]
    OR?: ChauffeurScalarWhereWithAggregatesInput[]
    NOT?: ChauffeurScalarWhereWithAggregatesInput | ChauffeurScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Chauffeur"> | number
    mle?: StringWithAggregatesFilter<"Chauffeur"> | string
    nom?: StringWithAggregatesFilter<"Chauffeur"> | string
    prenom?: StringWithAggregatesFilter<"Chauffeur"> | string
    telephone?: StringNullableWithAggregatesFilter<"Chauffeur"> | string | null
    disponible?: BoolWithAggregatesFilter<"Chauffeur"> | boolean
  }

  export type VehiculeWhereInput = {
    AND?: VehiculeWhereInput | VehiculeWhereInput[]
    OR?: VehiculeWhereInput[]
    NOT?: VehiculeWhereInput | VehiculeWhereInput[]
    id?: IntFilter<"Vehicule"> | number
    immatriculation?: StringFilter<"Vehicule"> | string
    marque?: StringFilter<"Vehicule"> | string
    modele?: StringFilter<"Vehicule"> | string
    type?: StringFilter<"Vehicule"> | string
    disponible?: BoolFilter<"Vehicule"> | boolean
    missions?: OrdreMissionListRelationFilter
  }

  export type VehiculeOrderByWithRelationInput = {
    id?: SortOrder
    immatriculation?: SortOrder
    marque?: SortOrder
    modele?: SortOrder
    type?: SortOrder
    disponible?: SortOrder
    missions?: OrdreMissionOrderByRelationAggregateInput
  }

  export type VehiculeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    immatriculation?: string
    AND?: VehiculeWhereInput | VehiculeWhereInput[]
    OR?: VehiculeWhereInput[]
    NOT?: VehiculeWhereInput | VehiculeWhereInput[]
    marque?: StringFilter<"Vehicule"> | string
    modele?: StringFilter<"Vehicule"> | string
    type?: StringFilter<"Vehicule"> | string
    disponible?: BoolFilter<"Vehicule"> | boolean
    missions?: OrdreMissionListRelationFilter
  }, "id" | "immatriculation">

  export type VehiculeOrderByWithAggregationInput = {
    id?: SortOrder
    immatriculation?: SortOrder
    marque?: SortOrder
    modele?: SortOrder
    type?: SortOrder
    disponible?: SortOrder
    _count?: VehiculeCountOrderByAggregateInput
    _avg?: VehiculeAvgOrderByAggregateInput
    _max?: VehiculeMaxOrderByAggregateInput
    _min?: VehiculeMinOrderByAggregateInput
    _sum?: VehiculeSumOrderByAggregateInput
  }

  export type VehiculeScalarWhereWithAggregatesInput = {
    AND?: VehiculeScalarWhereWithAggregatesInput | VehiculeScalarWhereWithAggregatesInput[]
    OR?: VehiculeScalarWhereWithAggregatesInput[]
    NOT?: VehiculeScalarWhereWithAggregatesInput | VehiculeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Vehicule"> | number
    immatriculation?: StringWithAggregatesFilter<"Vehicule"> | string
    marque?: StringWithAggregatesFilter<"Vehicule"> | string
    modele?: StringWithAggregatesFilter<"Vehicule"> | string
    type?: StringWithAggregatesFilter<"Vehicule"> | string
    disponible?: BoolWithAggregatesFilter<"Vehicule"> | boolean
  }

  export type ObjetMissionWhereInput = {
    AND?: ObjetMissionWhereInput | ObjetMissionWhereInput[]
    OR?: ObjetMissionWhereInput[]
    NOT?: ObjetMissionWhereInput | ObjetMissionWhereInput[]
    id?: IntFilter<"ObjetMission"> | number
    libelle?: StringFilter<"ObjetMission"> | string
    actif?: BoolFilter<"ObjetMission"> | boolean
    missions?: OrdreMissionListRelationFilter
  }

  export type ObjetMissionOrderByWithRelationInput = {
    id?: SortOrder
    libelle?: SortOrder
    actif?: SortOrder
    missions?: OrdreMissionOrderByRelationAggregateInput
  }

  export type ObjetMissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    libelle?: string
    AND?: ObjetMissionWhereInput | ObjetMissionWhereInput[]
    OR?: ObjetMissionWhereInput[]
    NOT?: ObjetMissionWhereInput | ObjetMissionWhereInput[]
    actif?: BoolFilter<"ObjetMission"> | boolean
    missions?: OrdreMissionListRelationFilter
  }, "id" | "libelle">

  export type ObjetMissionOrderByWithAggregationInput = {
    id?: SortOrder
    libelle?: SortOrder
    actif?: SortOrder
    _count?: ObjetMissionCountOrderByAggregateInput
    _avg?: ObjetMissionAvgOrderByAggregateInput
    _max?: ObjetMissionMaxOrderByAggregateInput
    _min?: ObjetMissionMinOrderByAggregateInput
    _sum?: ObjetMissionSumOrderByAggregateInput
  }

  export type ObjetMissionScalarWhereWithAggregatesInput = {
    AND?: ObjetMissionScalarWhereWithAggregatesInput | ObjetMissionScalarWhereWithAggregatesInput[]
    OR?: ObjetMissionScalarWhereWithAggregatesInput[]
    NOT?: ObjetMissionScalarWhereWithAggregatesInput | ObjetMissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ObjetMission"> | number
    libelle?: StringWithAggregatesFilter<"ObjetMission"> | string
    actif?: BoolWithAggregatesFilter<"ObjetMission"> | boolean
  }

  export type DestinationWhereInput = {
    AND?: DestinationWhereInput | DestinationWhereInput[]
    OR?: DestinationWhereInput[]
    NOT?: DestinationWhereInput | DestinationWhereInput[]
    id?: IntFilter<"Destination"> | number
    nom?: StringFilter<"Destination"> | string
    ville?: StringFilter<"Destination"> | string
    missions?: OrdreMissionListRelationFilter
  }

  export type DestinationOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    ville?: SortOrder
    missions?: OrdreMissionOrderByRelationAggregateInput
  }

  export type DestinationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nom?: string
    AND?: DestinationWhereInput | DestinationWhereInput[]
    OR?: DestinationWhereInput[]
    NOT?: DestinationWhereInput | DestinationWhereInput[]
    ville?: StringFilter<"Destination"> | string
    missions?: OrdreMissionListRelationFilter
  }, "id" | "nom">

  export type DestinationOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    ville?: SortOrder
    _count?: DestinationCountOrderByAggregateInput
    _avg?: DestinationAvgOrderByAggregateInput
    _max?: DestinationMaxOrderByAggregateInput
    _min?: DestinationMinOrderByAggregateInput
    _sum?: DestinationSumOrderByAggregateInput
  }

  export type DestinationScalarWhereWithAggregatesInput = {
    AND?: DestinationScalarWhereWithAggregatesInput | DestinationScalarWhereWithAggregatesInput[]
    OR?: DestinationScalarWhereWithAggregatesInput[]
    NOT?: DestinationScalarWhereWithAggregatesInput | DestinationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Destination"> | number
    nom?: StringWithAggregatesFilter<"Destination"> | string
    ville?: StringWithAggregatesFilter<"Destination"> | string
  }

  export type OrdreMissionWhereInput = {
    AND?: OrdreMissionWhereInput | OrdreMissionWhereInput[]
    OR?: OrdreMissionWhereInput[]
    NOT?: OrdreMissionWhereInput | OrdreMissionWhereInput[]
    id?: IntFilter<"OrdreMission"> | number
    reference?: StringFilter<"OrdreMission"> | string
    employeId?: IntFilter<"OrdreMission"> | number
    destinationId?: IntFilter<"OrdreMission"> | number
    chauffeurId?: IntFilter<"OrdreMission"> | number
    vehiculeId?: IntFilter<"OrdreMission"> | number
    objetMissionId?: IntFilter<"OrdreMission"> | number
    creeParId?: IntFilter<"OrdreMission"> | number
    dateDebut?: DateTimeFilter<"OrdreMission"> | Date | string
    dateFin?: DateTimeNullableFilter<"OrdreMission"> | Date | string | null
    heureDepart?: StringFilter<"OrdreMission"> | string
    heureRetour?: StringNullableFilter<"OrdreMission"> | string | null
    departReel?: DateTimeNullableFilter<"OrdreMission"> | Date | string | null
    retourReel?: DateTimeNullableFilter<"OrdreMission"> | Date | string | null
    statut?: StringFilter<"OrdreMission"> | string
    itineraire?: StringNullableFilter<"OrdreMission"> | string | null
    fraisParticipation?: FloatNullableFilter<"OrdreMission"> | number | null
    fraisMission?: FloatNullableFilter<"OrdreMission"> | number | null
    notes?: StringNullableFilter<"OrdreMission"> | string | null
    createdAt?: DateTimeFilter<"OrdreMission"> | Date | string
    employe?: XOR<EmployeScalarRelationFilter, EmployeWhereInput>
    destination?: XOR<DestinationScalarRelationFilter, DestinationWhereInput>
    chauffeur?: XOR<ChauffeurScalarRelationFilter, ChauffeurWhereInput>
    vehicule?: XOR<VehiculeScalarRelationFilter, VehiculeWhereInput>
    objetMission?: XOR<ObjetMissionScalarRelationFilter, ObjetMissionWhereInput>
    creePar?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
    accompagnateurs?: AccompagnateurListRelationFilter
  }

  export type OrdreMissionOrderByWithRelationInput = {
    id?: SortOrder
    reference?: SortOrder
    employeId?: SortOrder
    destinationId?: SortOrder
    chauffeurId?: SortOrder
    vehiculeId?: SortOrder
    objetMissionId?: SortOrder
    creeParId?: SortOrder
    dateDebut?: SortOrder
    dateFin?: SortOrderInput | SortOrder
    heureDepart?: SortOrder
    heureRetour?: SortOrderInput | SortOrder
    departReel?: SortOrderInput | SortOrder
    retourReel?: SortOrderInput | SortOrder
    statut?: SortOrder
    itineraire?: SortOrderInput | SortOrder
    fraisParticipation?: SortOrderInput | SortOrder
    fraisMission?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    employe?: EmployeOrderByWithRelationInput
    destination?: DestinationOrderByWithRelationInput
    chauffeur?: ChauffeurOrderByWithRelationInput
    vehicule?: VehiculeOrderByWithRelationInput
    objetMission?: ObjetMissionOrderByWithRelationInput
    creePar?: UtilisateurOrderByWithRelationInput
    accompagnateurs?: AccompagnateurOrderByRelationAggregateInput
  }

  export type OrdreMissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    reference?: string
    AND?: OrdreMissionWhereInput | OrdreMissionWhereInput[]
    OR?: OrdreMissionWhereInput[]
    NOT?: OrdreMissionWhereInput | OrdreMissionWhereInput[]
    employeId?: IntFilter<"OrdreMission"> | number
    destinationId?: IntFilter<"OrdreMission"> | number
    chauffeurId?: IntFilter<"OrdreMission"> | number
    vehiculeId?: IntFilter<"OrdreMission"> | number
    objetMissionId?: IntFilter<"OrdreMission"> | number
    creeParId?: IntFilter<"OrdreMission"> | number
    dateDebut?: DateTimeFilter<"OrdreMission"> | Date | string
    dateFin?: DateTimeNullableFilter<"OrdreMission"> | Date | string | null
    heureDepart?: StringFilter<"OrdreMission"> | string
    heureRetour?: StringNullableFilter<"OrdreMission"> | string | null
    departReel?: DateTimeNullableFilter<"OrdreMission"> | Date | string | null
    retourReel?: DateTimeNullableFilter<"OrdreMission"> | Date | string | null
    statut?: StringFilter<"OrdreMission"> | string
    itineraire?: StringNullableFilter<"OrdreMission"> | string | null
    fraisParticipation?: FloatNullableFilter<"OrdreMission"> | number | null
    fraisMission?: FloatNullableFilter<"OrdreMission"> | number | null
    notes?: StringNullableFilter<"OrdreMission"> | string | null
    createdAt?: DateTimeFilter<"OrdreMission"> | Date | string
    employe?: XOR<EmployeScalarRelationFilter, EmployeWhereInput>
    destination?: XOR<DestinationScalarRelationFilter, DestinationWhereInput>
    chauffeur?: XOR<ChauffeurScalarRelationFilter, ChauffeurWhereInput>
    vehicule?: XOR<VehiculeScalarRelationFilter, VehiculeWhereInput>
    objetMission?: XOR<ObjetMissionScalarRelationFilter, ObjetMissionWhereInput>
    creePar?: XOR<UtilisateurScalarRelationFilter, UtilisateurWhereInput>
    accompagnateurs?: AccompagnateurListRelationFilter
  }, "id" | "reference">

  export type OrdreMissionOrderByWithAggregationInput = {
    id?: SortOrder
    reference?: SortOrder
    employeId?: SortOrder
    destinationId?: SortOrder
    chauffeurId?: SortOrder
    vehiculeId?: SortOrder
    objetMissionId?: SortOrder
    creeParId?: SortOrder
    dateDebut?: SortOrder
    dateFin?: SortOrderInput | SortOrder
    heureDepart?: SortOrder
    heureRetour?: SortOrderInput | SortOrder
    departReel?: SortOrderInput | SortOrder
    retourReel?: SortOrderInput | SortOrder
    statut?: SortOrder
    itineraire?: SortOrderInput | SortOrder
    fraisParticipation?: SortOrderInput | SortOrder
    fraisMission?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: OrdreMissionCountOrderByAggregateInput
    _avg?: OrdreMissionAvgOrderByAggregateInput
    _max?: OrdreMissionMaxOrderByAggregateInput
    _min?: OrdreMissionMinOrderByAggregateInput
    _sum?: OrdreMissionSumOrderByAggregateInput
  }

  export type OrdreMissionScalarWhereWithAggregatesInput = {
    AND?: OrdreMissionScalarWhereWithAggregatesInput | OrdreMissionScalarWhereWithAggregatesInput[]
    OR?: OrdreMissionScalarWhereWithAggregatesInput[]
    NOT?: OrdreMissionScalarWhereWithAggregatesInput | OrdreMissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OrdreMission"> | number
    reference?: StringWithAggregatesFilter<"OrdreMission"> | string
    employeId?: IntWithAggregatesFilter<"OrdreMission"> | number
    destinationId?: IntWithAggregatesFilter<"OrdreMission"> | number
    chauffeurId?: IntWithAggregatesFilter<"OrdreMission"> | number
    vehiculeId?: IntWithAggregatesFilter<"OrdreMission"> | number
    objetMissionId?: IntWithAggregatesFilter<"OrdreMission"> | number
    creeParId?: IntWithAggregatesFilter<"OrdreMission"> | number
    dateDebut?: DateTimeWithAggregatesFilter<"OrdreMission"> | Date | string
    dateFin?: DateTimeNullableWithAggregatesFilter<"OrdreMission"> | Date | string | null
    heureDepart?: StringWithAggregatesFilter<"OrdreMission"> | string
    heureRetour?: StringNullableWithAggregatesFilter<"OrdreMission"> | string | null
    departReel?: DateTimeNullableWithAggregatesFilter<"OrdreMission"> | Date | string | null
    retourReel?: DateTimeNullableWithAggregatesFilter<"OrdreMission"> | Date | string | null
    statut?: StringWithAggregatesFilter<"OrdreMission"> | string
    itineraire?: StringNullableWithAggregatesFilter<"OrdreMission"> | string | null
    fraisParticipation?: FloatNullableWithAggregatesFilter<"OrdreMission"> | number | null
    fraisMission?: FloatNullableWithAggregatesFilter<"OrdreMission"> | number | null
    notes?: StringNullableWithAggregatesFilter<"OrdreMission"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"OrdreMission"> | Date | string
  }

  export type AccompagnateurWhereInput = {
    AND?: AccompagnateurWhereInput | AccompagnateurWhereInput[]
    OR?: AccompagnateurWhereInput[]
    NOT?: AccompagnateurWhereInput | AccompagnateurWhereInput[]
    id?: IntFilter<"Accompagnateur"> | number
    ordreMissionId?: IntFilter<"Accompagnateur"> | number
    employeId?: IntFilter<"Accompagnateur"> | number
    ordreMission?: XOR<OrdreMissionScalarRelationFilter, OrdreMissionWhereInput>
    employe?: XOR<EmployeScalarRelationFilter, EmployeWhereInput>
  }

  export type AccompagnateurOrderByWithRelationInput = {
    id?: SortOrder
    ordreMissionId?: SortOrder
    employeId?: SortOrder
    ordreMission?: OrdreMissionOrderByWithRelationInput
    employe?: EmployeOrderByWithRelationInput
  }

  export type AccompagnateurWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    ordreMissionId_employeId?: AccompagnateurOrdreMissionIdEmployeIdCompoundUniqueInput
    AND?: AccompagnateurWhereInput | AccompagnateurWhereInput[]
    OR?: AccompagnateurWhereInput[]
    NOT?: AccompagnateurWhereInput | AccompagnateurWhereInput[]
    ordreMissionId?: IntFilter<"Accompagnateur"> | number
    employeId?: IntFilter<"Accompagnateur"> | number
    ordreMission?: XOR<OrdreMissionScalarRelationFilter, OrdreMissionWhereInput>
    employe?: XOR<EmployeScalarRelationFilter, EmployeWhereInput>
  }, "id" | "ordreMissionId_employeId">

  export type AccompagnateurOrderByWithAggregationInput = {
    id?: SortOrder
    ordreMissionId?: SortOrder
    employeId?: SortOrder
    _count?: AccompagnateurCountOrderByAggregateInput
    _avg?: AccompagnateurAvgOrderByAggregateInput
    _max?: AccompagnateurMaxOrderByAggregateInput
    _min?: AccompagnateurMinOrderByAggregateInput
    _sum?: AccompagnateurSumOrderByAggregateInput
  }

  export type AccompagnateurScalarWhereWithAggregatesInput = {
    AND?: AccompagnateurScalarWhereWithAggregatesInput | AccompagnateurScalarWhereWithAggregatesInput[]
    OR?: AccompagnateurScalarWhereWithAggregatesInput[]
    NOT?: AccompagnateurScalarWhereWithAggregatesInput | AccompagnateurScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Accompagnateur"> | number
    ordreMissionId?: IntWithAggregatesFilter<"Accompagnateur"> | number
    employeId?: IntWithAggregatesFilter<"Accompagnateur"> | number
  }

  export type UtilisateurCreateInput = {
    email: string
    passwordHash: string
    nom: string
    prenom: string
    role: string
    createdAt?: Date | string
    missions?: OrdreMissionCreateNestedManyWithoutCreeParInput
  }

  export type UtilisateurUncheckedCreateInput = {
    id?: number
    email: string
    passwordHash: string
    nom: string
    prenom: string
    role: string
    createdAt?: Date | string
    missions?: OrdreMissionUncheckedCreateNestedManyWithoutCreeParInput
  }

  export type UtilisateurUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    missions?: OrdreMissionUpdateManyWithoutCreeParNestedInput
  }

  export type UtilisateurUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    missions?: OrdreMissionUncheckedUpdateManyWithoutCreeParNestedInput
  }

  export type UtilisateurCreateManyInput = {
    id?: number
    email: string
    passwordHash: string
    nom: string
    prenom: string
    role: string
    createdAt?: Date | string
  }

  export type UtilisateurUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UtilisateurUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeCreateInput = {
    mle: string
    nom: string
    prenom: string
    fonction: string
    hotelAffectation: string
    actif?: boolean
    missions?: OrdreMissionCreateNestedManyWithoutEmployeInput
    accompagnements?: AccompagnateurCreateNestedManyWithoutEmployeInput
  }

  export type EmployeUncheckedCreateInput = {
    id?: number
    mle: string
    nom: string
    prenom: string
    fonction: string
    hotelAffectation: string
    actif?: boolean
    missions?: OrdreMissionUncheckedCreateNestedManyWithoutEmployeInput
    accompagnements?: AccompagnateurUncheckedCreateNestedManyWithoutEmployeInput
  }

  export type EmployeUpdateInput = {
    mle?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    fonction?: StringFieldUpdateOperationsInput | string
    hotelAffectation?: StringFieldUpdateOperationsInput | string
    actif?: BoolFieldUpdateOperationsInput | boolean
    missions?: OrdreMissionUpdateManyWithoutEmployeNestedInput
    accompagnements?: AccompagnateurUpdateManyWithoutEmployeNestedInput
  }

  export type EmployeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mle?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    fonction?: StringFieldUpdateOperationsInput | string
    hotelAffectation?: StringFieldUpdateOperationsInput | string
    actif?: BoolFieldUpdateOperationsInput | boolean
    missions?: OrdreMissionUncheckedUpdateManyWithoutEmployeNestedInput
    accompagnements?: AccompagnateurUncheckedUpdateManyWithoutEmployeNestedInput
  }

  export type EmployeCreateManyInput = {
    id?: number
    mle: string
    nom: string
    prenom: string
    fonction: string
    hotelAffectation: string
    actif?: boolean
  }

  export type EmployeUpdateManyMutationInput = {
    mle?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    fonction?: StringFieldUpdateOperationsInput | string
    hotelAffectation?: StringFieldUpdateOperationsInput | string
    actif?: BoolFieldUpdateOperationsInput | boolean
  }

  export type EmployeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mle?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    fonction?: StringFieldUpdateOperationsInput | string
    hotelAffectation?: StringFieldUpdateOperationsInput | string
    actif?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChauffeurCreateInput = {
    mle: string
    nom: string
    prenom: string
    telephone?: string | null
    disponible?: boolean
    missions?: OrdreMissionCreateNestedManyWithoutChauffeurInput
  }

  export type ChauffeurUncheckedCreateInput = {
    id?: number
    mle: string
    nom: string
    prenom: string
    telephone?: string | null
    disponible?: boolean
    missions?: OrdreMissionUncheckedCreateNestedManyWithoutChauffeurInput
  }

  export type ChauffeurUpdateInput = {
    mle?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    disponible?: BoolFieldUpdateOperationsInput | boolean
    missions?: OrdreMissionUpdateManyWithoutChauffeurNestedInput
  }

  export type ChauffeurUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mle?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    disponible?: BoolFieldUpdateOperationsInput | boolean
    missions?: OrdreMissionUncheckedUpdateManyWithoutChauffeurNestedInput
  }

  export type ChauffeurCreateManyInput = {
    id?: number
    mle: string
    nom: string
    prenom: string
    telephone?: string | null
    disponible?: boolean
  }

  export type ChauffeurUpdateManyMutationInput = {
    mle?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    disponible?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChauffeurUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mle?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    disponible?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VehiculeCreateInput = {
    immatriculation: string
    marque: string
    modele: string
    type: string
    disponible?: boolean
    missions?: OrdreMissionCreateNestedManyWithoutVehiculeInput
  }

  export type VehiculeUncheckedCreateInput = {
    id?: number
    immatriculation: string
    marque: string
    modele: string
    type: string
    disponible?: boolean
    missions?: OrdreMissionUncheckedCreateNestedManyWithoutVehiculeInput
  }

  export type VehiculeUpdateInput = {
    immatriculation?: StringFieldUpdateOperationsInput | string
    marque?: StringFieldUpdateOperationsInput | string
    modele?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
    missions?: OrdreMissionUpdateManyWithoutVehiculeNestedInput
  }

  export type VehiculeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    immatriculation?: StringFieldUpdateOperationsInput | string
    marque?: StringFieldUpdateOperationsInput | string
    modele?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
    missions?: OrdreMissionUncheckedUpdateManyWithoutVehiculeNestedInput
  }

  export type VehiculeCreateManyInput = {
    id?: number
    immatriculation: string
    marque: string
    modele: string
    type: string
    disponible?: boolean
  }

  export type VehiculeUpdateManyMutationInput = {
    immatriculation?: StringFieldUpdateOperationsInput | string
    marque?: StringFieldUpdateOperationsInput | string
    modele?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VehiculeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    immatriculation?: StringFieldUpdateOperationsInput | string
    marque?: StringFieldUpdateOperationsInput | string
    modele?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ObjetMissionCreateInput = {
    libelle: string
    actif?: boolean
    missions?: OrdreMissionCreateNestedManyWithoutObjetMissionInput
  }

  export type ObjetMissionUncheckedCreateInput = {
    id?: number
    libelle: string
    actif?: boolean
    missions?: OrdreMissionUncheckedCreateNestedManyWithoutObjetMissionInput
  }

  export type ObjetMissionUpdateInput = {
    libelle?: StringFieldUpdateOperationsInput | string
    actif?: BoolFieldUpdateOperationsInput | boolean
    missions?: OrdreMissionUpdateManyWithoutObjetMissionNestedInput
  }

  export type ObjetMissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
    actif?: BoolFieldUpdateOperationsInput | boolean
    missions?: OrdreMissionUncheckedUpdateManyWithoutObjetMissionNestedInput
  }

  export type ObjetMissionCreateManyInput = {
    id?: number
    libelle: string
    actif?: boolean
  }

  export type ObjetMissionUpdateManyMutationInput = {
    libelle?: StringFieldUpdateOperationsInput | string
    actif?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ObjetMissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
    actif?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DestinationCreateInput = {
    nom: string
    ville: string
    missions?: OrdreMissionCreateNestedManyWithoutDestinationInput
  }

  export type DestinationUncheckedCreateInput = {
    id?: number
    nom: string
    ville: string
    missions?: OrdreMissionUncheckedCreateNestedManyWithoutDestinationInput
  }

  export type DestinationUpdateInput = {
    nom?: StringFieldUpdateOperationsInput | string
    ville?: StringFieldUpdateOperationsInput | string
    missions?: OrdreMissionUpdateManyWithoutDestinationNestedInput
  }

  export type DestinationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    ville?: StringFieldUpdateOperationsInput | string
    missions?: OrdreMissionUncheckedUpdateManyWithoutDestinationNestedInput
  }

  export type DestinationCreateManyInput = {
    id?: number
    nom: string
    ville: string
  }

  export type DestinationUpdateManyMutationInput = {
    nom?: StringFieldUpdateOperationsInput | string
    ville?: StringFieldUpdateOperationsInput | string
  }

  export type DestinationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    ville?: StringFieldUpdateOperationsInput | string
  }

  export type OrdreMissionCreateInput = {
    reference: string
    dateDebut: Date | string
    dateFin?: Date | string | null
    heureDepart: string
    heureRetour?: string | null
    departReel?: Date | string | null
    retourReel?: Date | string | null
    statut: string
    itineraire?: string | null
    fraisParticipation?: number | null
    fraisMission?: number | null
    notes?: string | null
    createdAt?: Date | string
    employe: EmployeCreateNestedOneWithoutMissionsInput
    destination: DestinationCreateNestedOneWithoutMissionsInput
    chauffeur: ChauffeurCreateNestedOneWithoutMissionsInput
    vehicule: VehiculeCreateNestedOneWithoutMissionsInput
    objetMission: ObjetMissionCreateNestedOneWithoutMissionsInput
    creePar: UtilisateurCreateNestedOneWithoutMissionsInput
    accompagnateurs?: AccompagnateurCreateNestedManyWithoutOrdreMissionInput
  }

  export type OrdreMissionUncheckedCreateInput = {
    id?: number
    reference: string
    employeId: number
    destinationId: number
    chauffeurId: number
    vehiculeId: number
    objetMissionId: number
    creeParId: number
    dateDebut: Date | string
    dateFin?: Date | string | null
    heureDepart: string
    heureRetour?: string | null
    departReel?: Date | string | null
    retourReel?: Date | string | null
    statut: string
    itineraire?: string | null
    fraisParticipation?: number | null
    fraisMission?: number | null
    notes?: string | null
    createdAt?: Date | string
    accompagnateurs?: AccompagnateurUncheckedCreateNestedManyWithoutOrdreMissionInput
  }

  export type OrdreMissionUpdateInput = {
    reference?: StringFieldUpdateOperationsInput | string
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureDepart?: StringFieldUpdateOperationsInput | string
    heureRetour?: NullableStringFieldUpdateOperationsInput | string | null
    departReel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    retourReel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: StringFieldUpdateOperationsInput | string
    itineraire?: NullableStringFieldUpdateOperationsInput | string | null
    fraisParticipation?: NullableFloatFieldUpdateOperationsInput | number | null
    fraisMission?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employe?: EmployeUpdateOneRequiredWithoutMissionsNestedInput
    destination?: DestinationUpdateOneRequiredWithoutMissionsNestedInput
    chauffeur?: ChauffeurUpdateOneRequiredWithoutMissionsNestedInput
    vehicule?: VehiculeUpdateOneRequiredWithoutMissionsNestedInput
    objetMission?: ObjetMissionUpdateOneRequiredWithoutMissionsNestedInput
    creePar?: UtilisateurUpdateOneRequiredWithoutMissionsNestedInput
    accompagnateurs?: AccompagnateurUpdateManyWithoutOrdreMissionNestedInput
  }

  export type OrdreMissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    employeId?: IntFieldUpdateOperationsInput | number
    destinationId?: IntFieldUpdateOperationsInput | number
    chauffeurId?: IntFieldUpdateOperationsInput | number
    vehiculeId?: IntFieldUpdateOperationsInput | number
    objetMissionId?: IntFieldUpdateOperationsInput | number
    creeParId?: IntFieldUpdateOperationsInput | number
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureDepart?: StringFieldUpdateOperationsInput | string
    heureRetour?: NullableStringFieldUpdateOperationsInput | string | null
    departReel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    retourReel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: StringFieldUpdateOperationsInput | string
    itineraire?: NullableStringFieldUpdateOperationsInput | string | null
    fraisParticipation?: NullableFloatFieldUpdateOperationsInput | number | null
    fraisMission?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accompagnateurs?: AccompagnateurUncheckedUpdateManyWithoutOrdreMissionNestedInput
  }

  export type OrdreMissionCreateManyInput = {
    id?: number
    reference: string
    employeId: number
    destinationId: number
    chauffeurId: number
    vehiculeId: number
    objetMissionId: number
    creeParId: number
    dateDebut: Date | string
    dateFin?: Date | string | null
    heureDepart: string
    heureRetour?: string | null
    departReel?: Date | string | null
    retourReel?: Date | string | null
    statut: string
    itineraire?: string | null
    fraisParticipation?: number | null
    fraisMission?: number | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type OrdreMissionUpdateManyMutationInput = {
    reference?: StringFieldUpdateOperationsInput | string
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureDepart?: StringFieldUpdateOperationsInput | string
    heureRetour?: NullableStringFieldUpdateOperationsInput | string | null
    departReel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    retourReel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: StringFieldUpdateOperationsInput | string
    itineraire?: NullableStringFieldUpdateOperationsInput | string | null
    fraisParticipation?: NullableFloatFieldUpdateOperationsInput | number | null
    fraisMission?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdreMissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    employeId?: IntFieldUpdateOperationsInput | number
    destinationId?: IntFieldUpdateOperationsInput | number
    chauffeurId?: IntFieldUpdateOperationsInput | number
    vehiculeId?: IntFieldUpdateOperationsInput | number
    objetMissionId?: IntFieldUpdateOperationsInput | number
    creeParId?: IntFieldUpdateOperationsInput | number
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureDepart?: StringFieldUpdateOperationsInput | string
    heureRetour?: NullableStringFieldUpdateOperationsInput | string | null
    departReel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    retourReel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: StringFieldUpdateOperationsInput | string
    itineraire?: NullableStringFieldUpdateOperationsInput | string | null
    fraisParticipation?: NullableFloatFieldUpdateOperationsInput | number | null
    fraisMission?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccompagnateurCreateInput = {
    ordreMission: OrdreMissionCreateNestedOneWithoutAccompagnateursInput
    employe: EmployeCreateNestedOneWithoutAccompagnementsInput
  }

  export type AccompagnateurUncheckedCreateInput = {
    id?: number
    ordreMissionId: number
    employeId: number
  }

  export type AccompagnateurUpdateInput = {
    ordreMission?: OrdreMissionUpdateOneRequiredWithoutAccompagnateursNestedInput
    employe?: EmployeUpdateOneRequiredWithoutAccompagnementsNestedInput
  }

  export type AccompagnateurUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ordreMissionId?: IntFieldUpdateOperationsInput | number
    employeId?: IntFieldUpdateOperationsInput | number
  }

  export type AccompagnateurCreateManyInput = {
    id?: number
    ordreMissionId: number
    employeId: number
  }

  export type AccompagnateurUpdateManyMutationInput = {

  }

  export type AccompagnateurUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ordreMissionId?: IntFieldUpdateOperationsInput | number
    employeId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type OrdreMissionListRelationFilter = {
    every?: OrdreMissionWhereInput
    some?: OrdreMissionWhereInput
    none?: OrdreMissionWhereInput
  }

  export type OrdreMissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UtilisateurCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UtilisateurAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UtilisateurMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UtilisateurMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UtilisateurSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type AccompagnateurListRelationFilter = {
    every?: AccompagnateurWhereInput
    some?: AccompagnateurWhereInput
    none?: AccompagnateurWhereInput
  }

  export type AccompagnateurOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeCountOrderByAggregateInput = {
    id?: SortOrder
    mle?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    fonction?: SortOrder
    hotelAffectation?: SortOrder
    actif?: SortOrder
  }

  export type EmployeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EmployeMaxOrderByAggregateInput = {
    id?: SortOrder
    mle?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    fonction?: SortOrder
    hotelAffectation?: SortOrder
    actif?: SortOrder
  }

  export type EmployeMinOrderByAggregateInput = {
    id?: SortOrder
    mle?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    fonction?: SortOrder
    hotelAffectation?: SortOrder
    actif?: SortOrder
  }

  export type EmployeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ChauffeurCountOrderByAggregateInput = {
    id?: SortOrder
    mle?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    telephone?: SortOrder
    disponible?: SortOrder
  }

  export type ChauffeurAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ChauffeurMaxOrderByAggregateInput = {
    id?: SortOrder
    mle?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    telephone?: SortOrder
    disponible?: SortOrder
  }

  export type ChauffeurMinOrderByAggregateInput = {
    id?: SortOrder
    mle?: SortOrder
    nom?: SortOrder
    prenom?: SortOrder
    telephone?: SortOrder
    disponible?: SortOrder
  }

  export type ChauffeurSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type VehiculeCountOrderByAggregateInput = {
    id?: SortOrder
    immatriculation?: SortOrder
    marque?: SortOrder
    modele?: SortOrder
    type?: SortOrder
    disponible?: SortOrder
  }

  export type VehiculeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VehiculeMaxOrderByAggregateInput = {
    id?: SortOrder
    immatriculation?: SortOrder
    marque?: SortOrder
    modele?: SortOrder
    type?: SortOrder
    disponible?: SortOrder
  }

  export type VehiculeMinOrderByAggregateInput = {
    id?: SortOrder
    immatriculation?: SortOrder
    marque?: SortOrder
    modele?: SortOrder
    type?: SortOrder
    disponible?: SortOrder
  }

  export type VehiculeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ObjetMissionCountOrderByAggregateInput = {
    id?: SortOrder
    libelle?: SortOrder
    actif?: SortOrder
  }

  export type ObjetMissionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ObjetMissionMaxOrderByAggregateInput = {
    id?: SortOrder
    libelle?: SortOrder
    actif?: SortOrder
  }

  export type ObjetMissionMinOrderByAggregateInput = {
    id?: SortOrder
    libelle?: SortOrder
    actif?: SortOrder
  }

  export type ObjetMissionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DestinationCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    ville?: SortOrder
  }

  export type DestinationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DestinationMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    ville?: SortOrder
  }

  export type DestinationMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    ville?: SortOrder
  }

  export type DestinationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type EmployeScalarRelationFilter = {
    is?: EmployeWhereInput
    isNot?: EmployeWhereInput
  }

  export type DestinationScalarRelationFilter = {
    is?: DestinationWhereInput
    isNot?: DestinationWhereInput
  }

  export type ChauffeurScalarRelationFilter = {
    is?: ChauffeurWhereInput
    isNot?: ChauffeurWhereInput
  }

  export type VehiculeScalarRelationFilter = {
    is?: VehiculeWhereInput
    isNot?: VehiculeWhereInput
  }

  export type ObjetMissionScalarRelationFilter = {
    is?: ObjetMissionWhereInput
    isNot?: ObjetMissionWhereInput
  }

  export type UtilisateurScalarRelationFilter = {
    is?: UtilisateurWhereInput
    isNot?: UtilisateurWhereInput
  }

  export type OrdreMissionCountOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    employeId?: SortOrder
    destinationId?: SortOrder
    chauffeurId?: SortOrder
    vehiculeId?: SortOrder
    objetMissionId?: SortOrder
    creeParId?: SortOrder
    dateDebut?: SortOrder
    dateFin?: SortOrder
    heureDepart?: SortOrder
    heureRetour?: SortOrder
    departReel?: SortOrder
    retourReel?: SortOrder
    statut?: SortOrder
    itineraire?: SortOrder
    fraisParticipation?: SortOrder
    fraisMission?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type OrdreMissionAvgOrderByAggregateInput = {
    id?: SortOrder
    employeId?: SortOrder
    destinationId?: SortOrder
    chauffeurId?: SortOrder
    vehiculeId?: SortOrder
    objetMissionId?: SortOrder
    creeParId?: SortOrder
    fraisParticipation?: SortOrder
    fraisMission?: SortOrder
  }

  export type OrdreMissionMaxOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    employeId?: SortOrder
    destinationId?: SortOrder
    chauffeurId?: SortOrder
    vehiculeId?: SortOrder
    objetMissionId?: SortOrder
    creeParId?: SortOrder
    dateDebut?: SortOrder
    dateFin?: SortOrder
    heureDepart?: SortOrder
    heureRetour?: SortOrder
    departReel?: SortOrder
    retourReel?: SortOrder
    statut?: SortOrder
    itineraire?: SortOrder
    fraisParticipation?: SortOrder
    fraisMission?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type OrdreMissionMinOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    employeId?: SortOrder
    destinationId?: SortOrder
    chauffeurId?: SortOrder
    vehiculeId?: SortOrder
    objetMissionId?: SortOrder
    creeParId?: SortOrder
    dateDebut?: SortOrder
    dateFin?: SortOrder
    heureDepart?: SortOrder
    heureRetour?: SortOrder
    departReel?: SortOrder
    retourReel?: SortOrder
    statut?: SortOrder
    itineraire?: SortOrder
    fraisParticipation?: SortOrder
    fraisMission?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
  }

  export type OrdreMissionSumOrderByAggregateInput = {
    id?: SortOrder
    employeId?: SortOrder
    destinationId?: SortOrder
    chauffeurId?: SortOrder
    vehiculeId?: SortOrder
    objetMissionId?: SortOrder
    creeParId?: SortOrder
    fraisParticipation?: SortOrder
    fraisMission?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type OrdreMissionScalarRelationFilter = {
    is?: OrdreMissionWhereInput
    isNot?: OrdreMissionWhereInput
  }

  export type AccompagnateurOrdreMissionIdEmployeIdCompoundUniqueInput = {
    ordreMissionId: number
    employeId: number
  }

  export type AccompagnateurCountOrderByAggregateInput = {
    id?: SortOrder
    ordreMissionId?: SortOrder
    employeId?: SortOrder
  }

  export type AccompagnateurAvgOrderByAggregateInput = {
    id?: SortOrder
    ordreMissionId?: SortOrder
    employeId?: SortOrder
  }

  export type AccompagnateurMaxOrderByAggregateInput = {
    id?: SortOrder
    ordreMissionId?: SortOrder
    employeId?: SortOrder
  }

  export type AccompagnateurMinOrderByAggregateInput = {
    id?: SortOrder
    ordreMissionId?: SortOrder
    employeId?: SortOrder
  }

  export type AccompagnateurSumOrderByAggregateInput = {
    id?: SortOrder
    ordreMissionId?: SortOrder
    employeId?: SortOrder
  }

  export type OrdreMissionCreateNestedManyWithoutCreeParInput = {
    create?: XOR<OrdreMissionCreateWithoutCreeParInput, OrdreMissionUncheckedCreateWithoutCreeParInput> | OrdreMissionCreateWithoutCreeParInput[] | OrdreMissionUncheckedCreateWithoutCreeParInput[]
    connectOrCreate?: OrdreMissionCreateOrConnectWithoutCreeParInput | OrdreMissionCreateOrConnectWithoutCreeParInput[]
    createMany?: OrdreMissionCreateManyCreeParInputEnvelope
    connect?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
  }

  export type OrdreMissionUncheckedCreateNestedManyWithoutCreeParInput = {
    create?: XOR<OrdreMissionCreateWithoutCreeParInput, OrdreMissionUncheckedCreateWithoutCreeParInput> | OrdreMissionCreateWithoutCreeParInput[] | OrdreMissionUncheckedCreateWithoutCreeParInput[]
    connectOrCreate?: OrdreMissionCreateOrConnectWithoutCreeParInput | OrdreMissionCreateOrConnectWithoutCreeParInput[]
    createMany?: OrdreMissionCreateManyCreeParInputEnvelope
    connect?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OrdreMissionUpdateManyWithoutCreeParNestedInput = {
    create?: XOR<OrdreMissionCreateWithoutCreeParInput, OrdreMissionUncheckedCreateWithoutCreeParInput> | OrdreMissionCreateWithoutCreeParInput[] | OrdreMissionUncheckedCreateWithoutCreeParInput[]
    connectOrCreate?: OrdreMissionCreateOrConnectWithoutCreeParInput | OrdreMissionCreateOrConnectWithoutCreeParInput[]
    upsert?: OrdreMissionUpsertWithWhereUniqueWithoutCreeParInput | OrdreMissionUpsertWithWhereUniqueWithoutCreeParInput[]
    createMany?: OrdreMissionCreateManyCreeParInputEnvelope
    set?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
    disconnect?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
    delete?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
    connect?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
    update?: OrdreMissionUpdateWithWhereUniqueWithoutCreeParInput | OrdreMissionUpdateWithWhereUniqueWithoutCreeParInput[]
    updateMany?: OrdreMissionUpdateManyWithWhereWithoutCreeParInput | OrdreMissionUpdateManyWithWhereWithoutCreeParInput[]
    deleteMany?: OrdreMissionScalarWhereInput | OrdreMissionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type OrdreMissionUncheckedUpdateManyWithoutCreeParNestedInput = {
    create?: XOR<OrdreMissionCreateWithoutCreeParInput, OrdreMissionUncheckedCreateWithoutCreeParInput> | OrdreMissionCreateWithoutCreeParInput[] | OrdreMissionUncheckedCreateWithoutCreeParInput[]
    connectOrCreate?: OrdreMissionCreateOrConnectWithoutCreeParInput | OrdreMissionCreateOrConnectWithoutCreeParInput[]
    upsert?: OrdreMissionUpsertWithWhereUniqueWithoutCreeParInput | OrdreMissionUpsertWithWhereUniqueWithoutCreeParInput[]
    createMany?: OrdreMissionCreateManyCreeParInputEnvelope
    set?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
    disconnect?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
    delete?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
    connect?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
    update?: OrdreMissionUpdateWithWhereUniqueWithoutCreeParInput | OrdreMissionUpdateWithWhereUniqueWithoutCreeParInput[]
    updateMany?: OrdreMissionUpdateManyWithWhereWithoutCreeParInput | OrdreMissionUpdateManyWithWhereWithoutCreeParInput[]
    deleteMany?: OrdreMissionScalarWhereInput | OrdreMissionScalarWhereInput[]
  }

  export type OrdreMissionCreateNestedManyWithoutEmployeInput = {
    create?: XOR<OrdreMissionCreateWithoutEmployeInput, OrdreMissionUncheckedCreateWithoutEmployeInput> | OrdreMissionCreateWithoutEmployeInput[] | OrdreMissionUncheckedCreateWithoutEmployeInput[]
    connectOrCreate?: OrdreMissionCreateOrConnectWithoutEmployeInput | OrdreMissionCreateOrConnectWithoutEmployeInput[]
    createMany?: OrdreMissionCreateManyEmployeInputEnvelope
    connect?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
  }

  export type AccompagnateurCreateNestedManyWithoutEmployeInput = {
    create?: XOR<AccompagnateurCreateWithoutEmployeInput, AccompagnateurUncheckedCreateWithoutEmployeInput> | AccompagnateurCreateWithoutEmployeInput[] | AccompagnateurUncheckedCreateWithoutEmployeInput[]
    connectOrCreate?: AccompagnateurCreateOrConnectWithoutEmployeInput | AccompagnateurCreateOrConnectWithoutEmployeInput[]
    createMany?: AccompagnateurCreateManyEmployeInputEnvelope
    connect?: AccompagnateurWhereUniqueInput | AccompagnateurWhereUniqueInput[]
  }

  export type OrdreMissionUncheckedCreateNestedManyWithoutEmployeInput = {
    create?: XOR<OrdreMissionCreateWithoutEmployeInput, OrdreMissionUncheckedCreateWithoutEmployeInput> | OrdreMissionCreateWithoutEmployeInput[] | OrdreMissionUncheckedCreateWithoutEmployeInput[]
    connectOrCreate?: OrdreMissionCreateOrConnectWithoutEmployeInput | OrdreMissionCreateOrConnectWithoutEmployeInput[]
    createMany?: OrdreMissionCreateManyEmployeInputEnvelope
    connect?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
  }

  export type AccompagnateurUncheckedCreateNestedManyWithoutEmployeInput = {
    create?: XOR<AccompagnateurCreateWithoutEmployeInput, AccompagnateurUncheckedCreateWithoutEmployeInput> | AccompagnateurCreateWithoutEmployeInput[] | AccompagnateurUncheckedCreateWithoutEmployeInput[]
    connectOrCreate?: AccompagnateurCreateOrConnectWithoutEmployeInput | AccompagnateurCreateOrConnectWithoutEmployeInput[]
    createMany?: AccompagnateurCreateManyEmployeInputEnvelope
    connect?: AccompagnateurWhereUniqueInput | AccompagnateurWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type OrdreMissionUpdateManyWithoutEmployeNestedInput = {
    create?: XOR<OrdreMissionCreateWithoutEmployeInput, OrdreMissionUncheckedCreateWithoutEmployeInput> | OrdreMissionCreateWithoutEmployeInput[] | OrdreMissionUncheckedCreateWithoutEmployeInput[]
    connectOrCreate?: OrdreMissionCreateOrConnectWithoutEmployeInput | OrdreMissionCreateOrConnectWithoutEmployeInput[]
    upsert?: OrdreMissionUpsertWithWhereUniqueWithoutEmployeInput | OrdreMissionUpsertWithWhereUniqueWithoutEmployeInput[]
    createMany?: OrdreMissionCreateManyEmployeInputEnvelope
    set?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
    disconnect?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
    delete?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
    connect?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
    update?: OrdreMissionUpdateWithWhereUniqueWithoutEmployeInput | OrdreMissionUpdateWithWhereUniqueWithoutEmployeInput[]
    updateMany?: OrdreMissionUpdateManyWithWhereWithoutEmployeInput | OrdreMissionUpdateManyWithWhereWithoutEmployeInput[]
    deleteMany?: OrdreMissionScalarWhereInput | OrdreMissionScalarWhereInput[]
  }

  export type AccompagnateurUpdateManyWithoutEmployeNestedInput = {
    create?: XOR<AccompagnateurCreateWithoutEmployeInput, AccompagnateurUncheckedCreateWithoutEmployeInput> | AccompagnateurCreateWithoutEmployeInput[] | AccompagnateurUncheckedCreateWithoutEmployeInput[]
    connectOrCreate?: AccompagnateurCreateOrConnectWithoutEmployeInput | AccompagnateurCreateOrConnectWithoutEmployeInput[]
    upsert?: AccompagnateurUpsertWithWhereUniqueWithoutEmployeInput | AccompagnateurUpsertWithWhereUniqueWithoutEmployeInput[]
    createMany?: AccompagnateurCreateManyEmployeInputEnvelope
    set?: AccompagnateurWhereUniqueInput | AccompagnateurWhereUniqueInput[]
    disconnect?: AccompagnateurWhereUniqueInput | AccompagnateurWhereUniqueInput[]
    delete?: AccompagnateurWhereUniqueInput | AccompagnateurWhereUniqueInput[]
    connect?: AccompagnateurWhereUniqueInput | AccompagnateurWhereUniqueInput[]
    update?: AccompagnateurUpdateWithWhereUniqueWithoutEmployeInput | AccompagnateurUpdateWithWhereUniqueWithoutEmployeInput[]
    updateMany?: AccompagnateurUpdateManyWithWhereWithoutEmployeInput | AccompagnateurUpdateManyWithWhereWithoutEmployeInput[]
    deleteMany?: AccompagnateurScalarWhereInput | AccompagnateurScalarWhereInput[]
  }

  export type OrdreMissionUncheckedUpdateManyWithoutEmployeNestedInput = {
    create?: XOR<OrdreMissionCreateWithoutEmployeInput, OrdreMissionUncheckedCreateWithoutEmployeInput> | OrdreMissionCreateWithoutEmployeInput[] | OrdreMissionUncheckedCreateWithoutEmployeInput[]
    connectOrCreate?: OrdreMissionCreateOrConnectWithoutEmployeInput | OrdreMissionCreateOrConnectWithoutEmployeInput[]
    upsert?: OrdreMissionUpsertWithWhereUniqueWithoutEmployeInput | OrdreMissionUpsertWithWhereUniqueWithoutEmployeInput[]
    createMany?: OrdreMissionCreateManyEmployeInputEnvelope
    set?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
    disconnect?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
    delete?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
    connect?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
    update?: OrdreMissionUpdateWithWhereUniqueWithoutEmployeInput | OrdreMissionUpdateWithWhereUniqueWithoutEmployeInput[]
    updateMany?: OrdreMissionUpdateManyWithWhereWithoutEmployeInput | OrdreMissionUpdateManyWithWhereWithoutEmployeInput[]
    deleteMany?: OrdreMissionScalarWhereInput | OrdreMissionScalarWhereInput[]
  }

  export type AccompagnateurUncheckedUpdateManyWithoutEmployeNestedInput = {
    create?: XOR<AccompagnateurCreateWithoutEmployeInput, AccompagnateurUncheckedCreateWithoutEmployeInput> | AccompagnateurCreateWithoutEmployeInput[] | AccompagnateurUncheckedCreateWithoutEmployeInput[]
    connectOrCreate?: AccompagnateurCreateOrConnectWithoutEmployeInput | AccompagnateurCreateOrConnectWithoutEmployeInput[]
    upsert?: AccompagnateurUpsertWithWhereUniqueWithoutEmployeInput | AccompagnateurUpsertWithWhereUniqueWithoutEmployeInput[]
    createMany?: AccompagnateurCreateManyEmployeInputEnvelope
    set?: AccompagnateurWhereUniqueInput | AccompagnateurWhereUniqueInput[]
    disconnect?: AccompagnateurWhereUniqueInput | AccompagnateurWhereUniqueInput[]
    delete?: AccompagnateurWhereUniqueInput | AccompagnateurWhereUniqueInput[]
    connect?: AccompagnateurWhereUniqueInput | AccompagnateurWhereUniqueInput[]
    update?: AccompagnateurUpdateWithWhereUniqueWithoutEmployeInput | AccompagnateurUpdateWithWhereUniqueWithoutEmployeInput[]
    updateMany?: AccompagnateurUpdateManyWithWhereWithoutEmployeInput | AccompagnateurUpdateManyWithWhereWithoutEmployeInput[]
    deleteMany?: AccompagnateurScalarWhereInput | AccompagnateurScalarWhereInput[]
  }

  export type OrdreMissionCreateNestedManyWithoutChauffeurInput = {
    create?: XOR<OrdreMissionCreateWithoutChauffeurInput, OrdreMissionUncheckedCreateWithoutChauffeurInput> | OrdreMissionCreateWithoutChauffeurInput[] | OrdreMissionUncheckedCreateWithoutChauffeurInput[]
    connectOrCreate?: OrdreMissionCreateOrConnectWithoutChauffeurInput | OrdreMissionCreateOrConnectWithoutChauffeurInput[]
    createMany?: OrdreMissionCreateManyChauffeurInputEnvelope
    connect?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
  }

  export type OrdreMissionUncheckedCreateNestedManyWithoutChauffeurInput = {
    create?: XOR<OrdreMissionCreateWithoutChauffeurInput, OrdreMissionUncheckedCreateWithoutChauffeurInput> | OrdreMissionCreateWithoutChauffeurInput[] | OrdreMissionUncheckedCreateWithoutChauffeurInput[]
    connectOrCreate?: OrdreMissionCreateOrConnectWithoutChauffeurInput | OrdreMissionCreateOrConnectWithoutChauffeurInput[]
    createMany?: OrdreMissionCreateManyChauffeurInputEnvelope
    connect?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type OrdreMissionUpdateManyWithoutChauffeurNestedInput = {
    create?: XOR<OrdreMissionCreateWithoutChauffeurInput, OrdreMissionUncheckedCreateWithoutChauffeurInput> | OrdreMissionCreateWithoutChauffeurInput[] | OrdreMissionUncheckedCreateWithoutChauffeurInput[]
    connectOrCreate?: OrdreMissionCreateOrConnectWithoutChauffeurInput | OrdreMissionCreateOrConnectWithoutChauffeurInput[]
    upsert?: OrdreMissionUpsertWithWhereUniqueWithoutChauffeurInput | OrdreMissionUpsertWithWhereUniqueWithoutChauffeurInput[]
    createMany?: OrdreMissionCreateManyChauffeurInputEnvelope
    set?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
    disconnect?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
    delete?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
    connect?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
    update?: OrdreMissionUpdateWithWhereUniqueWithoutChauffeurInput | OrdreMissionUpdateWithWhereUniqueWithoutChauffeurInput[]
    updateMany?: OrdreMissionUpdateManyWithWhereWithoutChauffeurInput | OrdreMissionUpdateManyWithWhereWithoutChauffeurInput[]
    deleteMany?: OrdreMissionScalarWhereInput | OrdreMissionScalarWhereInput[]
  }

  export type OrdreMissionUncheckedUpdateManyWithoutChauffeurNestedInput = {
    create?: XOR<OrdreMissionCreateWithoutChauffeurInput, OrdreMissionUncheckedCreateWithoutChauffeurInput> | OrdreMissionCreateWithoutChauffeurInput[] | OrdreMissionUncheckedCreateWithoutChauffeurInput[]
    connectOrCreate?: OrdreMissionCreateOrConnectWithoutChauffeurInput | OrdreMissionCreateOrConnectWithoutChauffeurInput[]
    upsert?: OrdreMissionUpsertWithWhereUniqueWithoutChauffeurInput | OrdreMissionUpsertWithWhereUniqueWithoutChauffeurInput[]
    createMany?: OrdreMissionCreateManyChauffeurInputEnvelope
    set?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
    disconnect?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
    delete?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
    connect?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
    update?: OrdreMissionUpdateWithWhereUniqueWithoutChauffeurInput | OrdreMissionUpdateWithWhereUniqueWithoutChauffeurInput[]
    updateMany?: OrdreMissionUpdateManyWithWhereWithoutChauffeurInput | OrdreMissionUpdateManyWithWhereWithoutChauffeurInput[]
    deleteMany?: OrdreMissionScalarWhereInput | OrdreMissionScalarWhereInput[]
  }

  export type OrdreMissionCreateNestedManyWithoutVehiculeInput = {
    create?: XOR<OrdreMissionCreateWithoutVehiculeInput, OrdreMissionUncheckedCreateWithoutVehiculeInput> | OrdreMissionCreateWithoutVehiculeInput[] | OrdreMissionUncheckedCreateWithoutVehiculeInput[]
    connectOrCreate?: OrdreMissionCreateOrConnectWithoutVehiculeInput | OrdreMissionCreateOrConnectWithoutVehiculeInput[]
    createMany?: OrdreMissionCreateManyVehiculeInputEnvelope
    connect?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
  }

  export type OrdreMissionUncheckedCreateNestedManyWithoutVehiculeInput = {
    create?: XOR<OrdreMissionCreateWithoutVehiculeInput, OrdreMissionUncheckedCreateWithoutVehiculeInput> | OrdreMissionCreateWithoutVehiculeInput[] | OrdreMissionUncheckedCreateWithoutVehiculeInput[]
    connectOrCreate?: OrdreMissionCreateOrConnectWithoutVehiculeInput | OrdreMissionCreateOrConnectWithoutVehiculeInput[]
    createMany?: OrdreMissionCreateManyVehiculeInputEnvelope
    connect?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
  }

  export type OrdreMissionUpdateManyWithoutVehiculeNestedInput = {
    create?: XOR<OrdreMissionCreateWithoutVehiculeInput, OrdreMissionUncheckedCreateWithoutVehiculeInput> | OrdreMissionCreateWithoutVehiculeInput[] | OrdreMissionUncheckedCreateWithoutVehiculeInput[]
    connectOrCreate?: OrdreMissionCreateOrConnectWithoutVehiculeInput | OrdreMissionCreateOrConnectWithoutVehiculeInput[]
    upsert?: OrdreMissionUpsertWithWhereUniqueWithoutVehiculeInput | OrdreMissionUpsertWithWhereUniqueWithoutVehiculeInput[]
    createMany?: OrdreMissionCreateManyVehiculeInputEnvelope
    set?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
    disconnect?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
    delete?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
    connect?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
    update?: OrdreMissionUpdateWithWhereUniqueWithoutVehiculeInput | OrdreMissionUpdateWithWhereUniqueWithoutVehiculeInput[]
    updateMany?: OrdreMissionUpdateManyWithWhereWithoutVehiculeInput | OrdreMissionUpdateManyWithWhereWithoutVehiculeInput[]
    deleteMany?: OrdreMissionScalarWhereInput | OrdreMissionScalarWhereInput[]
  }

  export type OrdreMissionUncheckedUpdateManyWithoutVehiculeNestedInput = {
    create?: XOR<OrdreMissionCreateWithoutVehiculeInput, OrdreMissionUncheckedCreateWithoutVehiculeInput> | OrdreMissionCreateWithoutVehiculeInput[] | OrdreMissionUncheckedCreateWithoutVehiculeInput[]
    connectOrCreate?: OrdreMissionCreateOrConnectWithoutVehiculeInput | OrdreMissionCreateOrConnectWithoutVehiculeInput[]
    upsert?: OrdreMissionUpsertWithWhereUniqueWithoutVehiculeInput | OrdreMissionUpsertWithWhereUniqueWithoutVehiculeInput[]
    createMany?: OrdreMissionCreateManyVehiculeInputEnvelope
    set?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
    disconnect?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
    delete?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
    connect?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
    update?: OrdreMissionUpdateWithWhereUniqueWithoutVehiculeInput | OrdreMissionUpdateWithWhereUniqueWithoutVehiculeInput[]
    updateMany?: OrdreMissionUpdateManyWithWhereWithoutVehiculeInput | OrdreMissionUpdateManyWithWhereWithoutVehiculeInput[]
    deleteMany?: OrdreMissionScalarWhereInput | OrdreMissionScalarWhereInput[]
  }

  export type OrdreMissionCreateNestedManyWithoutObjetMissionInput = {
    create?: XOR<OrdreMissionCreateWithoutObjetMissionInput, OrdreMissionUncheckedCreateWithoutObjetMissionInput> | OrdreMissionCreateWithoutObjetMissionInput[] | OrdreMissionUncheckedCreateWithoutObjetMissionInput[]
    connectOrCreate?: OrdreMissionCreateOrConnectWithoutObjetMissionInput | OrdreMissionCreateOrConnectWithoutObjetMissionInput[]
    createMany?: OrdreMissionCreateManyObjetMissionInputEnvelope
    connect?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
  }

  export type OrdreMissionUncheckedCreateNestedManyWithoutObjetMissionInput = {
    create?: XOR<OrdreMissionCreateWithoutObjetMissionInput, OrdreMissionUncheckedCreateWithoutObjetMissionInput> | OrdreMissionCreateWithoutObjetMissionInput[] | OrdreMissionUncheckedCreateWithoutObjetMissionInput[]
    connectOrCreate?: OrdreMissionCreateOrConnectWithoutObjetMissionInput | OrdreMissionCreateOrConnectWithoutObjetMissionInput[]
    createMany?: OrdreMissionCreateManyObjetMissionInputEnvelope
    connect?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
  }

  export type OrdreMissionUpdateManyWithoutObjetMissionNestedInput = {
    create?: XOR<OrdreMissionCreateWithoutObjetMissionInput, OrdreMissionUncheckedCreateWithoutObjetMissionInput> | OrdreMissionCreateWithoutObjetMissionInput[] | OrdreMissionUncheckedCreateWithoutObjetMissionInput[]
    connectOrCreate?: OrdreMissionCreateOrConnectWithoutObjetMissionInput | OrdreMissionCreateOrConnectWithoutObjetMissionInput[]
    upsert?: OrdreMissionUpsertWithWhereUniqueWithoutObjetMissionInput | OrdreMissionUpsertWithWhereUniqueWithoutObjetMissionInput[]
    createMany?: OrdreMissionCreateManyObjetMissionInputEnvelope
    set?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
    disconnect?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
    delete?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
    connect?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
    update?: OrdreMissionUpdateWithWhereUniqueWithoutObjetMissionInput | OrdreMissionUpdateWithWhereUniqueWithoutObjetMissionInput[]
    updateMany?: OrdreMissionUpdateManyWithWhereWithoutObjetMissionInput | OrdreMissionUpdateManyWithWhereWithoutObjetMissionInput[]
    deleteMany?: OrdreMissionScalarWhereInput | OrdreMissionScalarWhereInput[]
  }

  export type OrdreMissionUncheckedUpdateManyWithoutObjetMissionNestedInput = {
    create?: XOR<OrdreMissionCreateWithoutObjetMissionInput, OrdreMissionUncheckedCreateWithoutObjetMissionInput> | OrdreMissionCreateWithoutObjetMissionInput[] | OrdreMissionUncheckedCreateWithoutObjetMissionInput[]
    connectOrCreate?: OrdreMissionCreateOrConnectWithoutObjetMissionInput | OrdreMissionCreateOrConnectWithoutObjetMissionInput[]
    upsert?: OrdreMissionUpsertWithWhereUniqueWithoutObjetMissionInput | OrdreMissionUpsertWithWhereUniqueWithoutObjetMissionInput[]
    createMany?: OrdreMissionCreateManyObjetMissionInputEnvelope
    set?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
    disconnect?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
    delete?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
    connect?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
    update?: OrdreMissionUpdateWithWhereUniqueWithoutObjetMissionInput | OrdreMissionUpdateWithWhereUniqueWithoutObjetMissionInput[]
    updateMany?: OrdreMissionUpdateManyWithWhereWithoutObjetMissionInput | OrdreMissionUpdateManyWithWhereWithoutObjetMissionInput[]
    deleteMany?: OrdreMissionScalarWhereInput | OrdreMissionScalarWhereInput[]
  }

  export type OrdreMissionCreateNestedManyWithoutDestinationInput = {
    create?: XOR<OrdreMissionCreateWithoutDestinationInput, OrdreMissionUncheckedCreateWithoutDestinationInput> | OrdreMissionCreateWithoutDestinationInput[] | OrdreMissionUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: OrdreMissionCreateOrConnectWithoutDestinationInput | OrdreMissionCreateOrConnectWithoutDestinationInput[]
    createMany?: OrdreMissionCreateManyDestinationInputEnvelope
    connect?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
  }

  export type OrdreMissionUncheckedCreateNestedManyWithoutDestinationInput = {
    create?: XOR<OrdreMissionCreateWithoutDestinationInput, OrdreMissionUncheckedCreateWithoutDestinationInput> | OrdreMissionCreateWithoutDestinationInput[] | OrdreMissionUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: OrdreMissionCreateOrConnectWithoutDestinationInput | OrdreMissionCreateOrConnectWithoutDestinationInput[]
    createMany?: OrdreMissionCreateManyDestinationInputEnvelope
    connect?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
  }

  export type OrdreMissionUpdateManyWithoutDestinationNestedInput = {
    create?: XOR<OrdreMissionCreateWithoutDestinationInput, OrdreMissionUncheckedCreateWithoutDestinationInput> | OrdreMissionCreateWithoutDestinationInput[] | OrdreMissionUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: OrdreMissionCreateOrConnectWithoutDestinationInput | OrdreMissionCreateOrConnectWithoutDestinationInput[]
    upsert?: OrdreMissionUpsertWithWhereUniqueWithoutDestinationInput | OrdreMissionUpsertWithWhereUniqueWithoutDestinationInput[]
    createMany?: OrdreMissionCreateManyDestinationInputEnvelope
    set?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
    disconnect?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
    delete?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
    connect?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
    update?: OrdreMissionUpdateWithWhereUniqueWithoutDestinationInput | OrdreMissionUpdateWithWhereUniqueWithoutDestinationInput[]
    updateMany?: OrdreMissionUpdateManyWithWhereWithoutDestinationInput | OrdreMissionUpdateManyWithWhereWithoutDestinationInput[]
    deleteMany?: OrdreMissionScalarWhereInput | OrdreMissionScalarWhereInput[]
  }

  export type OrdreMissionUncheckedUpdateManyWithoutDestinationNestedInput = {
    create?: XOR<OrdreMissionCreateWithoutDestinationInput, OrdreMissionUncheckedCreateWithoutDestinationInput> | OrdreMissionCreateWithoutDestinationInput[] | OrdreMissionUncheckedCreateWithoutDestinationInput[]
    connectOrCreate?: OrdreMissionCreateOrConnectWithoutDestinationInput | OrdreMissionCreateOrConnectWithoutDestinationInput[]
    upsert?: OrdreMissionUpsertWithWhereUniqueWithoutDestinationInput | OrdreMissionUpsertWithWhereUniqueWithoutDestinationInput[]
    createMany?: OrdreMissionCreateManyDestinationInputEnvelope
    set?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
    disconnect?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
    delete?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
    connect?: OrdreMissionWhereUniqueInput | OrdreMissionWhereUniqueInput[]
    update?: OrdreMissionUpdateWithWhereUniqueWithoutDestinationInput | OrdreMissionUpdateWithWhereUniqueWithoutDestinationInput[]
    updateMany?: OrdreMissionUpdateManyWithWhereWithoutDestinationInput | OrdreMissionUpdateManyWithWhereWithoutDestinationInput[]
    deleteMany?: OrdreMissionScalarWhereInput | OrdreMissionScalarWhereInput[]
  }

  export type EmployeCreateNestedOneWithoutMissionsInput = {
    create?: XOR<EmployeCreateWithoutMissionsInput, EmployeUncheckedCreateWithoutMissionsInput>
    connectOrCreate?: EmployeCreateOrConnectWithoutMissionsInput
    connect?: EmployeWhereUniqueInput
  }

  export type DestinationCreateNestedOneWithoutMissionsInput = {
    create?: XOR<DestinationCreateWithoutMissionsInput, DestinationUncheckedCreateWithoutMissionsInput>
    connectOrCreate?: DestinationCreateOrConnectWithoutMissionsInput
    connect?: DestinationWhereUniqueInput
  }

  export type ChauffeurCreateNestedOneWithoutMissionsInput = {
    create?: XOR<ChauffeurCreateWithoutMissionsInput, ChauffeurUncheckedCreateWithoutMissionsInput>
    connectOrCreate?: ChauffeurCreateOrConnectWithoutMissionsInput
    connect?: ChauffeurWhereUniqueInput
  }

  export type VehiculeCreateNestedOneWithoutMissionsInput = {
    create?: XOR<VehiculeCreateWithoutMissionsInput, VehiculeUncheckedCreateWithoutMissionsInput>
    connectOrCreate?: VehiculeCreateOrConnectWithoutMissionsInput
    connect?: VehiculeWhereUniqueInput
  }

  export type ObjetMissionCreateNestedOneWithoutMissionsInput = {
    create?: XOR<ObjetMissionCreateWithoutMissionsInput, ObjetMissionUncheckedCreateWithoutMissionsInput>
    connectOrCreate?: ObjetMissionCreateOrConnectWithoutMissionsInput
    connect?: ObjetMissionWhereUniqueInput
  }

  export type UtilisateurCreateNestedOneWithoutMissionsInput = {
    create?: XOR<UtilisateurCreateWithoutMissionsInput, UtilisateurUncheckedCreateWithoutMissionsInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutMissionsInput
    connect?: UtilisateurWhereUniqueInput
  }

  export type AccompagnateurCreateNestedManyWithoutOrdreMissionInput = {
    create?: XOR<AccompagnateurCreateWithoutOrdreMissionInput, AccompagnateurUncheckedCreateWithoutOrdreMissionInput> | AccompagnateurCreateWithoutOrdreMissionInput[] | AccompagnateurUncheckedCreateWithoutOrdreMissionInput[]
    connectOrCreate?: AccompagnateurCreateOrConnectWithoutOrdreMissionInput | AccompagnateurCreateOrConnectWithoutOrdreMissionInput[]
    createMany?: AccompagnateurCreateManyOrdreMissionInputEnvelope
    connect?: AccompagnateurWhereUniqueInput | AccompagnateurWhereUniqueInput[]
  }

  export type AccompagnateurUncheckedCreateNestedManyWithoutOrdreMissionInput = {
    create?: XOR<AccompagnateurCreateWithoutOrdreMissionInput, AccompagnateurUncheckedCreateWithoutOrdreMissionInput> | AccompagnateurCreateWithoutOrdreMissionInput[] | AccompagnateurUncheckedCreateWithoutOrdreMissionInput[]
    connectOrCreate?: AccompagnateurCreateOrConnectWithoutOrdreMissionInput | AccompagnateurCreateOrConnectWithoutOrdreMissionInput[]
    createMany?: AccompagnateurCreateManyOrdreMissionInputEnvelope
    connect?: AccompagnateurWhereUniqueInput | AccompagnateurWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EmployeUpdateOneRequiredWithoutMissionsNestedInput = {
    create?: XOR<EmployeCreateWithoutMissionsInput, EmployeUncheckedCreateWithoutMissionsInput>
    connectOrCreate?: EmployeCreateOrConnectWithoutMissionsInput
    upsert?: EmployeUpsertWithoutMissionsInput
    connect?: EmployeWhereUniqueInput
    update?: XOR<XOR<EmployeUpdateToOneWithWhereWithoutMissionsInput, EmployeUpdateWithoutMissionsInput>, EmployeUncheckedUpdateWithoutMissionsInput>
  }

  export type DestinationUpdateOneRequiredWithoutMissionsNestedInput = {
    create?: XOR<DestinationCreateWithoutMissionsInput, DestinationUncheckedCreateWithoutMissionsInput>
    connectOrCreate?: DestinationCreateOrConnectWithoutMissionsInput
    upsert?: DestinationUpsertWithoutMissionsInput
    connect?: DestinationWhereUniqueInput
    update?: XOR<XOR<DestinationUpdateToOneWithWhereWithoutMissionsInput, DestinationUpdateWithoutMissionsInput>, DestinationUncheckedUpdateWithoutMissionsInput>
  }

  export type ChauffeurUpdateOneRequiredWithoutMissionsNestedInput = {
    create?: XOR<ChauffeurCreateWithoutMissionsInput, ChauffeurUncheckedCreateWithoutMissionsInput>
    connectOrCreate?: ChauffeurCreateOrConnectWithoutMissionsInput
    upsert?: ChauffeurUpsertWithoutMissionsInput
    connect?: ChauffeurWhereUniqueInput
    update?: XOR<XOR<ChauffeurUpdateToOneWithWhereWithoutMissionsInput, ChauffeurUpdateWithoutMissionsInput>, ChauffeurUncheckedUpdateWithoutMissionsInput>
  }

  export type VehiculeUpdateOneRequiredWithoutMissionsNestedInput = {
    create?: XOR<VehiculeCreateWithoutMissionsInput, VehiculeUncheckedCreateWithoutMissionsInput>
    connectOrCreate?: VehiculeCreateOrConnectWithoutMissionsInput
    upsert?: VehiculeUpsertWithoutMissionsInput
    connect?: VehiculeWhereUniqueInput
    update?: XOR<XOR<VehiculeUpdateToOneWithWhereWithoutMissionsInput, VehiculeUpdateWithoutMissionsInput>, VehiculeUncheckedUpdateWithoutMissionsInput>
  }

  export type ObjetMissionUpdateOneRequiredWithoutMissionsNestedInput = {
    create?: XOR<ObjetMissionCreateWithoutMissionsInput, ObjetMissionUncheckedCreateWithoutMissionsInput>
    connectOrCreate?: ObjetMissionCreateOrConnectWithoutMissionsInput
    upsert?: ObjetMissionUpsertWithoutMissionsInput
    connect?: ObjetMissionWhereUniqueInput
    update?: XOR<XOR<ObjetMissionUpdateToOneWithWhereWithoutMissionsInput, ObjetMissionUpdateWithoutMissionsInput>, ObjetMissionUncheckedUpdateWithoutMissionsInput>
  }

  export type UtilisateurUpdateOneRequiredWithoutMissionsNestedInput = {
    create?: XOR<UtilisateurCreateWithoutMissionsInput, UtilisateurUncheckedCreateWithoutMissionsInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutMissionsInput
    upsert?: UtilisateurUpsertWithoutMissionsInput
    connect?: UtilisateurWhereUniqueInput
    update?: XOR<XOR<UtilisateurUpdateToOneWithWhereWithoutMissionsInput, UtilisateurUpdateWithoutMissionsInput>, UtilisateurUncheckedUpdateWithoutMissionsInput>
  }

  export type AccompagnateurUpdateManyWithoutOrdreMissionNestedInput = {
    create?: XOR<AccompagnateurCreateWithoutOrdreMissionInput, AccompagnateurUncheckedCreateWithoutOrdreMissionInput> | AccompagnateurCreateWithoutOrdreMissionInput[] | AccompagnateurUncheckedCreateWithoutOrdreMissionInput[]
    connectOrCreate?: AccompagnateurCreateOrConnectWithoutOrdreMissionInput | AccompagnateurCreateOrConnectWithoutOrdreMissionInput[]
    upsert?: AccompagnateurUpsertWithWhereUniqueWithoutOrdreMissionInput | AccompagnateurUpsertWithWhereUniqueWithoutOrdreMissionInput[]
    createMany?: AccompagnateurCreateManyOrdreMissionInputEnvelope
    set?: AccompagnateurWhereUniqueInput | AccompagnateurWhereUniqueInput[]
    disconnect?: AccompagnateurWhereUniqueInput | AccompagnateurWhereUniqueInput[]
    delete?: AccompagnateurWhereUniqueInput | AccompagnateurWhereUniqueInput[]
    connect?: AccompagnateurWhereUniqueInput | AccompagnateurWhereUniqueInput[]
    update?: AccompagnateurUpdateWithWhereUniqueWithoutOrdreMissionInput | AccompagnateurUpdateWithWhereUniqueWithoutOrdreMissionInput[]
    updateMany?: AccompagnateurUpdateManyWithWhereWithoutOrdreMissionInput | AccompagnateurUpdateManyWithWhereWithoutOrdreMissionInput[]
    deleteMany?: AccompagnateurScalarWhereInput | AccompagnateurScalarWhereInput[]
  }

  export type AccompagnateurUncheckedUpdateManyWithoutOrdreMissionNestedInput = {
    create?: XOR<AccompagnateurCreateWithoutOrdreMissionInput, AccompagnateurUncheckedCreateWithoutOrdreMissionInput> | AccompagnateurCreateWithoutOrdreMissionInput[] | AccompagnateurUncheckedCreateWithoutOrdreMissionInput[]
    connectOrCreate?: AccompagnateurCreateOrConnectWithoutOrdreMissionInput | AccompagnateurCreateOrConnectWithoutOrdreMissionInput[]
    upsert?: AccompagnateurUpsertWithWhereUniqueWithoutOrdreMissionInput | AccompagnateurUpsertWithWhereUniqueWithoutOrdreMissionInput[]
    createMany?: AccompagnateurCreateManyOrdreMissionInputEnvelope
    set?: AccompagnateurWhereUniqueInput | AccompagnateurWhereUniqueInput[]
    disconnect?: AccompagnateurWhereUniqueInput | AccompagnateurWhereUniqueInput[]
    delete?: AccompagnateurWhereUniqueInput | AccompagnateurWhereUniqueInput[]
    connect?: AccompagnateurWhereUniqueInput | AccompagnateurWhereUniqueInput[]
    update?: AccompagnateurUpdateWithWhereUniqueWithoutOrdreMissionInput | AccompagnateurUpdateWithWhereUniqueWithoutOrdreMissionInput[]
    updateMany?: AccompagnateurUpdateManyWithWhereWithoutOrdreMissionInput | AccompagnateurUpdateManyWithWhereWithoutOrdreMissionInput[]
    deleteMany?: AccompagnateurScalarWhereInput | AccompagnateurScalarWhereInput[]
  }

  export type OrdreMissionCreateNestedOneWithoutAccompagnateursInput = {
    create?: XOR<OrdreMissionCreateWithoutAccompagnateursInput, OrdreMissionUncheckedCreateWithoutAccompagnateursInput>
    connectOrCreate?: OrdreMissionCreateOrConnectWithoutAccompagnateursInput
    connect?: OrdreMissionWhereUniqueInput
  }

  export type EmployeCreateNestedOneWithoutAccompagnementsInput = {
    create?: XOR<EmployeCreateWithoutAccompagnementsInput, EmployeUncheckedCreateWithoutAccompagnementsInput>
    connectOrCreate?: EmployeCreateOrConnectWithoutAccompagnementsInput
    connect?: EmployeWhereUniqueInput
  }

  export type OrdreMissionUpdateOneRequiredWithoutAccompagnateursNestedInput = {
    create?: XOR<OrdreMissionCreateWithoutAccompagnateursInput, OrdreMissionUncheckedCreateWithoutAccompagnateursInput>
    connectOrCreate?: OrdreMissionCreateOrConnectWithoutAccompagnateursInput
    upsert?: OrdreMissionUpsertWithoutAccompagnateursInput
    connect?: OrdreMissionWhereUniqueInput
    update?: XOR<XOR<OrdreMissionUpdateToOneWithWhereWithoutAccompagnateursInput, OrdreMissionUpdateWithoutAccompagnateursInput>, OrdreMissionUncheckedUpdateWithoutAccompagnateursInput>
  }

  export type EmployeUpdateOneRequiredWithoutAccompagnementsNestedInput = {
    create?: XOR<EmployeCreateWithoutAccompagnementsInput, EmployeUncheckedCreateWithoutAccompagnementsInput>
    connectOrCreate?: EmployeCreateOrConnectWithoutAccompagnementsInput
    upsert?: EmployeUpsertWithoutAccompagnementsInput
    connect?: EmployeWhereUniqueInput
    update?: XOR<XOR<EmployeUpdateToOneWithWhereWithoutAccompagnementsInput, EmployeUpdateWithoutAccompagnementsInput>, EmployeUncheckedUpdateWithoutAccompagnementsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type OrdreMissionCreateWithoutCreeParInput = {
    reference: string
    dateDebut: Date | string
    dateFin?: Date | string | null
    heureDepart: string
    heureRetour?: string | null
    departReel?: Date | string | null
    retourReel?: Date | string | null
    statut: string
    itineraire?: string | null
    fraisParticipation?: number | null
    fraisMission?: number | null
    notes?: string | null
    createdAt?: Date | string
    employe: EmployeCreateNestedOneWithoutMissionsInput
    destination: DestinationCreateNestedOneWithoutMissionsInput
    chauffeur: ChauffeurCreateNestedOneWithoutMissionsInput
    vehicule: VehiculeCreateNestedOneWithoutMissionsInput
    objetMission: ObjetMissionCreateNestedOneWithoutMissionsInput
    accompagnateurs?: AccompagnateurCreateNestedManyWithoutOrdreMissionInput
  }

  export type OrdreMissionUncheckedCreateWithoutCreeParInput = {
    id?: number
    reference: string
    employeId: number
    destinationId: number
    chauffeurId: number
    vehiculeId: number
    objetMissionId: number
    dateDebut: Date | string
    dateFin?: Date | string | null
    heureDepart: string
    heureRetour?: string | null
    departReel?: Date | string | null
    retourReel?: Date | string | null
    statut: string
    itineraire?: string | null
    fraisParticipation?: number | null
    fraisMission?: number | null
    notes?: string | null
    createdAt?: Date | string
    accompagnateurs?: AccompagnateurUncheckedCreateNestedManyWithoutOrdreMissionInput
  }

  export type OrdreMissionCreateOrConnectWithoutCreeParInput = {
    where: OrdreMissionWhereUniqueInput
    create: XOR<OrdreMissionCreateWithoutCreeParInput, OrdreMissionUncheckedCreateWithoutCreeParInput>
  }

  export type OrdreMissionCreateManyCreeParInputEnvelope = {
    data: OrdreMissionCreateManyCreeParInput | OrdreMissionCreateManyCreeParInput[]
    skipDuplicates?: boolean
  }

  export type OrdreMissionUpsertWithWhereUniqueWithoutCreeParInput = {
    where: OrdreMissionWhereUniqueInput
    update: XOR<OrdreMissionUpdateWithoutCreeParInput, OrdreMissionUncheckedUpdateWithoutCreeParInput>
    create: XOR<OrdreMissionCreateWithoutCreeParInput, OrdreMissionUncheckedCreateWithoutCreeParInput>
  }

  export type OrdreMissionUpdateWithWhereUniqueWithoutCreeParInput = {
    where: OrdreMissionWhereUniqueInput
    data: XOR<OrdreMissionUpdateWithoutCreeParInput, OrdreMissionUncheckedUpdateWithoutCreeParInput>
  }

  export type OrdreMissionUpdateManyWithWhereWithoutCreeParInput = {
    where: OrdreMissionScalarWhereInput
    data: XOR<OrdreMissionUpdateManyMutationInput, OrdreMissionUncheckedUpdateManyWithoutCreeParInput>
  }

  export type OrdreMissionScalarWhereInput = {
    AND?: OrdreMissionScalarWhereInput | OrdreMissionScalarWhereInput[]
    OR?: OrdreMissionScalarWhereInput[]
    NOT?: OrdreMissionScalarWhereInput | OrdreMissionScalarWhereInput[]
    id?: IntFilter<"OrdreMission"> | number
    reference?: StringFilter<"OrdreMission"> | string
    employeId?: IntFilter<"OrdreMission"> | number
    destinationId?: IntFilter<"OrdreMission"> | number
    chauffeurId?: IntFilter<"OrdreMission"> | number
    vehiculeId?: IntFilter<"OrdreMission"> | number
    objetMissionId?: IntFilter<"OrdreMission"> | number
    creeParId?: IntFilter<"OrdreMission"> | number
    dateDebut?: DateTimeFilter<"OrdreMission"> | Date | string
    dateFin?: DateTimeNullableFilter<"OrdreMission"> | Date | string | null
    heureDepart?: StringFilter<"OrdreMission"> | string
    heureRetour?: StringNullableFilter<"OrdreMission"> | string | null
    departReel?: DateTimeNullableFilter<"OrdreMission"> | Date | string | null
    retourReel?: DateTimeNullableFilter<"OrdreMission"> | Date | string | null
    statut?: StringFilter<"OrdreMission"> | string
    itineraire?: StringNullableFilter<"OrdreMission"> | string | null
    fraisParticipation?: FloatNullableFilter<"OrdreMission"> | number | null
    fraisMission?: FloatNullableFilter<"OrdreMission"> | number | null
    notes?: StringNullableFilter<"OrdreMission"> | string | null
    createdAt?: DateTimeFilter<"OrdreMission"> | Date | string
  }

  export type OrdreMissionCreateWithoutEmployeInput = {
    reference: string
    dateDebut: Date | string
    dateFin?: Date | string | null
    heureDepart: string
    heureRetour?: string | null
    departReel?: Date | string | null
    retourReel?: Date | string | null
    statut: string
    itineraire?: string | null
    fraisParticipation?: number | null
    fraisMission?: number | null
    notes?: string | null
    createdAt?: Date | string
    destination: DestinationCreateNestedOneWithoutMissionsInput
    chauffeur: ChauffeurCreateNestedOneWithoutMissionsInput
    vehicule: VehiculeCreateNestedOneWithoutMissionsInput
    objetMission: ObjetMissionCreateNestedOneWithoutMissionsInput
    creePar: UtilisateurCreateNestedOneWithoutMissionsInput
    accompagnateurs?: AccompagnateurCreateNestedManyWithoutOrdreMissionInput
  }

  export type OrdreMissionUncheckedCreateWithoutEmployeInput = {
    id?: number
    reference: string
    destinationId: number
    chauffeurId: number
    vehiculeId: number
    objetMissionId: number
    creeParId: number
    dateDebut: Date | string
    dateFin?: Date | string | null
    heureDepart: string
    heureRetour?: string | null
    departReel?: Date | string | null
    retourReel?: Date | string | null
    statut: string
    itineraire?: string | null
    fraisParticipation?: number | null
    fraisMission?: number | null
    notes?: string | null
    createdAt?: Date | string
    accompagnateurs?: AccompagnateurUncheckedCreateNestedManyWithoutOrdreMissionInput
  }

  export type OrdreMissionCreateOrConnectWithoutEmployeInput = {
    where: OrdreMissionWhereUniqueInput
    create: XOR<OrdreMissionCreateWithoutEmployeInput, OrdreMissionUncheckedCreateWithoutEmployeInput>
  }

  export type OrdreMissionCreateManyEmployeInputEnvelope = {
    data: OrdreMissionCreateManyEmployeInput | OrdreMissionCreateManyEmployeInput[]
    skipDuplicates?: boolean
  }

  export type AccompagnateurCreateWithoutEmployeInput = {
    ordreMission: OrdreMissionCreateNestedOneWithoutAccompagnateursInput
  }

  export type AccompagnateurUncheckedCreateWithoutEmployeInput = {
    id?: number
    ordreMissionId: number
  }

  export type AccompagnateurCreateOrConnectWithoutEmployeInput = {
    where: AccompagnateurWhereUniqueInput
    create: XOR<AccompagnateurCreateWithoutEmployeInput, AccompagnateurUncheckedCreateWithoutEmployeInput>
  }

  export type AccompagnateurCreateManyEmployeInputEnvelope = {
    data: AccompagnateurCreateManyEmployeInput | AccompagnateurCreateManyEmployeInput[]
    skipDuplicates?: boolean
  }

  export type OrdreMissionUpsertWithWhereUniqueWithoutEmployeInput = {
    where: OrdreMissionWhereUniqueInput
    update: XOR<OrdreMissionUpdateWithoutEmployeInput, OrdreMissionUncheckedUpdateWithoutEmployeInput>
    create: XOR<OrdreMissionCreateWithoutEmployeInput, OrdreMissionUncheckedCreateWithoutEmployeInput>
  }

  export type OrdreMissionUpdateWithWhereUniqueWithoutEmployeInput = {
    where: OrdreMissionWhereUniqueInput
    data: XOR<OrdreMissionUpdateWithoutEmployeInput, OrdreMissionUncheckedUpdateWithoutEmployeInput>
  }

  export type OrdreMissionUpdateManyWithWhereWithoutEmployeInput = {
    where: OrdreMissionScalarWhereInput
    data: XOR<OrdreMissionUpdateManyMutationInput, OrdreMissionUncheckedUpdateManyWithoutEmployeInput>
  }

  export type AccompagnateurUpsertWithWhereUniqueWithoutEmployeInput = {
    where: AccompagnateurWhereUniqueInput
    update: XOR<AccompagnateurUpdateWithoutEmployeInput, AccompagnateurUncheckedUpdateWithoutEmployeInput>
    create: XOR<AccompagnateurCreateWithoutEmployeInput, AccompagnateurUncheckedCreateWithoutEmployeInput>
  }

  export type AccompagnateurUpdateWithWhereUniqueWithoutEmployeInput = {
    where: AccompagnateurWhereUniqueInput
    data: XOR<AccompagnateurUpdateWithoutEmployeInput, AccompagnateurUncheckedUpdateWithoutEmployeInput>
  }

  export type AccompagnateurUpdateManyWithWhereWithoutEmployeInput = {
    where: AccompagnateurScalarWhereInput
    data: XOR<AccompagnateurUpdateManyMutationInput, AccompagnateurUncheckedUpdateManyWithoutEmployeInput>
  }

  export type AccompagnateurScalarWhereInput = {
    AND?: AccompagnateurScalarWhereInput | AccompagnateurScalarWhereInput[]
    OR?: AccompagnateurScalarWhereInput[]
    NOT?: AccompagnateurScalarWhereInput | AccompagnateurScalarWhereInput[]
    id?: IntFilter<"Accompagnateur"> | number
    ordreMissionId?: IntFilter<"Accompagnateur"> | number
    employeId?: IntFilter<"Accompagnateur"> | number
  }

  export type OrdreMissionCreateWithoutChauffeurInput = {
    reference: string
    dateDebut: Date | string
    dateFin?: Date | string | null
    heureDepart: string
    heureRetour?: string | null
    departReel?: Date | string | null
    retourReel?: Date | string | null
    statut: string
    itineraire?: string | null
    fraisParticipation?: number | null
    fraisMission?: number | null
    notes?: string | null
    createdAt?: Date | string
    employe: EmployeCreateNestedOneWithoutMissionsInput
    destination: DestinationCreateNestedOneWithoutMissionsInput
    vehicule: VehiculeCreateNestedOneWithoutMissionsInput
    objetMission: ObjetMissionCreateNestedOneWithoutMissionsInput
    creePar: UtilisateurCreateNestedOneWithoutMissionsInput
    accompagnateurs?: AccompagnateurCreateNestedManyWithoutOrdreMissionInput
  }

  export type OrdreMissionUncheckedCreateWithoutChauffeurInput = {
    id?: number
    reference: string
    employeId: number
    destinationId: number
    vehiculeId: number
    objetMissionId: number
    creeParId: number
    dateDebut: Date | string
    dateFin?: Date | string | null
    heureDepart: string
    heureRetour?: string | null
    departReel?: Date | string | null
    retourReel?: Date | string | null
    statut: string
    itineraire?: string | null
    fraisParticipation?: number | null
    fraisMission?: number | null
    notes?: string | null
    createdAt?: Date | string
    accompagnateurs?: AccompagnateurUncheckedCreateNestedManyWithoutOrdreMissionInput
  }

  export type OrdreMissionCreateOrConnectWithoutChauffeurInput = {
    where: OrdreMissionWhereUniqueInput
    create: XOR<OrdreMissionCreateWithoutChauffeurInput, OrdreMissionUncheckedCreateWithoutChauffeurInput>
  }

  export type OrdreMissionCreateManyChauffeurInputEnvelope = {
    data: OrdreMissionCreateManyChauffeurInput | OrdreMissionCreateManyChauffeurInput[]
    skipDuplicates?: boolean
  }

  export type OrdreMissionUpsertWithWhereUniqueWithoutChauffeurInput = {
    where: OrdreMissionWhereUniqueInput
    update: XOR<OrdreMissionUpdateWithoutChauffeurInput, OrdreMissionUncheckedUpdateWithoutChauffeurInput>
    create: XOR<OrdreMissionCreateWithoutChauffeurInput, OrdreMissionUncheckedCreateWithoutChauffeurInput>
  }

  export type OrdreMissionUpdateWithWhereUniqueWithoutChauffeurInput = {
    where: OrdreMissionWhereUniqueInput
    data: XOR<OrdreMissionUpdateWithoutChauffeurInput, OrdreMissionUncheckedUpdateWithoutChauffeurInput>
  }

  export type OrdreMissionUpdateManyWithWhereWithoutChauffeurInput = {
    where: OrdreMissionScalarWhereInput
    data: XOR<OrdreMissionUpdateManyMutationInput, OrdreMissionUncheckedUpdateManyWithoutChauffeurInput>
  }

  export type OrdreMissionCreateWithoutVehiculeInput = {
    reference: string
    dateDebut: Date | string
    dateFin?: Date | string | null
    heureDepart: string
    heureRetour?: string | null
    departReel?: Date | string | null
    retourReel?: Date | string | null
    statut: string
    itineraire?: string | null
    fraisParticipation?: number | null
    fraisMission?: number | null
    notes?: string | null
    createdAt?: Date | string
    employe: EmployeCreateNestedOneWithoutMissionsInput
    destination: DestinationCreateNestedOneWithoutMissionsInput
    chauffeur: ChauffeurCreateNestedOneWithoutMissionsInput
    objetMission: ObjetMissionCreateNestedOneWithoutMissionsInput
    creePar: UtilisateurCreateNestedOneWithoutMissionsInput
    accompagnateurs?: AccompagnateurCreateNestedManyWithoutOrdreMissionInput
  }

  export type OrdreMissionUncheckedCreateWithoutVehiculeInput = {
    id?: number
    reference: string
    employeId: number
    destinationId: number
    chauffeurId: number
    objetMissionId: number
    creeParId: number
    dateDebut: Date | string
    dateFin?: Date | string | null
    heureDepart: string
    heureRetour?: string | null
    departReel?: Date | string | null
    retourReel?: Date | string | null
    statut: string
    itineraire?: string | null
    fraisParticipation?: number | null
    fraisMission?: number | null
    notes?: string | null
    createdAt?: Date | string
    accompagnateurs?: AccompagnateurUncheckedCreateNestedManyWithoutOrdreMissionInput
  }

  export type OrdreMissionCreateOrConnectWithoutVehiculeInput = {
    where: OrdreMissionWhereUniqueInput
    create: XOR<OrdreMissionCreateWithoutVehiculeInput, OrdreMissionUncheckedCreateWithoutVehiculeInput>
  }

  export type OrdreMissionCreateManyVehiculeInputEnvelope = {
    data: OrdreMissionCreateManyVehiculeInput | OrdreMissionCreateManyVehiculeInput[]
    skipDuplicates?: boolean
  }

  export type OrdreMissionUpsertWithWhereUniqueWithoutVehiculeInput = {
    where: OrdreMissionWhereUniqueInput
    update: XOR<OrdreMissionUpdateWithoutVehiculeInput, OrdreMissionUncheckedUpdateWithoutVehiculeInput>
    create: XOR<OrdreMissionCreateWithoutVehiculeInput, OrdreMissionUncheckedCreateWithoutVehiculeInput>
  }

  export type OrdreMissionUpdateWithWhereUniqueWithoutVehiculeInput = {
    where: OrdreMissionWhereUniqueInput
    data: XOR<OrdreMissionUpdateWithoutVehiculeInput, OrdreMissionUncheckedUpdateWithoutVehiculeInput>
  }

  export type OrdreMissionUpdateManyWithWhereWithoutVehiculeInput = {
    where: OrdreMissionScalarWhereInput
    data: XOR<OrdreMissionUpdateManyMutationInput, OrdreMissionUncheckedUpdateManyWithoutVehiculeInput>
  }

  export type OrdreMissionCreateWithoutObjetMissionInput = {
    reference: string
    dateDebut: Date | string
    dateFin?: Date | string | null
    heureDepart: string
    heureRetour?: string | null
    departReel?: Date | string | null
    retourReel?: Date | string | null
    statut: string
    itineraire?: string | null
    fraisParticipation?: number | null
    fraisMission?: number | null
    notes?: string | null
    createdAt?: Date | string
    employe: EmployeCreateNestedOneWithoutMissionsInput
    destination: DestinationCreateNestedOneWithoutMissionsInput
    chauffeur: ChauffeurCreateNestedOneWithoutMissionsInput
    vehicule: VehiculeCreateNestedOneWithoutMissionsInput
    creePar: UtilisateurCreateNestedOneWithoutMissionsInput
    accompagnateurs?: AccompagnateurCreateNestedManyWithoutOrdreMissionInput
  }

  export type OrdreMissionUncheckedCreateWithoutObjetMissionInput = {
    id?: number
    reference: string
    employeId: number
    destinationId: number
    chauffeurId: number
    vehiculeId: number
    creeParId: number
    dateDebut: Date | string
    dateFin?: Date | string | null
    heureDepart: string
    heureRetour?: string | null
    departReel?: Date | string | null
    retourReel?: Date | string | null
    statut: string
    itineraire?: string | null
    fraisParticipation?: number | null
    fraisMission?: number | null
    notes?: string | null
    createdAt?: Date | string
    accompagnateurs?: AccompagnateurUncheckedCreateNestedManyWithoutOrdreMissionInput
  }

  export type OrdreMissionCreateOrConnectWithoutObjetMissionInput = {
    where: OrdreMissionWhereUniqueInput
    create: XOR<OrdreMissionCreateWithoutObjetMissionInput, OrdreMissionUncheckedCreateWithoutObjetMissionInput>
  }

  export type OrdreMissionCreateManyObjetMissionInputEnvelope = {
    data: OrdreMissionCreateManyObjetMissionInput | OrdreMissionCreateManyObjetMissionInput[]
    skipDuplicates?: boolean
  }

  export type OrdreMissionUpsertWithWhereUniqueWithoutObjetMissionInput = {
    where: OrdreMissionWhereUniqueInput
    update: XOR<OrdreMissionUpdateWithoutObjetMissionInput, OrdreMissionUncheckedUpdateWithoutObjetMissionInput>
    create: XOR<OrdreMissionCreateWithoutObjetMissionInput, OrdreMissionUncheckedCreateWithoutObjetMissionInput>
  }

  export type OrdreMissionUpdateWithWhereUniqueWithoutObjetMissionInput = {
    where: OrdreMissionWhereUniqueInput
    data: XOR<OrdreMissionUpdateWithoutObjetMissionInput, OrdreMissionUncheckedUpdateWithoutObjetMissionInput>
  }

  export type OrdreMissionUpdateManyWithWhereWithoutObjetMissionInput = {
    where: OrdreMissionScalarWhereInput
    data: XOR<OrdreMissionUpdateManyMutationInput, OrdreMissionUncheckedUpdateManyWithoutObjetMissionInput>
  }

  export type OrdreMissionCreateWithoutDestinationInput = {
    reference: string
    dateDebut: Date | string
    dateFin?: Date | string | null
    heureDepart: string
    heureRetour?: string | null
    departReel?: Date | string | null
    retourReel?: Date | string | null
    statut: string
    itineraire?: string | null
    fraisParticipation?: number | null
    fraisMission?: number | null
    notes?: string | null
    createdAt?: Date | string
    employe: EmployeCreateNestedOneWithoutMissionsInput
    chauffeur: ChauffeurCreateNestedOneWithoutMissionsInput
    vehicule: VehiculeCreateNestedOneWithoutMissionsInput
    objetMission: ObjetMissionCreateNestedOneWithoutMissionsInput
    creePar: UtilisateurCreateNestedOneWithoutMissionsInput
    accompagnateurs?: AccompagnateurCreateNestedManyWithoutOrdreMissionInput
  }

  export type OrdreMissionUncheckedCreateWithoutDestinationInput = {
    id?: number
    reference: string
    employeId: number
    chauffeurId: number
    vehiculeId: number
    objetMissionId: number
    creeParId: number
    dateDebut: Date | string
    dateFin?: Date | string | null
    heureDepart: string
    heureRetour?: string | null
    departReel?: Date | string | null
    retourReel?: Date | string | null
    statut: string
    itineraire?: string | null
    fraisParticipation?: number | null
    fraisMission?: number | null
    notes?: string | null
    createdAt?: Date | string
    accompagnateurs?: AccompagnateurUncheckedCreateNestedManyWithoutOrdreMissionInput
  }

  export type OrdreMissionCreateOrConnectWithoutDestinationInput = {
    where: OrdreMissionWhereUniqueInput
    create: XOR<OrdreMissionCreateWithoutDestinationInput, OrdreMissionUncheckedCreateWithoutDestinationInput>
  }

  export type OrdreMissionCreateManyDestinationInputEnvelope = {
    data: OrdreMissionCreateManyDestinationInput | OrdreMissionCreateManyDestinationInput[]
    skipDuplicates?: boolean
  }

  export type OrdreMissionUpsertWithWhereUniqueWithoutDestinationInput = {
    where: OrdreMissionWhereUniqueInput
    update: XOR<OrdreMissionUpdateWithoutDestinationInput, OrdreMissionUncheckedUpdateWithoutDestinationInput>
    create: XOR<OrdreMissionCreateWithoutDestinationInput, OrdreMissionUncheckedCreateWithoutDestinationInput>
  }

  export type OrdreMissionUpdateWithWhereUniqueWithoutDestinationInput = {
    where: OrdreMissionWhereUniqueInput
    data: XOR<OrdreMissionUpdateWithoutDestinationInput, OrdreMissionUncheckedUpdateWithoutDestinationInput>
  }

  export type OrdreMissionUpdateManyWithWhereWithoutDestinationInput = {
    where: OrdreMissionScalarWhereInput
    data: XOR<OrdreMissionUpdateManyMutationInput, OrdreMissionUncheckedUpdateManyWithoutDestinationInput>
  }

  export type EmployeCreateWithoutMissionsInput = {
    mle: string
    nom: string
    prenom: string
    fonction: string
    hotelAffectation: string
    actif?: boolean
    accompagnements?: AccompagnateurCreateNestedManyWithoutEmployeInput
  }

  export type EmployeUncheckedCreateWithoutMissionsInput = {
    id?: number
    mle: string
    nom: string
    prenom: string
    fonction: string
    hotelAffectation: string
    actif?: boolean
    accompagnements?: AccompagnateurUncheckedCreateNestedManyWithoutEmployeInput
  }

  export type EmployeCreateOrConnectWithoutMissionsInput = {
    where: EmployeWhereUniqueInput
    create: XOR<EmployeCreateWithoutMissionsInput, EmployeUncheckedCreateWithoutMissionsInput>
  }

  export type DestinationCreateWithoutMissionsInput = {
    nom: string
    ville: string
  }

  export type DestinationUncheckedCreateWithoutMissionsInput = {
    id?: number
    nom: string
    ville: string
  }

  export type DestinationCreateOrConnectWithoutMissionsInput = {
    where: DestinationWhereUniqueInput
    create: XOR<DestinationCreateWithoutMissionsInput, DestinationUncheckedCreateWithoutMissionsInput>
  }

  export type ChauffeurCreateWithoutMissionsInput = {
    mle: string
    nom: string
    prenom: string
    telephone?: string | null
    disponible?: boolean
  }

  export type ChauffeurUncheckedCreateWithoutMissionsInput = {
    id?: number
    mle: string
    nom: string
    prenom: string
    telephone?: string | null
    disponible?: boolean
  }

  export type ChauffeurCreateOrConnectWithoutMissionsInput = {
    where: ChauffeurWhereUniqueInput
    create: XOR<ChauffeurCreateWithoutMissionsInput, ChauffeurUncheckedCreateWithoutMissionsInput>
  }

  export type VehiculeCreateWithoutMissionsInput = {
    immatriculation: string
    marque: string
    modele: string
    type: string
    disponible?: boolean
  }

  export type VehiculeUncheckedCreateWithoutMissionsInput = {
    id?: number
    immatriculation: string
    marque: string
    modele: string
    type: string
    disponible?: boolean
  }

  export type VehiculeCreateOrConnectWithoutMissionsInput = {
    where: VehiculeWhereUniqueInput
    create: XOR<VehiculeCreateWithoutMissionsInput, VehiculeUncheckedCreateWithoutMissionsInput>
  }

  export type ObjetMissionCreateWithoutMissionsInput = {
    libelle: string
    actif?: boolean
  }

  export type ObjetMissionUncheckedCreateWithoutMissionsInput = {
    id?: number
    libelle: string
    actif?: boolean
  }

  export type ObjetMissionCreateOrConnectWithoutMissionsInput = {
    where: ObjetMissionWhereUniqueInput
    create: XOR<ObjetMissionCreateWithoutMissionsInput, ObjetMissionUncheckedCreateWithoutMissionsInput>
  }

  export type UtilisateurCreateWithoutMissionsInput = {
    email: string
    passwordHash: string
    nom: string
    prenom: string
    role: string
    createdAt?: Date | string
  }

  export type UtilisateurUncheckedCreateWithoutMissionsInput = {
    id?: number
    email: string
    passwordHash: string
    nom: string
    prenom: string
    role: string
    createdAt?: Date | string
  }

  export type UtilisateurCreateOrConnectWithoutMissionsInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutMissionsInput, UtilisateurUncheckedCreateWithoutMissionsInput>
  }

  export type AccompagnateurCreateWithoutOrdreMissionInput = {
    employe: EmployeCreateNestedOneWithoutAccompagnementsInput
  }

  export type AccompagnateurUncheckedCreateWithoutOrdreMissionInput = {
    id?: number
    employeId: number
  }

  export type AccompagnateurCreateOrConnectWithoutOrdreMissionInput = {
    where: AccompagnateurWhereUniqueInput
    create: XOR<AccompagnateurCreateWithoutOrdreMissionInput, AccompagnateurUncheckedCreateWithoutOrdreMissionInput>
  }

  export type AccompagnateurCreateManyOrdreMissionInputEnvelope = {
    data: AccompagnateurCreateManyOrdreMissionInput | AccompagnateurCreateManyOrdreMissionInput[]
    skipDuplicates?: boolean
  }

  export type EmployeUpsertWithoutMissionsInput = {
    update: XOR<EmployeUpdateWithoutMissionsInput, EmployeUncheckedUpdateWithoutMissionsInput>
    create: XOR<EmployeCreateWithoutMissionsInput, EmployeUncheckedCreateWithoutMissionsInput>
    where?: EmployeWhereInput
  }

  export type EmployeUpdateToOneWithWhereWithoutMissionsInput = {
    where?: EmployeWhereInput
    data: XOR<EmployeUpdateWithoutMissionsInput, EmployeUncheckedUpdateWithoutMissionsInput>
  }

  export type EmployeUpdateWithoutMissionsInput = {
    mle?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    fonction?: StringFieldUpdateOperationsInput | string
    hotelAffectation?: StringFieldUpdateOperationsInput | string
    actif?: BoolFieldUpdateOperationsInput | boolean
    accompagnements?: AccompagnateurUpdateManyWithoutEmployeNestedInput
  }

  export type EmployeUncheckedUpdateWithoutMissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    mle?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    fonction?: StringFieldUpdateOperationsInput | string
    hotelAffectation?: StringFieldUpdateOperationsInput | string
    actif?: BoolFieldUpdateOperationsInput | boolean
    accompagnements?: AccompagnateurUncheckedUpdateManyWithoutEmployeNestedInput
  }

  export type DestinationUpsertWithoutMissionsInput = {
    update: XOR<DestinationUpdateWithoutMissionsInput, DestinationUncheckedUpdateWithoutMissionsInput>
    create: XOR<DestinationCreateWithoutMissionsInput, DestinationUncheckedCreateWithoutMissionsInput>
    where?: DestinationWhereInput
  }

  export type DestinationUpdateToOneWithWhereWithoutMissionsInput = {
    where?: DestinationWhereInput
    data: XOR<DestinationUpdateWithoutMissionsInput, DestinationUncheckedUpdateWithoutMissionsInput>
  }

  export type DestinationUpdateWithoutMissionsInput = {
    nom?: StringFieldUpdateOperationsInput | string
    ville?: StringFieldUpdateOperationsInput | string
  }

  export type DestinationUncheckedUpdateWithoutMissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    nom?: StringFieldUpdateOperationsInput | string
    ville?: StringFieldUpdateOperationsInput | string
  }

  export type ChauffeurUpsertWithoutMissionsInput = {
    update: XOR<ChauffeurUpdateWithoutMissionsInput, ChauffeurUncheckedUpdateWithoutMissionsInput>
    create: XOR<ChauffeurCreateWithoutMissionsInput, ChauffeurUncheckedCreateWithoutMissionsInput>
    where?: ChauffeurWhereInput
  }

  export type ChauffeurUpdateToOneWithWhereWithoutMissionsInput = {
    where?: ChauffeurWhereInput
    data: XOR<ChauffeurUpdateWithoutMissionsInput, ChauffeurUncheckedUpdateWithoutMissionsInput>
  }

  export type ChauffeurUpdateWithoutMissionsInput = {
    mle?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    disponible?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ChauffeurUncheckedUpdateWithoutMissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    mle?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    telephone?: NullableStringFieldUpdateOperationsInput | string | null
    disponible?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VehiculeUpsertWithoutMissionsInput = {
    update: XOR<VehiculeUpdateWithoutMissionsInput, VehiculeUncheckedUpdateWithoutMissionsInput>
    create: XOR<VehiculeCreateWithoutMissionsInput, VehiculeUncheckedCreateWithoutMissionsInput>
    where?: VehiculeWhereInput
  }

  export type VehiculeUpdateToOneWithWhereWithoutMissionsInput = {
    where?: VehiculeWhereInput
    data: XOR<VehiculeUpdateWithoutMissionsInput, VehiculeUncheckedUpdateWithoutMissionsInput>
  }

  export type VehiculeUpdateWithoutMissionsInput = {
    immatriculation?: StringFieldUpdateOperationsInput | string
    marque?: StringFieldUpdateOperationsInput | string
    modele?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VehiculeUncheckedUpdateWithoutMissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    immatriculation?: StringFieldUpdateOperationsInput | string
    marque?: StringFieldUpdateOperationsInput | string
    modele?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    disponible?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ObjetMissionUpsertWithoutMissionsInput = {
    update: XOR<ObjetMissionUpdateWithoutMissionsInput, ObjetMissionUncheckedUpdateWithoutMissionsInput>
    create: XOR<ObjetMissionCreateWithoutMissionsInput, ObjetMissionUncheckedCreateWithoutMissionsInput>
    where?: ObjetMissionWhereInput
  }

  export type ObjetMissionUpdateToOneWithWhereWithoutMissionsInput = {
    where?: ObjetMissionWhereInput
    data: XOR<ObjetMissionUpdateWithoutMissionsInput, ObjetMissionUncheckedUpdateWithoutMissionsInput>
  }

  export type ObjetMissionUpdateWithoutMissionsInput = {
    libelle?: StringFieldUpdateOperationsInput | string
    actif?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ObjetMissionUncheckedUpdateWithoutMissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    libelle?: StringFieldUpdateOperationsInput | string
    actif?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UtilisateurUpsertWithoutMissionsInput = {
    update: XOR<UtilisateurUpdateWithoutMissionsInput, UtilisateurUncheckedUpdateWithoutMissionsInput>
    create: XOR<UtilisateurCreateWithoutMissionsInput, UtilisateurUncheckedCreateWithoutMissionsInput>
    where?: UtilisateurWhereInput
  }

  export type UtilisateurUpdateToOneWithWhereWithoutMissionsInput = {
    where?: UtilisateurWhereInput
    data: XOR<UtilisateurUpdateWithoutMissionsInput, UtilisateurUncheckedUpdateWithoutMissionsInput>
  }

  export type UtilisateurUpdateWithoutMissionsInput = {
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UtilisateurUncheckedUpdateWithoutMissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccompagnateurUpsertWithWhereUniqueWithoutOrdreMissionInput = {
    where: AccompagnateurWhereUniqueInput
    update: XOR<AccompagnateurUpdateWithoutOrdreMissionInput, AccompagnateurUncheckedUpdateWithoutOrdreMissionInput>
    create: XOR<AccompagnateurCreateWithoutOrdreMissionInput, AccompagnateurUncheckedCreateWithoutOrdreMissionInput>
  }

  export type AccompagnateurUpdateWithWhereUniqueWithoutOrdreMissionInput = {
    where: AccompagnateurWhereUniqueInput
    data: XOR<AccompagnateurUpdateWithoutOrdreMissionInput, AccompagnateurUncheckedUpdateWithoutOrdreMissionInput>
  }

  export type AccompagnateurUpdateManyWithWhereWithoutOrdreMissionInput = {
    where: AccompagnateurScalarWhereInput
    data: XOR<AccompagnateurUpdateManyMutationInput, AccompagnateurUncheckedUpdateManyWithoutOrdreMissionInput>
  }

  export type OrdreMissionCreateWithoutAccompagnateursInput = {
    reference: string
    dateDebut: Date | string
    dateFin?: Date | string | null
    heureDepart: string
    heureRetour?: string | null
    departReel?: Date | string | null
    retourReel?: Date | string | null
    statut: string
    itineraire?: string | null
    fraisParticipation?: number | null
    fraisMission?: number | null
    notes?: string | null
    createdAt?: Date | string
    employe: EmployeCreateNestedOneWithoutMissionsInput
    destination: DestinationCreateNestedOneWithoutMissionsInput
    chauffeur: ChauffeurCreateNestedOneWithoutMissionsInput
    vehicule: VehiculeCreateNestedOneWithoutMissionsInput
    objetMission: ObjetMissionCreateNestedOneWithoutMissionsInput
    creePar: UtilisateurCreateNestedOneWithoutMissionsInput
  }

  export type OrdreMissionUncheckedCreateWithoutAccompagnateursInput = {
    id?: number
    reference: string
    employeId: number
    destinationId: number
    chauffeurId: number
    vehiculeId: number
    objetMissionId: number
    creeParId: number
    dateDebut: Date | string
    dateFin?: Date | string | null
    heureDepart: string
    heureRetour?: string | null
    departReel?: Date | string | null
    retourReel?: Date | string | null
    statut: string
    itineraire?: string | null
    fraisParticipation?: number | null
    fraisMission?: number | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type OrdreMissionCreateOrConnectWithoutAccompagnateursInput = {
    where: OrdreMissionWhereUniqueInput
    create: XOR<OrdreMissionCreateWithoutAccompagnateursInput, OrdreMissionUncheckedCreateWithoutAccompagnateursInput>
  }

  export type EmployeCreateWithoutAccompagnementsInput = {
    mle: string
    nom: string
    prenom: string
    fonction: string
    hotelAffectation: string
    actif?: boolean
    missions?: OrdreMissionCreateNestedManyWithoutEmployeInput
  }

  export type EmployeUncheckedCreateWithoutAccompagnementsInput = {
    id?: number
    mle: string
    nom: string
    prenom: string
    fonction: string
    hotelAffectation: string
    actif?: boolean
    missions?: OrdreMissionUncheckedCreateNestedManyWithoutEmployeInput
  }

  export type EmployeCreateOrConnectWithoutAccompagnementsInput = {
    where: EmployeWhereUniqueInput
    create: XOR<EmployeCreateWithoutAccompagnementsInput, EmployeUncheckedCreateWithoutAccompagnementsInput>
  }

  export type OrdreMissionUpsertWithoutAccompagnateursInput = {
    update: XOR<OrdreMissionUpdateWithoutAccompagnateursInput, OrdreMissionUncheckedUpdateWithoutAccompagnateursInput>
    create: XOR<OrdreMissionCreateWithoutAccompagnateursInput, OrdreMissionUncheckedCreateWithoutAccompagnateursInput>
    where?: OrdreMissionWhereInput
  }

  export type OrdreMissionUpdateToOneWithWhereWithoutAccompagnateursInput = {
    where?: OrdreMissionWhereInput
    data: XOR<OrdreMissionUpdateWithoutAccompagnateursInput, OrdreMissionUncheckedUpdateWithoutAccompagnateursInput>
  }

  export type OrdreMissionUpdateWithoutAccompagnateursInput = {
    reference?: StringFieldUpdateOperationsInput | string
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureDepart?: StringFieldUpdateOperationsInput | string
    heureRetour?: NullableStringFieldUpdateOperationsInput | string | null
    departReel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    retourReel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: StringFieldUpdateOperationsInput | string
    itineraire?: NullableStringFieldUpdateOperationsInput | string | null
    fraisParticipation?: NullableFloatFieldUpdateOperationsInput | number | null
    fraisMission?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employe?: EmployeUpdateOneRequiredWithoutMissionsNestedInput
    destination?: DestinationUpdateOneRequiredWithoutMissionsNestedInput
    chauffeur?: ChauffeurUpdateOneRequiredWithoutMissionsNestedInput
    vehicule?: VehiculeUpdateOneRequiredWithoutMissionsNestedInput
    objetMission?: ObjetMissionUpdateOneRequiredWithoutMissionsNestedInput
    creePar?: UtilisateurUpdateOneRequiredWithoutMissionsNestedInput
  }

  export type OrdreMissionUncheckedUpdateWithoutAccompagnateursInput = {
    id?: IntFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    employeId?: IntFieldUpdateOperationsInput | number
    destinationId?: IntFieldUpdateOperationsInput | number
    chauffeurId?: IntFieldUpdateOperationsInput | number
    vehiculeId?: IntFieldUpdateOperationsInput | number
    objetMissionId?: IntFieldUpdateOperationsInput | number
    creeParId?: IntFieldUpdateOperationsInput | number
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureDepart?: StringFieldUpdateOperationsInput | string
    heureRetour?: NullableStringFieldUpdateOperationsInput | string | null
    departReel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    retourReel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: StringFieldUpdateOperationsInput | string
    itineraire?: NullableStringFieldUpdateOperationsInput | string | null
    fraisParticipation?: NullableFloatFieldUpdateOperationsInput | number | null
    fraisMission?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EmployeUpsertWithoutAccompagnementsInput = {
    update: XOR<EmployeUpdateWithoutAccompagnementsInput, EmployeUncheckedUpdateWithoutAccompagnementsInput>
    create: XOR<EmployeCreateWithoutAccompagnementsInput, EmployeUncheckedCreateWithoutAccompagnementsInput>
    where?: EmployeWhereInput
  }

  export type EmployeUpdateToOneWithWhereWithoutAccompagnementsInput = {
    where?: EmployeWhereInput
    data: XOR<EmployeUpdateWithoutAccompagnementsInput, EmployeUncheckedUpdateWithoutAccompagnementsInput>
  }

  export type EmployeUpdateWithoutAccompagnementsInput = {
    mle?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    fonction?: StringFieldUpdateOperationsInput | string
    hotelAffectation?: StringFieldUpdateOperationsInput | string
    actif?: BoolFieldUpdateOperationsInput | boolean
    missions?: OrdreMissionUpdateManyWithoutEmployeNestedInput
  }

  export type EmployeUncheckedUpdateWithoutAccompagnementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    mle?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    prenom?: StringFieldUpdateOperationsInput | string
    fonction?: StringFieldUpdateOperationsInput | string
    hotelAffectation?: StringFieldUpdateOperationsInput | string
    actif?: BoolFieldUpdateOperationsInput | boolean
    missions?: OrdreMissionUncheckedUpdateManyWithoutEmployeNestedInput
  }

  export type OrdreMissionCreateManyCreeParInput = {
    id?: number
    reference: string
    employeId: number
    destinationId: number
    chauffeurId: number
    vehiculeId: number
    objetMissionId: number
    dateDebut: Date | string
    dateFin?: Date | string | null
    heureDepart: string
    heureRetour?: string | null
    departReel?: Date | string | null
    retourReel?: Date | string | null
    statut: string
    itineraire?: string | null
    fraisParticipation?: number | null
    fraisMission?: number | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type OrdreMissionUpdateWithoutCreeParInput = {
    reference?: StringFieldUpdateOperationsInput | string
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureDepart?: StringFieldUpdateOperationsInput | string
    heureRetour?: NullableStringFieldUpdateOperationsInput | string | null
    departReel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    retourReel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: StringFieldUpdateOperationsInput | string
    itineraire?: NullableStringFieldUpdateOperationsInput | string | null
    fraisParticipation?: NullableFloatFieldUpdateOperationsInput | number | null
    fraisMission?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employe?: EmployeUpdateOneRequiredWithoutMissionsNestedInput
    destination?: DestinationUpdateOneRequiredWithoutMissionsNestedInput
    chauffeur?: ChauffeurUpdateOneRequiredWithoutMissionsNestedInput
    vehicule?: VehiculeUpdateOneRequiredWithoutMissionsNestedInput
    objetMission?: ObjetMissionUpdateOneRequiredWithoutMissionsNestedInput
    accompagnateurs?: AccompagnateurUpdateManyWithoutOrdreMissionNestedInput
  }

  export type OrdreMissionUncheckedUpdateWithoutCreeParInput = {
    id?: IntFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    employeId?: IntFieldUpdateOperationsInput | number
    destinationId?: IntFieldUpdateOperationsInput | number
    chauffeurId?: IntFieldUpdateOperationsInput | number
    vehiculeId?: IntFieldUpdateOperationsInput | number
    objetMissionId?: IntFieldUpdateOperationsInput | number
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureDepart?: StringFieldUpdateOperationsInput | string
    heureRetour?: NullableStringFieldUpdateOperationsInput | string | null
    departReel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    retourReel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: StringFieldUpdateOperationsInput | string
    itineraire?: NullableStringFieldUpdateOperationsInput | string | null
    fraisParticipation?: NullableFloatFieldUpdateOperationsInput | number | null
    fraisMission?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accompagnateurs?: AccompagnateurUncheckedUpdateManyWithoutOrdreMissionNestedInput
  }

  export type OrdreMissionUncheckedUpdateManyWithoutCreeParInput = {
    id?: IntFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    employeId?: IntFieldUpdateOperationsInput | number
    destinationId?: IntFieldUpdateOperationsInput | number
    chauffeurId?: IntFieldUpdateOperationsInput | number
    vehiculeId?: IntFieldUpdateOperationsInput | number
    objetMissionId?: IntFieldUpdateOperationsInput | number
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureDepart?: StringFieldUpdateOperationsInput | string
    heureRetour?: NullableStringFieldUpdateOperationsInput | string | null
    departReel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    retourReel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: StringFieldUpdateOperationsInput | string
    itineraire?: NullableStringFieldUpdateOperationsInput | string | null
    fraisParticipation?: NullableFloatFieldUpdateOperationsInput | number | null
    fraisMission?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdreMissionCreateManyEmployeInput = {
    id?: number
    reference: string
    destinationId: number
    chauffeurId: number
    vehiculeId: number
    objetMissionId: number
    creeParId: number
    dateDebut: Date | string
    dateFin?: Date | string | null
    heureDepart: string
    heureRetour?: string | null
    departReel?: Date | string | null
    retourReel?: Date | string | null
    statut: string
    itineraire?: string | null
    fraisParticipation?: number | null
    fraisMission?: number | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type AccompagnateurCreateManyEmployeInput = {
    id?: number
    ordreMissionId: number
  }

  export type OrdreMissionUpdateWithoutEmployeInput = {
    reference?: StringFieldUpdateOperationsInput | string
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureDepart?: StringFieldUpdateOperationsInput | string
    heureRetour?: NullableStringFieldUpdateOperationsInput | string | null
    departReel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    retourReel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: StringFieldUpdateOperationsInput | string
    itineraire?: NullableStringFieldUpdateOperationsInput | string | null
    fraisParticipation?: NullableFloatFieldUpdateOperationsInput | number | null
    fraisMission?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    destination?: DestinationUpdateOneRequiredWithoutMissionsNestedInput
    chauffeur?: ChauffeurUpdateOneRequiredWithoutMissionsNestedInput
    vehicule?: VehiculeUpdateOneRequiredWithoutMissionsNestedInput
    objetMission?: ObjetMissionUpdateOneRequiredWithoutMissionsNestedInput
    creePar?: UtilisateurUpdateOneRequiredWithoutMissionsNestedInput
    accompagnateurs?: AccompagnateurUpdateManyWithoutOrdreMissionNestedInput
  }

  export type OrdreMissionUncheckedUpdateWithoutEmployeInput = {
    id?: IntFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    destinationId?: IntFieldUpdateOperationsInput | number
    chauffeurId?: IntFieldUpdateOperationsInput | number
    vehiculeId?: IntFieldUpdateOperationsInput | number
    objetMissionId?: IntFieldUpdateOperationsInput | number
    creeParId?: IntFieldUpdateOperationsInput | number
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureDepart?: StringFieldUpdateOperationsInput | string
    heureRetour?: NullableStringFieldUpdateOperationsInput | string | null
    departReel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    retourReel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: StringFieldUpdateOperationsInput | string
    itineraire?: NullableStringFieldUpdateOperationsInput | string | null
    fraisParticipation?: NullableFloatFieldUpdateOperationsInput | number | null
    fraisMission?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accompagnateurs?: AccompagnateurUncheckedUpdateManyWithoutOrdreMissionNestedInput
  }

  export type OrdreMissionUncheckedUpdateManyWithoutEmployeInput = {
    id?: IntFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    destinationId?: IntFieldUpdateOperationsInput | number
    chauffeurId?: IntFieldUpdateOperationsInput | number
    vehiculeId?: IntFieldUpdateOperationsInput | number
    objetMissionId?: IntFieldUpdateOperationsInput | number
    creeParId?: IntFieldUpdateOperationsInput | number
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureDepart?: StringFieldUpdateOperationsInput | string
    heureRetour?: NullableStringFieldUpdateOperationsInput | string | null
    departReel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    retourReel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: StringFieldUpdateOperationsInput | string
    itineraire?: NullableStringFieldUpdateOperationsInput | string | null
    fraisParticipation?: NullableFloatFieldUpdateOperationsInput | number | null
    fraisMission?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccompagnateurUpdateWithoutEmployeInput = {
    ordreMission?: OrdreMissionUpdateOneRequiredWithoutAccompagnateursNestedInput
  }

  export type AccompagnateurUncheckedUpdateWithoutEmployeInput = {
    id?: IntFieldUpdateOperationsInput | number
    ordreMissionId?: IntFieldUpdateOperationsInput | number
  }

  export type AccompagnateurUncheckedUpdateManyWithoutEmployeInput = {
    id?: IntFieldUpdateOperationsInput | number
    ordreMissionId?: IntFieldUpdateOperationsInput | number
  }

  export type OrdreMissionCreateManyChauffeurInput = {
    id?: number
    reference: string
    employeId: number
    destinationId: number
    vehiculeId: number
    objetMissionId: number
    creeParId: number
    dateDebut: Date | string
    dateFin?: Date | string | null
    heureDepart: string
    heureRetour?: string | null
    departReel?: Date | string | null
    retourReel?: Date | string | null
    statut: string
    itineraire?: string | null
    fraisParticipation?: number | null
    fraisMission?: number | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type OrdreMissionUpdateWithoutChauffeurInput = {
    reference?: StringFieldUpdateOperationsInput | string
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureDepart?: StringFieldUpdateOperationsInput | string
    heureRetour?: NullableStringFieldUpdateOperationsInput | string | null
    departReel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    retourReel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: StringFieldUpdateOperationsInput | string
    itineraire?: NullableStringFieldUpdateOperationsInput | string | null
    fraisParticipation?: NullableFloatFieldUpdateOperationsInput | number | null
    fraisMission?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employe?: EmployeUpdateOneRequiredWithoutMissionsNestedInput
    destination?: DestinationUpdateOneRequiredWithoutMissionsNestedInput
    vehicule?: VehiculeUpdateOneRequiredWithoutMissionsNestedInput
    objetMission?: ObjetMissionUpdateOneRequiredWithoutMissionsNestedInput
    creePar?: UtilisateurUpdateOneRequiredWithoutMissionsNestedInput
    accompagnateurs?: AccompagnateurUpdateManyWithoutOrdreMissionNestedInput
  }

  export type OrdreMissionUncheckedUpdateWithoutChauffeurInput = {
    id?: IntFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    employeId?: IntFieldUpdateOperationsInput | number
    destinationId?: IntFieldUpdateOperationsInput | number
    vehiculeId?: IntFieldUpdateOperationsInput | number
    objetMissionId?: IntFieldUpdateOperationsInput | number
    creeParId?: IntFieldUpdateOperationsInput | number
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureDepart?: StringFieldUpdateOperationsInput | string
    heureRetour?: NullableStringFieldUpdateOperationsInput | string | null
    departReel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    retourReel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: StringFieldUpdateOperationsInput | string
    itineraire?: NullableStringFieldUpdateOperationsInput | string | null
    fraisParticipation?: NullableFloatFieldUpdateOperationsInput | number | null
    fraisMission?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accompagnateurs?: AccompagnateurUncheckedUpdateManyWithoutOrdreMissionNestedInput
  }

  export type OrdreMissionUncheckedUpdateManyWithoutChauffeurInput = {
    id?: IntFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    employeId?: IntFieldUpdateOperationsInput | number
    destinationId?: IntFieldUpdateOperationsInput | number
    vehiculeId?: IntFieldUpdateOperationsInput | number
    objetMissionId?: IntFieldUpdateOperationsInput | number
    creeParId?: IntFieldUpdateOperationsInput | number
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureDepart?: StringFieldUpdateOperationsInput | string
    heureRetour?: NullableStringFieldUpdateOperationsInput | string | null
    departReel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    retourReel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: StringFieldUpdateOperationsInput | string
    itineraire?: NullableStringFieldUpdateOperationsInput | string | null
    fraisParticipation?: NullableFloatFieldUpdateOperationsInput | number | null
    fraisMission?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdreMissionCreateManyVehiculeInput = {
    id?: number
    reference: string
    employeId: number
    destinationId: number
    chauffeurId: number
    objetMissionId: number
    creeParId: number
    dateDebut: Date | string
    dateFin?: Date | string | null
    heureDepart: string
    heureRetour?: string | null
    departReel?: Date | string | null
    retourReel?: Date | string | null
    statut: string
    itineraire?: string | null
    fraisParticipation?: number | null
    fraisMission?: number | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type OrdreMissionUpdateWithoutVehiculeInput = {
    reference?: StringFieldUpdateOperationsInput | string
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureDepart?: StringFieldUpdateOperationsInput | string
    heureRetour?: NullableStringFieldUpdateOperationsInput | string | null
    departReel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    retourReel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: StringFieldUpdateOperationsInput | string
    itineraire?: NullableStringFieldUpdateOperationsInput | string | null
    fraisParticipation?: NullableFloatFieldUpdateOperationsInput | number | null
    fraisMission?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employe?: EmployeUpdateOneRequiredWithoutMissionsNestedInput
    destination?: DestinationUpdateOneRequiredWithoutMissionsNestedInput
    chauffeur?: ChauffeurUpdateOneRequiredWithoutMissionsNestedInput
    objetMission?: ObjetMissionUpdateOneRequiredWithoutMissionsNestedInput
    creePar?: UtilisateurUpdateOneRequiredWithoutMissionsNestedInput
    accompagnateurs?: AccompagnateurUpdateManyWithoutOrdreMissionNestedInput
  }

  export type OrdreMissionUncheckedUpdateWithoutVehiculeInput = {
    id?: IntFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    employeId?: IntFieldUpdateOperationsInput | number
    destinationId?: IntFieldUpdateOperationsInput | number
    chauffeurId?: IntFieldUpdateOperationsInput | number
    objetMissionId?: IntFieldUpdateOperationsInput | number
    creeParId?: IntFieldUpdateOperationsInput | number
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureDepart?: StringFieldUpdateOperationsInput | string
    heureRetour?: NullableStringFieldUpdateOperationsInput | string | null
    departReel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    retourReel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: StringFieldUpdateOperationsInput | string
    itineraire?: NullableStringFieldUpdateOperationsInput | string | null
    fraisParticipation?: NullableFloatFieldUpdateOperationsInput | number | null
    fraisMission?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accompagnateurs?: AccompagnateurUncheckedUpdateManyWithoutOrdreMissionNestedInput
  }

  export type OrdreMissionUncheckedUpdateManyWithoutVehiculeInput = {
    id?: IntFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    employeId?: IntFieldUpdateOperationsInput | number
    destinationId?: IntFieldUpdateOperationsInput | number
    chauffeurId?: IntFieldUpdateOperationsInput | number
    objetMissionId?: IntFieldUpdateOperationsInput | number
    creeParId?: IntFieldUpdateOperationsInput | number
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureDepart?: StringFieldUpdateOperationsInput | string
    heureRetour?: NullableStringFieldUpdateOperationsInput | string | null
    departReel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    retourReel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: StringFieldUpdateOperationsInput | string
    itineraire?: NullableStringFieldUpdateOperationsInput | string | null
    fraisParticipation?: NullableFloatFieldUpdateOperationsInput | number | null
    fraisMission?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdreMissionCreateManyObjetMissionInput = {
    id?: number
    reference: string
    employeId: number
    destinationId: number
    chauffeurId: number
    vehiculeId: number
    creeParId: number
    dateDebut: Date | string
    dateFin?: Date | string | null
    heureDepart: string
    heureRetour?: string | null
    departReel?: Date | string | null
    retourReel?: Date | string | null
    statut: string
    itineraire?: string | null
    fraisParticipation?: number | null
    fraisMission?: number | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type OrdreMissionUpdateWithoutObjetMissionInput = {
    reference?: StringFieldUpdateOperationsInput | string
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureDepart?: StringFieldUpdateOperationsInput | string
    heureRetour?: NullableStringFieldUpdateOperationsInput | string | null
    departReel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    retourReel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: StringFieldUpdateOperationsInput | string
    itineraire?: NullableStringFieldUpdateOperationsInput | string | null
    fraisParticipation?: NullableFloatFieldUpdateOperationsInput | number | null
    fraisMission?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employe?: EmployeUpdateOneRequiredWithoutMissionsNestedInput
    destination?: DestinationUpdateOneRequiredWithoutMissionsNestedInput
    chauffeur?: ChauffeurUpdateOneRequiredWithoutMissionsNestedInput
    vehicule?: VehiculeUpdateOneRequiredWithoutMissionsNestedInput
    creePar?: UtilisateurUpdateOneRequiredWithoutMissionsNestedInput
    accompagnateurs?: AccompagnateurUpdateManyWithoutOrdreMissionNestedInput
  }

  export type OrdreMissionUncheckedUpdateWithoutObjetMissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    employeId?: IntFieldUpdateOperationsInput | number
    destinationId?: IntFieldUpdateOperationsInput | number
    chauffeurId?: IntFieldUpdateOperationsInput | number
    vehiculeId?: IntFieldUpdateOperationsInput | number
    creeParId?: IntFieldUpdateOperationsInput | number
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureDepart?: StringFieldUpdateOperationsInput | string
    heureRetour?: NullableStringFieldUpdateOperationsInput | string | null
    departReel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    retourReel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: StringFieldUpdateOperationsInput | string
    itineraire?: NullableStringFieldUpdateOperationsInput | string | null
    fraisParticipation?: NullableFloatFieldUpdateOperationsInput | number | null
    fraisMission?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accompagnateurs?: AccompagnateurUncheckedUpdateManyWithoutOrdreMissionNestedInput
  }

  export type OrdreMissionUncheckedUpdateManyWithoutObjetMissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    employeId?: IntFieldUpdateOperationsInput | number
    destinationId?: IntFieldUpdateOperationsInput | number
    chauffeurId?: IntFieldUpdateOperationsInput | number
    vehiculeId?: IntFieldUpdateOperationsInput | number
    creeParId?: IntFieldUpdateOperationsInput | number
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureDepart?: StringFieldUpdateOperationsInput | string
    heureRetour?: NullableStringFieldUpdateOperationsInput | string | null
    departReel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    retourReel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: StringFieldUpdateOperationsInput | string
    itineraire?: NullableStringFieldUpdateOperationsInput | string | null
    fraisParticipation?: NullableFloatFieldUpdateOperationsInput | number | null
    fraisMission?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrdreMissionCreateManyDestinationInput = {
    id?: number
    reference: string
    employeId: number
    chauffeurId: number
    vehiculeId: number
    objetMissionId: number
    creeParId: number
    dateDebut: Date | string
    dateFin?: Date | string | null
    heureDepart: string
    heureRetour?: string | null
    departReel?: Date | string | null
    retourReel?: Date | string | null
    statut: string
    itineraire?: string | null
    fraisParticipation?: number | null
    fraisMission?: number | null
    notes?: string | null
    createdAt?: Date | string
  }

  export type OrdreMissionUpdateWithoutDestinationInput = {
    reference?: StringFieldUpdateOperationsInput | string
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureDepart?: StringFieldUpdateOperationsInput | string
    heureRetour?: NullableStringFieldUpdateOperationsInput | string | null
    departReel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    retourReel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: StringFieldUpdateOperationsInput | string
    itineraire?: NullableStringFieldUpdateOperationsInput | string | null
    fraisParticipation?: NullableFloatFieldUpdateOperationsInput | number | null
    fraisMission?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    employe?: EmployeUpdateOneRequiredWithoutMissionsNestedInput
    chauffeur?: ChauffeurUpdateOneRequiredWithoutMissionsNestedInput
    vehicule?: VehiculeUpdateOneRequiredWithoutMissionsNestedInput
    objetMission?: ObjetMissionUpdateOneRequiredWithoutMissionsNestedInput
    creePar?: UtilisateurUpdateOneRequiredWithoutMissionsNestedInput
    accompagnateurs?: AccompagnateurUpdateManyWithoutOrdreMissionNestedInput
  }

  export type OrdreMissionUncheckedUpdateWithoutDestinationInput = {
    id?: IntFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    employeId?: IntFieldUpdateOperationsInput | number
    chauffeurId?: IntFieldUpdateOperationsInput | number
    vehiculeId?: IntFieldUpdateOperationsInput | number
    objetMissionId?: IntFieldUpdateOperationsInput | number
    creeParId?: IntFieldUpdateOperationsInput | number
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureDepart?: StringFieldUpdateOperationsInput | string
    heureRetour?: NullableStringFieldUpdateOperationsInput | string | null
    departReel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    retourReel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: StringFieldUpdateOperationsInput | string
    itineraire?: NullableStringFieldUpdateOperationsInput | string | null
    fraisParticipation?: NullableFloatFieldUpdateOperationsInput | number | null
    fraisMission?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accompagnateurs?: AccompagnateurUncheckedUpdateManyWithoutOrdreMissionNestedInput
  }

  export type OrdreMissionUncheckedUpdateManyWithoutDestinationInput = {
    id?: IntFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    employeId?: IntFieldUpdateOperationsInput | number
    chauffeurId?: IntFieldUpdateOperationsInput | number
    vehiculeId?: IntFieldUpdateOperationsInput | number
    objetMissionId?: IntFieldUpdateOperationsInput | number
    creeParId?: IntFieldUpdateOperationsInput | number
    dateDebut?: DateTimeFieldUpdateOperationsInput | Date | string
    dateFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    heureDepart?: StringFieldUpdateOperationsInput | string
    heureRetour?: NullableStringFieldUpdateOperationsInput | string | null
    departReel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    retourReel?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    statut?: StringFieldUpdateOperationsInput | string
    itineraire?: NullableStringFieldUpdateOperationsInput | string | null
    fraisParticipation?: NullableFloatFieldUpdateOperationsInput | number | null
    fraisMission?: NullableFloatFieldUpdateOperationsInput | number | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccompagnateurCreateManyOrdreMissionInput = {
    id?: number
    employeId: number
  }

  export type AccompagnateurUpdateWithoutOrdreMissionInput = {
    employe?: EmployeUpdateOneRequiredWithoutAccompagnementsNestedInput
  }

  export type AccompagnateurUncheckedUpdateWithoutOrdreMissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeId?: IntFieldUpdateOperationsInput | number
  }

  export type AccompagnateurUncheckedUpdateManyWithoutOrdreMissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    employeId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}