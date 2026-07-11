import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type UtilisateurModel = runtime.Types.Result.DefaultSelection<Prisma.$UtilisateurPayload>;
export type AggregateUtilisateur = {
    _count: UtilisateurCountAggregateOutputType | null;
    _avg: UtilisateurAvgAggregateOutputType | null;
    _sum: UtilisateurSumAggregateOutputType | null;
    _min: UtilisateurMinAggregateOutputType | null;
    _max: UtilisateurMaxAggregateOutputType | null;
};
export type UtilisateurAvgAggregateOutputType = {
    id: number | null;
};
export type UtilisateurSumAggregateOutputType = {
    id: number | null;
};
export type UtilisateurMinAggregateOutputType = {
    id: number | null;
    email: string | null;
    passwordHash: string | null;
    nom: string | null;
    prenom: string | null;
    role: string | null;
    createdAt: Date | null;
};
export type UtilisateurMaxAggregateOutputType = {
    id: number | null;
    email: string | null;
    passwordHash: string | null;
    nom: string | null;
    prenom: string | null;
    role: string | null;
    createdAt: Date | null;
};
export type UtilisateurCountAggregateOutputType = {
    id: number;
    email: number;
    passwordHash: number;
    nom: number;
    prenom: number;
    role: number;
    createdAt: number;
    _all: number;
};
export type UtilisateurAvgAggregateInputType = {
    id?: true;
};
export type UtilisateurSumAggregateInputType = {
    id?: true;
};
export type UtilisateurMinAggregateInputType = {
    id?: true;
    email?: true;
    passwordHash?: true;
    nom?: true;
    prenom?: true;
    role?: true;
    createdAt?: true;
};
export type UtilisateurMaxAggregateInputType = {
    id?: true;
    email?: true;
    passwordHash?: true;
    nom?: true;
    prenom?: true;
    role?: true;
    createdAt?: true;
};
export type UtilisateurCountAggregateInputType = {
    id?: true;
    email?: true;
    passwordHash?: true;
    nom?: true;
    prenom?: true;
    role?: true;
    createdAt?: true;
    _all?: true;
};
export type UtilisateurAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UtilisateurWhereInput;
    orderBy?: Prisma.UtilisateurOrderByWithRelationInput | Prisma.UtilisateurOrderByWithRelationInput[];
    cursor?: Prisma.UtilisateurWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UtilisateurCountAggregateInputType;
    _avg?: UtilisateurAvgAggregateInputType;
    _sum?: UtilisateurSumAggregateInputType;
    _min?: UtilisateurMinAggregateInputType;
    _max?: UtilisateurMaxAggregateInputType;
};
export type GetUtilisateurAggregateType<T extends UtilisateurAggregateArgs> = {
    [P in keyof T & keyof AggregateUtilisateur]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUtilisateur[P]> : Prisma.GetScalarType<T[P], AggregateUtilisateur[P]>;
};
export type UtilisateurGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UtilisateurWhereInput;
    orderBy?: Prisma.UtilisateurOrderByWithAggregationInput | Prisma.UtilisateurOrderByWithAggregationInput[];
    by: Prisma.UtilisateurScalarFieldEnum[] | Prisma.UtilisateurScalarFieldEnum;
    having?: Prisma.UtilisateurScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UtilisateurCountAggregateInputType | true;
    _avg?: UtilisateurAvgAggregateInputType;
    _sum?: UtilisateurSumAggregateInputType;
    _min?: UtilisateurMinAggregateInputType;
    _max?: UtilisateurMaxAggregateInputType;
};
export type UtilisateurGroupByOutputType = {
    id: number;
    email: string;
    passwordHash: string;
    nom: string;
    prenom: string;
    role: string;
    createdAt: Date;
    _count: UtilisateurCountAggregateOutputType | null;
    _avg: UtilisateurAvgAggregateOutputType | null;
    _sum: UtilisateurSumAggregateOutputType | null;
    _min: UtilisateurMinAggregateOutputType | null;
    _max: UtilisateurMaxAggregateOutputType | null;
};
export type GetUtilisateurGroupByPayload<T extends UtilisateurGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UtilisateurGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UtilisateurGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UtilisateurGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UtilisateurGroupByOutputType[P]>;
}>>;
export type UtilisateurWhereInput = {
    AND?: Prisma.UtilisateurWhereInput | Prisma.UtilisateurWhereInput[];
    OR?: Prisma.UtilisateurWhereInput[];
    NOT?: Prisma.UtilisateurWhereInput | Prisma.UtilisateurWhereInput[];
    id?: Prisma.IntFilter<"Utilisateur"> | number;
    email?: Prisma.StringFilter<"Utilisateur"> | string;
    passwordHash?: Prisma.StringFilter<"Utilisateur"> | string;
    nom?: Prisma.StringFilter<"Utilisateur"> | string;
    prenom?: Prisma.StringFilter<"Utilisateur"> | string;
    role?: Prisma.StringFilter<"Utilisateur"> | string;
    createdAt?: Prisma.DateTimeFilter<"Utilisateur"> | Date | string;
    missions?: Prisma.OrdreMissionListRelationFilter;
};
export type UtilisateurOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    missions?: Prisma.OrdreMissionOrderByRelationAggregateInput;
};
export type UtilisateurWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    email?: string;
    AND?: Prisma.UtilisateurWhereInput | Prisma.UtilisateurWhereInput[];
    OR?: Prisma.UtilisateurWhereInput[];
    NOT?: Prisma.UtilisateurWhereInput | Prisma.UtilisateurWhereInput[];
    passwordHash?: Prisma.StringFilter<"Utilisateur"> | string;
    nom?: Prisma.StringFilter<"Utilisateur"> | string;
    prenom?: Prisma.StringFilter<"Utilisateur"> | string;
    role?: Prisma.StringFilter<"Utilisateur"> | string;
    createdAt?: Prisma.DateTimeFilter<"Utilisateur"> | Date | string;
    missions?: Prisma.OrdreMissionListRelationFilter;
}, "id" | "email">;
export type UtilisateurOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.UtilisateurCountOrderByAggregateInput;
    _avg?: Prisma.UtilisateurAvgOrderByAggregateInput;
    _max?: Prisma.UtilisateurMaxOrderByAggregateInput;
    _min?: Prisma.UtilisateurMinOrderByAggregateInput;
    _sum?: Prisma.UtilisateurSumOrderByAggregateInput;
};
export type UtilisateurScalarWhereWithAggregatesInput = {
    AND?: Prisma.UtilisateurScalarWhereWithAggregatesInput | Prisma.UtilisateurScalarWhereWithAggregatesInput[];
    OR?: Prisma.UtilisateurScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UtilisateurScalarWhereWithAggregatesInput | Prisma.UtilisateurScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Utilisateur"> | number;
    email?: Prisma.StringWithAggregatesFilter<"Utilisateur"> | string;
    passwordHash?: Prisma.StringWithAggregatesFilter<"Utilisateur"> | string;
    nom?: Prisma.StringWithAggregatesFilter<"Utilisateur"> | string;
    prenom?: Prisma.StringWithAggregatesFilter<"Utilisateur"> | string;
    role?: Prisma.StringWithAggregatesFilter<"Utilisateur"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Utilisateur"> | Date | string;
};
export type UtilisateurCreateInput = {
    email: string;
    passwordHash: string;
    nom: string;
    prenom: string;
    role: string;
    createdAt?: Date | string;
    missions?: Prisma.OrdreMissionCreateNestedManyWithoutCreeParInput;
};
export type UtilisateurUncheckedCreateInput = {
    id?: number;
    email: string;
    passwordHash: string;
    nom: string;
    prenom: string;
    role: string;
    createdAt?: Date | string;
    missions?: Prisma.OrdreMissionUncheckedCreateNestedManyWithoutCreeParInput;
};
export type UtilisateurUpdateInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    missions?: Prisma.OrdreMissionUpdateManyWithoutCreeParNestedInput;
};
export type UtilisateurUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    missions?: Prisma.OrdreMissionUncheckedUpdateManyWithoutCreeParNestedInput;
};
export type UtilisateurCreateManyInput = {
    id?: number;
    email: string;
    passwordHash: string;
    nom: string;
    prenom: string;
    role: string;
    createdAt?: Date | string;
};
export type UtilisateurUpdateManyMutationInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UtilisateurUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UtilisateurCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type UtilisateurAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type UtilisateurMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type UtilisateurMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    passwordHash?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type UtilisateurSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type UtilisateurScalarRelationFilter = {
    is?: Prisma.UtilisateurWhereInput;
    isNot?: Prisma.UtilisateurWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type UtilisateurCreateNestedOneWithoutMissionsInput = {
    create?: Prisma.XOR<Prisma.UtilisateurCreateWithoutMissionsInput, Prisma.UtilisateurUncheckedCreateWithoutMissionsInput>;
    connectOrCreate?: Prisma.UtilisateurCreateOrConnectWithoutMissionsInput;
    connect?: Prisma.UtilisateurWhereUniqueInput;
};
export type UtilisateurUpdateOneRequiredWithoutMissionsNestedInput = {
    create?: Prisma.XOR<Prisma.UtilisateurCreateWithoutMissionsInput, Prisma.UtilisateurUncheckedCreateWithoutMissionsInput>;
    connectOrCreate?: Prisma.UtilisateurCreateOrConnectWithoutMissionsInput;
    upsert?: Prisma.UtilisateurUpsertWithoutMissionsInput;
    connect?: Prisma.UtilisateurWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UtilisateurUpdateToOneWithWhereWithoutMissionsInput, Prisma.UtilisateurUpdateWithoutMissionsInput>, Prisma.UtilisateurUncheckedUpdateWithoutMissionsInput>;
};
export type UtilisateurCreateWithoutMissionsInput = {
    email: string;
    passwordHash: string;
    nom: string;
    prenom: string;
    role: string;
    createdAt?: Date | string;
};
export type UtilisateurUncheckedCreateWithoutMissionsInput = {
    id?: number;
    email: string;
    passwordHash: string;
    nom: string;
    prenom: string;
    role: string;
    createdAt?: Date | string;
};
export type UtilisateurCreateOrConnectWithoutMissionsInput = {
    where: Prisma.UtilisateurWhereUniqueInput;
    create: Prisma.XOR<Prisma.UtilisateurCreateWithoutMissionsInput, Prisma.UtilisateurUncheckedCreateWithoutMissionsInput>;
};
export type UtilisateurUpsertWithoutMissionsInput = {
    update: Prisma.XOR<Prisma.UtilisateurUpdateWithoutMissionsInput, Prisma.UtilisateurUncheckedUpdateWithoutMissionsInput>;
    create: Prisma.XOR<Prisma.UtilisateurCreateWithoutMissionsInput, Prisma.UtilisateurUncheckedCreateWithoutMissionsInput>;
    where?: Prisma.UtilisateurWhereInput;
};
export type UtilisateurUpdateToOneWithWhereWithoutMissionsInput = {
    where?: Prisma.UtilisateurWhereInput;
    data: Prisma.XOR<Prisma.UtilisateurUpdateWithoutMissionsInput, Prisma.UtilisateurUncheckedUpdateWithoutMissionsInput>;
};
export type UtilisateurUpdateWithoutMissionsInput = {
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UtilisateurUncheckedUpdateWithoutMissionsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    passwordHash?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    role?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UtilisateurCountOutputType = {
    missions: number;
};
export type UtilisateurCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    missions?: boolean | UtilisateurCountOutputTypeCountMissionsArgs;
};
export type UtilisateurCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UtilisateurCountOutputTypeSelect<ExtArgs> | null;
};
export type UtilisateurCountOutputTypeCountMissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrdreMissionWhereInput;
};
export type UtilisateurSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    nom?: boolean;
    prenom?: boolean;
    role?: boolean;
    createdAt?: boolean;
    missions?: boolean | Prisma.Utilisateur$missionsArgs<ExtArgs>;
    _count?: boolean | Prisma.UtilisateurCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["utilisateur"]>;
