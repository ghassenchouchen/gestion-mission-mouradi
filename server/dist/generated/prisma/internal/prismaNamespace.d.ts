import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
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
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly Utilisateur: "Utilisateur";
    readonly Employe: "Employe";
    readonly Chauffeur: "Chauffeur";
    readonly Vehicule: "Vehicule";
    readonly ObjetMission: "ObjetMission";
    readonly Destination: "Destination";
    readonly OrdreMission: "OrdreMission";
    readonly Accompagnateur: "Accompagnateur";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "utilisateur" | "employe" | "chauffeur" | "vehicule" | "objetMission" | "destination" | "ordreMission" | "accompagnateur";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        Utilisateur: {
            payload: Prisma.$UtilisateurPayload<ExtArgs>;
            fields: Prisma.UtilisateurFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UtilisateurFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UtilisateurPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UtilisateurFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UtilisateurPayload>;
                };
                findFirst: {
                    args: Prisma.UtilisateurFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UtilisateurPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UtilisateurFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UtilisateurPayload>;
                };
                findMany: {
                    args: Prisma.UtilisateurFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UtilisateurPayload>[];
                };
                create: {
                    args: Prisma.UtilisateurCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UtilisateurPayload>;
                };
                createMany: {
                    args: Prisma.UtilisateurCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UtilisateurCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UtilisateurPayload>[];
                };
                delete: {
                    args: Prisma.UtilisateurDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UtilisateurPayload>;
                };
                update: {
                    args: Prisma.UtilisateurUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UtilisateurPayload>;
                };
                deleteMany: {
                    args: Prisma.UtilisateurDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UtilisateurUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UtilisateurUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UtilisateurPayload>[];
                };
                upsert: {
                    args: Prisma.UtilisateurUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UtilisateurPayload>;
                };
                aggregate: {
                    args: Prisma.UtilisateurAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUtilisateur>;
                };
                groupBy: {
                    args: Prisma.UtilisateurGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UtilisateurGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UtilisateurCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UtilisateurCountAggregateOutputType> | number;
                };
            };
        };
        Employe: {
            payload: Prisma.$EmployePayload<ExtArgs>;
            fields: Prisma.EmployeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.EmployeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.EmployeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployePayload>;
                };
                findFirst: {
                    args: Prisma.EmployeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.EmployeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployePayload>;
                };
                findMany: {
                    args: Prisma.EmployeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployePayload>[];
                };
                create: {
                    args: Prisma.EmployeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployePayload>;
                };
                createMany: {
                    args: Prisma.EmployeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.EmployeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployePayload>[];
                };
                delete: {
                    args: Prisma.EmployeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployePayload>;
                };
                update: {
                    args: Prisma.EmployeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployePayload>;
                };
                deleteMany: {
                    args: Prisma.EmployeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.EmployeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.EmployeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployePayload>[];
                };
                upsert: {
                    args: Prisma.EmployeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$EmployePayload>;
                };
                aggregate: {
                    args: Prisma.EmployeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEmploye>;
                };
                groupBy: {
                    args: Prisma.EmployeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EmployeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.EmployeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EmployeCountAggregateOutputType> | number;
                };
            };
        };
        Chauffeur: {
            payload: Prisma.$ChauffeurPayload<ExtArgs>;
            fields: Prisma.ChauffeurFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ChauffeurFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChauffeurPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ChauffeurFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChauffeurPayload>;
                };
                findFirst: {
                    args: Prisma.ChauffeurFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChauffeurPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ChauffeurFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChauffeurPayload>;
                };
                findMany: {
                    args: Prisma.ChauffeurFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChauffeurPayload>[];
                };
                create: {
                    args: Prisma.ChauffeurCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChauffeurPayload>;
                };
                createMany: {
                    args: Prisma.ChauffeurCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ChauffeurCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChauffeurPayload>[];
                };
                delete: {
                    args: Prisma.ChauffeurDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChauffeurPayload>;
                };
                update: {
                    args: Prisma.ChauffeurUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChauffeurPayload>;
                };
                deleteMany: {
                    args: Prisma.ChauffeurDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ChauffeurUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ChauffeurUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChauffeurPayload>[];
                };
                upsert: {
                    args: Prisma.ChauffeurUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ChauffeurPayload>;
                };
                aggregate: {
                    args: Prisma.ChauffeurAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateChauffeur>;
                };
                groupBy: {
                    args: Prisma.ChauffeurGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ChauffeurGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ChauffeurCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ChauffeurCountAggregateOutputType> | number;
                };
            };
        };
        Vehicule: {
            payload: Prisma.$VehiculePayload<ExtArgs>;
            fields: Prisma.VehiculeFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.VehiculeFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VehiculePayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.VehiculeFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VehiculePayload>;
                };
                findFirst: {
                    args: Prisma.VehiculeFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VehiculePayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.VehiculeFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VehiculePayload>;
                };
                findMany: {
                    args: Prisma.VehiculeFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VehiculePayload>[];
                };
                create: {
                    args: Prisma.VehiculeCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VehiculePayload>;
                };
                createMany: {
                    args: Prisma.VehiculeCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.VehiculeCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VehiculePayload>[];
                };
                delete: {
                    args: Prisma.VehiculeDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VehiculePayload>;
                };
                update: {
                    args: Prisma.VehiculeUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VehiculePayload>;
                };
                deleteMany: {
                    args: Prisma.VehiculeDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.VehiculeUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.VehiculeUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VehiculePayload>[];
                };
                upsert: {
                    args: Prisma.VehiculeUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$VehiculePayload>;
                };
                aggregate: {
                    args: Prisma.VehiculeAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateVehicule>;
                };
                groupBy: {
                    args: Prisma.VehiculeGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VehiculeGroupByOutputType>[];
                };
                count: {
                    args: Prisma.VehiculeCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VehiculeCountAggregateOutputType> | number;
                };
            };
        };
        ObjetMission: {
            payload: Prisma.$ObjetMissionPayload<ExtArgs>;
            fields: Prisma.ObjetMissionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ObjetMissionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ObjetMissionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ObjetMissionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ObjetMissionPayload>;
                };
                findFirst: {
                    args: Prisma.ObjetMissionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ObjetMissionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ObjetMissionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ObjetMissionPayload>;
                };
                findMany: {
                    args: Prisma.ObjetMissionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ObjetMissionPayload>[];
                };
                create: {
                    args: Prisma.ObjetMissionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ObjetMissionPayload>;
                };
                createMany: {
                    args: Prisma.ObjetMissionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ObjetMissionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ObjetMissionPayload>[];
                };
                delete: {
                    args: Prisma.ObjetMissionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ObjetMissionPayload>;
                };
                update: {
                    args: Prisma.ObjetMissionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ObjetMissionPayload>;
                };
                deleteMany: {
                    args: Prisma.ObjetMissionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ObjetMissionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ObjetMissionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ObjetMissionPayload>[];
                };
                upsert: {
                    args: Prisma.ObjetMissionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ObjetMissionPayload>;
                };
                aggregate: {
                    args: Prisma.ObjetMissionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateObjetMission>;
                };
                groupBy: {
                    args: Prisma.ObjetMissionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ObjetMissionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ObjetMissionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ObjetMissionCountAggregateOutputType> | number;
                };
            };
        };
        Destination: {
            payload: Prisma.$DestinationPayload<ExtArgs>;
            fields: Prisma.DestinationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DestinationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DestinationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DestinationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DestinationPayload>;
                };
                findFirst: {
                    args: Prisma.DestinationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DestinationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DestinationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DestinationPayload>;
                };
                findMany: {
                    args: Prisma.DestinationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DestinationPayload>[];
                };
                create: {
                    args: Prisma.DestinationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DestinationPayload>;
                };
                createMany: {
                    args: Prisma.DestinationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DestinationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DestinationPayload>[];
                };
                delete: {
                    args: Prisma.DestinationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DestinationPayload>;
                };
                update: {
                    args: Prisma.DestinationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DestinationPayload>;
                };
                deleteMany: {
                    args: Prisma.DestinationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DestinationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DestinationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DestinationPayload>[];
                };
                upsert: {
                    args: Prisma.DestinationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DestinationPayload>;
                };
                aggregate: {
                    args: Prisma.DestinationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDestination>;
                };
                groupBy: {
                    args: Prisma.DestinationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DestinationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DestinationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DestinationCountAggregateOutputType> | number;
                };
            };
        };
        OrdreMission: {
            payload: Prisma.$OrdreMissionPayload<ExtArgs>;
            fields: Prisma.OrdreMissionFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.OrdreMissionFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrdreMissionPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.OrdreMissionFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrdreMissionPayload>;
                };
                findFirst: {
                    args: Prisma.OrdreMissionFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrdreMissionPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.OrdreMissionFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrdreMissionPayload>;
                };
                findMany: {
                    args: Prisma.OrdreMissionFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrdreMissionPayload>[];
                };
                create: {
                    args: Prisma.OrdreMissionCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrdreMissionPayload>;
                };
                createMany: {
                    args: Prisma.OrdreMissionCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.OrdreMissionCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrdreMissionPayload>[];
                };
                delete: {
                    args: Prisma.OrdreMissionDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrdreMissionPayload>;
                };
                update: {
                    args: Prisma.OrdreMissionUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrdreMissionPayload>;
                };
                deleteMany: {
                    args: Prisma.OrdreMissionDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.OrdreMissionUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.OrdreMissionUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrdreMissionPayload>[];
                };
                upsert: {
                    args: Prisma.OrdreMissionUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$OrdreMissionPayload>;
                };
                aggregate: {
                    args: Prisma.OrdreMissionAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateOrdreMission>;
                };
                groupBy: {
                    args: Prisma.OrdreMissionGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrdreMissionGroupByOutputType>[];
                };
                count: {
                    args: Prisma.OrdreMissionCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.OrdreMissionCountAggregateOutputType> | number;
                };
            };
        };
        Accompagnateur: {
            payload: Prisma.$AccompagnateurPayload<ExtArgs>;
            fields: Prisma.AccompagnateurFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AccompagnateurFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccompagnateurPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AccompagnateurFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccompagnateurPayload>;
                };
                findFirst: {
                    args: Prisma.AccompagnateurFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccompagnateurPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AccompagnateurFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccompagnateurPayload>;
                };
                findMany: {
                    args: Prisma.AccompagnateurFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccompagnateurPayload>[];
                };
                create: {
                    args: Prisma.AccompagnateurCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccompagnateurPayload>;
                };
                createMany: {
                    args: Prisma.AccompagnateurCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AccompagnateurCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccompagnateurPayload>[];
                };
                delete: {
                    args: Prisma.AccompagnateurDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccompagnateurPayload>;
                };
                update: {
                    args: Prisma.AccompagnateurUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccompagnateurPayload>;
                };
                deleteMany: {
                    args: Prisma.AccompagnateurDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AccompagnateurUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AccompagnateurUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccompagnateurPayload>[];
                };
                upsert: {
                    args: Prisma.AccompagnateurUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AccompagnateurPayload>;
                };
                aggregate: {
                    args: Prisma.AccompagnateurAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAccompagnateur>;
                };
                groupBy: {
                    args: Prisma.AccompagnateurGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AccompagnateurGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AccompagnateurCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AccompagnateurCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UtilisateurScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly passwordHash: "passwordHash";
    readonly nom: "nom";
    readonly prenom: "prenom";
    readonly role: "role";
    readonly createdAt: "createdAt";
};
export type UtilisateurScalarFieldEnum = (typeof UtilisateurScalarFieldEnum)[keyof typeof UtilisateurScalarFieldEnum];
export declare const EmployeScalarFieldEnum: {
    readonly id: "id";
    readonly mle: "mle";
    readonly nom: "nom";
    readonly prenom: "prenom";
    readonly fonction: "fonction";
    readonly hotelAffectation: "hotelAffectation";
    readonly actif: "actif";
};
export type EmployeScalarFieldEnum = (typeof EmployeScalarFieldEnum)[keyof typeof EmployeScalarFieldEnum];
export declare const ChauffeurScalarFieldEnum: {
    readonly id: "id";
    readonly mle: "mle";
    readonly nom: "nom";
    readonly prenom: "prenom";
    readonly telephone: "telephone";
    readonly disponible: "disponible";
};
export type ChauffeurScalarFieldEnum = (typeof ChauffeurScalarFieldEnum)[keyof typeof ChauffeurScalarFieldEnum];
export declare const VehiculeScalarFieldEnum: {
    readonly id: "id";
    readonly immatriculation: "immatriculation";
    readonly marque: "marque";
    readonly modele: "modele";
    readonly type: "type";
    readonly disponible: "disponible";
};
export type VehiculeScalarFieldEnum = (typeof VehiculeScalarFieldEnum)[keyof typeof VehiculeScalarFieldEnum];
export declare const ObjetMissionScalarFieldEnum: {
    readonly id: "id";
    readonly libelle: "libelle";
    readonly actif: "actif";
};
export type ObjetMissionScalarFieldEnum = (typeof ObjetMissionScalarFieldEnum)[keyof typeof ObjetMissionScalarFieldEnum];
export declare const DestinationScalarFieldEnum: {
    readonly id: "id";
    readonly nom: "nom";
    readonly ville: "ville";
};
export type DestinationScalarFieldEnum = (typeof DestinationScalarFieldEnum)[keyof typeof DestinationScalarFieldEnum];
export declare const OrdreMissionScalarFieldEnum: {
    readonly id: "id";
    readonly reference: "reference";
    readonly employeId: "employeId";
    readonly destinationId: "destinationId";
    readonly chauffeurId: "chauffeurId";
    readonly vehiculeId: "vehiculeId";
    readonly objetMissionId: "objetMissionId";
    readonly creeParId: "creeParId";
    readonly dateDebut: "dateDebut";
    readonly dateFin: "dateFin";
    readonly heureDepart: "heureDepart";
    readonly heureRetour: "heureRetour";
    readonly departReel: "departReel";
    readonly retourReel: "retourReel";
    readonly statut: "statut";
    readonly itineraire: "itineraire";
    readonly fraisParticipation: "fraisParticipation";
    readonly fraisMission: "fraisMission";
    readonly notes: "notes";
    readonly createdAt: "createdAt";
};
export type OrdreMissionScalarFieldEnum = (typeof OrdreMissionScalarFieldEnum)[keyof typeof OrdreMissionScalarFieldEnum];
export declare const AccompagnateurScalarFieldEnum: {
    readonly id: "id";
    readonly ordreMissionId: "ordreMissionId";
    readonly employeId: "employeId";
};
export type AccompagnateurScalarFieldEnum = (typeof AccompagnateurScalarFieldEnum)[keyof typeof AccompagnateurScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    accelerateUrl: string;
    adapter?: never;
}) & {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
};
export type GlobalOmitConfig = {
    utilisateur?: Prisma.UtilisateurOmit;
    employe?: Prisma.EmployeOmit;
    chauffeur?: Prisma.ChauffeurOmit;
    vehicule?: Prisma.VehiculeOmit;
    objetMission?: Prisma.ObjetMissionOmit;
    destination?: Prisma.DestinationOmit;
    ordreMission?: Prisma.OrdreMissionOmit;
    accompagnateur?: Prisma.AccompagnateurOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