export type UtilisateurSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    nom?: boolean;
    prenom?: boolean;
    role?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["utilisateur"]>;
export type UtilisateurSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    nom?: boolean;
    prenom?: boolean;
    role?: boolean;
    createdAt?: boolean;
}, ExtArgs["result"]["utilisateur"]>;
export type UtilisateurSelectScalar = {
    id?: boolean;
    email?: boolean;
    passwordHash?: boolean;
    nom?: boolean;
    prenom?: boolean;
    role?: boolean;
    createdAt?: boolean;
};
export type UtilisateurOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "passwordHash" | "nom" | "prenom" | "role" | "createdAt", ExtArgs["result"]["utilisateur"]>;
export type UtilisateurInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    missions?: boolean | Prisma.Utilisateur$missionsArgs<ExtArgs>;
    _count?: boolean | Prisma.UtilisateurCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UtilisateurIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UtilisateurIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UtilisateurPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Utilisateur";
    objects: {
        missions: Prisma.$OrdreMissionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        email: string;
        passwordHash: string;
        nom: string;
        prenom: string;
        role: string;
        createdAt: Date;
    }, ExtArgs["result"]["utilisateur"]>;
    composites: {};
};
export type UtilisateurGetPayload<S extends boolean | null | undefined | UtilisateurDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UtilisateurPayload, S>;
export type UtilisateurCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UtilisateurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UtilisateurCountAggregateInputType | true;
};
export interface UtilisateurDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Utilisateur'];
        meta: {
            name: 'Utilisateur';
        };
    };
    findUnique<T extends UtilisateurFindUniqueArgs>(args: Prisma.SelectSubset<T, UtilisateurFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UtilisateurClient<runtime.Types.Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UtilisateurFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UtilisateurFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UtilisateurClient<runtime.Types.Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UtilisateurFindFirstArgs>(args?: Prisma.SelectSubset<T, UtilisateurFindFirstArgs<ExtArgs>>): Prisma.Prisma__UtilisateurClient<runtime.Types.Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UtilisateurFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UtilisateurFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UtilisateurClient<runtime.Types.Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UtilisateurFindManyArgs>(args?: Prisma.SelectSubset<T, UtilisateurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UtilisateurCreateArgs>(args: Prisma.SelectSubset<T, UtilisateurCreateArgs<ExtArgs>>): Prisma.Prisma__UtilisateurClient<runtime.Types.Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UtilisateurCreateManyArgs>(args?: Prisma.SelectSubset<T, UtilisateurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UtilisateurCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UtilisateurCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UtilisateurDeleteArgs>(args: Prisma.SelectSubset<T, UtilisateurDeleteArgs<ExtArgs>>): Prisma.Prisma__UtilisateurClient<runtime.Types.Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UtilisateurUpdateArgs>(args: Prisma.SelectSubset<T, UtilisateurUpdateArgs<ExtArgs>>): Prisma.Prisma__UtilisateurClient<runtime.Types.Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UtilisateurDeleteManyArgs>(args?: Prisma.SelectSubset<T, UtilisateurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UtilisateurUpdateManyArgs>(args: Prisma.SelectSubset<T, UtilisateurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UtilisateurUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UtilisateurUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UtilisateurUpsertArgs>(args: Prisma.SelectSubset<T, UtilisateurUpsertArgs<ExtArgs>>): Prisma.Prisma__UtilisateurClient<runtime.Types.Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UtilisateurCountArgs>(args?: Prisma.Subset<T, UtilisateurCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UtilisateurCountAggregateOutputType> : number>;
    aggregate<T extends UtilisateurAggregateArgs>(args: Prisma.Subset<T, UtilisateurAggregateArgs>): Prisma.PrismaPromise<GetUtilisateurAggregateType<T>>;
    groupBy<T extends UtilisateurGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UtilisateurGroupByArgs['orderBy'];
    } : {
        orderBy?: UtilisateurGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UtilisateurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUtilisateurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UtilisateurFieldRefs;
}
export interface Prisma__UtilisateurClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    missions<T extends Prisma.Utilisateur$missionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Utilisateur$missionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrdreMissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UtilisateurFieldRefs {
    readonly id: Prisma.FieldRef<"Utilisateur", 'Int'>;
    readonly email: Prisma.FieldRef<"Utilisateur", 'String'>;
    readonly passwordHash: Prisma.FieldRef<"Utilisateur", 'String'>;
    readonly nom: Prisma.FieldRef<"Utilisateur", 'String'>;
    readonly prenom: Prisma.FieldRef<"Utilisateur", 'String'>;
    readonly role: Prisma.FieldRef<"Utilisateur", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Utilisateur", 'DateTime'>;
}
export type UtilisateurFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UtilisateurSelect<ExtArgs> | null;
    omit?: Prisma.UtilisateurOmit<ExtArgs> | null;
    include?: Prisma.UtilisateurInclude<ExtArgs> | null;
    where: Prisma.UtilisateurWhereUniqueInput;
};
export type UtilisateurFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UtilisateurSelect<ExtArgs> | null;
    omit?: Prisma.UtilisateurOmit<ExtArgs> | null;
    include?: Prisma.UtilisateurInclude<ExtArgs> | null;
    where: Prisma.UtilisateurWhereUniqueInput;
};
export type UtilisateurFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UtilisateurSelect<ExtArgs> | null;
    omit?: Prisma.UtilisateurOmit<ExtArgs> | null;
    include?: Prisma.UtilisateurInclude<ExtArgs> | null;
    where?: Prisma.UtilisateurWhereInput;
    orderBy?: Prisma.UtilisateurOrderByWithRelationInput | Prisma.UtilisateurOrderByWithRelationInput[];
    cursor?: Prisma.UtilisateurWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UtilisateurScalarFieldEnum | Prisma.UtilisateurScalarFieldEnum[];
};
export type UtilisateurFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UtilisateurSelect<ExtArgs> | null;
    omit?: Prisma.UtilisateurOmit<ExtArgs> | null;
    include?: Prisma.UtilisateurInclude<ExtArgs> | null;
    where?: Prisma.UtilisateurWhereInput;
    orderBy?: Prisma.UtilisateurOrderByWithRelationInput | Prisma.UtilisateurOrderByWithRelationInput[];
    cursor?: Prisma.UtilisateurWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UtilisateurScalarFieldEnum | Prisma.UtilisateurScalarFieldEnum[];
};
export type UtilisateurFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UtilisateurSelect<ExtArgs> | null;
    omit?: Prisma.UtilisateurOmit<ExtArgs> | null;
    include?: Prisma.UtilisateurInclude<ExtArgs> | null;
    where?: Prisma.UtilisateurWhereInput;
    orderBy?: Prisma.UtilisateurOrderByWithRelationInput | Prisma.UtilisateurOrderByWithRelationInput[];
    cursor?: Prisma.UtilisateurWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UtilisateurScalarFieldEnum | Prisma.UtilisateurScalarFieldEnum[];
};
export type UtilisateurCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UtilisateurSelect<ExtArgs> | null;
    omit?: Prisma.UtilisateurOmit<ExtArgs> | null;
    include?: Prisma.UtilisateurInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UtilisateurCreateInput, Prisma.UtilisateurUncheckedCreateInput>;
};
export type UtilisateurCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UtilisateurCreateManyInput | Prisma.UtilisateurCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UtilisateurCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UtilisateurSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UtilisateurOmit<ExtArgs> | null;
    data: Prisma.UtilisateurCreateManyInput | Prisma.UtilisateurCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UtilisateurUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UtilisateurSelect<ExtArgs> | null;
    omit?: Prisma.UtilisateurOmit<ExtArgs> | null;
    include?: Prisma.UtilisateurInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UtilisateurUpdateInput, Prisma.UtilisateurUncheckedUpdateInput>;
    where: Prisma.UtilisateurWhereUniqueInput;
};
export type UtilisateurUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UtilisateurUpdateManyMutationInput, Prisma.UtilisateurUncheckedUpdateManyInput>;
    where?: Prisma.UtilisateurWhereInput;
    limit?: number;
};
export type UtilisateurUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UtilisateurSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UtilisateurOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UtilisateurUpdateManyMutationInput, Prisma.UtilisateurUncheckedUpdateManyInput>;
    where?: Prisma.UtilisateurWhereInput;
    limit?: number;
};
export type UtilisateurUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UtilisateurSelect<ExtArgs> | null;
    omit?: Prisma.UtilisateurOmit<ExtArgs> | null;
    include?: Prisma.UtilisateurInclude<ExtArgs> | null;
    where: Prisma.UtilisateurWhereUniqueInput;
    create: Prisma.XOR<Prisma.UtilisateurCreateInput, Prisma.UtilisateurUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UtilisateurUpdateInput, Prisma.UtilisateurUncheckedUpdateInput>;
};
export type UtilisateurDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UtilisateurSelect<ExtArgs> | null;
    omit?: Prisma.UtilisateurOmit<ExtArgs> | null;
    include?: Prisma.UtilisateurInclude<ExtArgs> | null;
    where: Prisma.UtilisateurWhereUniqueInput;
};
export type UtilisateurDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UtilisateurWhereInput;
    limit?: number;
};
export type Utilisateur$missionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.OrdreMissionSelect<ExtArgs> | null;
    omit?: Prisma.OrdreMissionOmit<ExtArgs> | null;
    include?: Prisma.OrdreMissionInclude<ExtArgs> | null;
    where?: Prisma.OrdreMissionWhereInput;
    orderBy?: Prisma.OrdreMissionOrderByWithRelationInput | Prisma.OrdreMissionOrderByWithRelationInput[];
    cursor?: Prisma.OrdreMissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OrdreMissionScalarFieldEnum | Prisma.OrdreMissionScalarFieldEnum[];
};
export type UtilisateurDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UtilisateurSelect<ExtArgs> | null;
    omit?: Prisma.UtilisateurOmit<ExtArgs> | null;
    include?: Prisma.UtilisateurInclude<ExtArgs> | null;
};
