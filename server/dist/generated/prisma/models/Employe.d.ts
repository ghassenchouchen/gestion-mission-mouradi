import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type EmployeModel = runtime.Types.Result.DefaultSelection<Prisma.$EmployePayload>;
export type AggregateEmploye = {
    _count: EmployeCountAggregateOutputType | null;
    _avg: EmployeAvgAggregateOutputType | null;
    _sum: EmployeSumAggregateOutputType | null;
    _min: EmployeMinAggregateOutputType | null;
    _max: EmployeMaxAggregateOutputType | null;
};
export type EmployeAvgAggregateOutputType = {
    id: number | null;
};
export type EmployeSumAggregateOutputType = {
    id: number | null;
};
export type EmployeMinAggregateOutputType = {
    id: number | null;
    mle: string | null;
    nom: string | null;
    prenom: string | null;
    fonction: string | null;
    hotelAffectation: string | null;
    actif: boolean | null;
};
export type EmployeMaxAggregateOutputType = {
    id: number | null;
    mle: string | null;
    nom: string | null;
    prenom: string | null;
    fonction: string | null;
    hotelAffectation: string | null;
    actif: boolean | null;
};
export type EmployeCountAggregateOutputType = {
    id: number;
    mle: number;
    nom: number;
    prenom: number;
    fonction: number;
    hotelAffectation: number;
    actif: number;
    _all: number;
};
export type EmployeAvgAggregateInputType = {
    id?: true;
};
export type EmployeSumAggregateInputType = {
    id?: true;
};
export type EmployeMinAggregateInputType = {
    id?: true;
    mle?: true;
    nom?: true;
    prenom?: true;
    fonction?: true;
    hotelAffectation?: true;
    actif?: true;
};
export type EmployeMaxAggregateInputType = {
    id?: true;
    mle?: true;
    nom?: true;
    prenom?: true;
    fonction?: true;
    hotelAffectation?: true;
    actif?: true;
};
export type EmployeCountAggregateInputType = {
    id?: true;
    mle?: true;
    nom?: true;
    prenom?: true;
    fonction?: true;
    hotelAffectation?: true;
    actif?: true;
    _all?: true;
};
export type EmployeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployeWhereInput;
    orderBy?: Prisma.EmployeOrderByWithRelationInput | Prisma.EmployeOrderByWithRelationInput[];
    cursor?: Prisma.EmployeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EmployeCountAggregateInputType;
    _avg?: EmployeAvgAggregateInputType;
    _sum?: EmployeSumAggregateInputType;
    _min?: EmployeMinAggregateInputType;
    _max?: EmployeMaxAggregateInputType;
};
export type GetEmployeAggregateType<T extends EmployeAggregateArgs> = {
    [P in keyof T & keyof AggregateEmploye]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEmploye[P]> : Prisma.GetScalarType<T[P], AggregateEmploye[P]>;
};
export type EmployeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployeWhereInput;
    orderBy?: Prisma.EmployeOrderByWithAggregationInput | Prisma.EmployeOrderByWithAggregationInput[];
    by: Prisma.EmployeScalarFieldEnum[] | Prisma.EmployeScalarFieldEnum;
    having?: Prisma.EmployeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EmployeCountAggregateInputType | true;
    _avg?: EmployeAvgAggregateInputType;
    _sum?: EmployeSumAggregateInputType;
    _min?: EmployeMinAggregateInputType;
    _max?: EmployeMaxAggregateInputType;
};
export type EmployeGroupByOutputType = {
    id: number;
    mle: string;
    nom: string;
    prenom: string;
    fonction: string;
    hotelAffectation: string;
    actif: boolean;
    _count: EmployeCountAggregateOutputType | null;
    _avg: EmployeAvgAggregateOutputType | null;
    _sum: EmployeSumAggregateOutputType | null;
    _min: EmployeMinAggregateOutputType | null;
    _max: EmployeMaxAggregateOutputType | null;
};
export type GetEmployeGroupByPayload<T extends EmployeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EmployeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EmployeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EmployeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EmployeGroupByOutputType[P]>;
}>>;
export type EmployeWhereInput = {
    AND?: Prisma.EmployeWhereInput | Prisma.EmployeWhereInput[];
    OR?: Prisma.EmployeWhereInput[];
    NOT?: Prisma.EmployeWhereInput | Prisma.EmployeWhereInput[];
    id?: Prisma.IntFilter<"Employe"> | number;
    mle?: Prisma.StringFilter<"Employe"> | string;
    nom?: Prisma.StringFilter<"Employe"> | string;
    prenom?: Prisma.StringFilter<"Employe"> | string;
    fonction?: Prisma.StringFilter<"Employe"> | string;
    hotelAffectation?: Prisma.StringFilter<"Employe"> | string;
    actif?: Prisma.BoolFilter<"Employe"> | boolean;
    missions?: Prisma.OrdreMissionListRelationFilter;
    accompagnements?: Prisma.AccompagnateurListRelationFilter;
};
export type EmployeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    mle?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    fonction?: Prisma.SortOrder;
    hotelAffectation?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    missions?: Prisma.OrdreMissionOrderByRelationAggregateInput;
    accompagnements?: Prisma.AccompagnateurOrderByRelationAggregateInput;
};
export type EmployeWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    mle?: string;
    AND?: Prisma.EmployeWhereInput | Prisma.EmployeWhereInput[];
    OR?: Prisma.EmployeWhereInput[];
    NOT?: Prisma.EmployeWhereInput | Prisma.EmployeWhereInput[];
    nom?: Prisma.StringFilter<"Employe"> | string;
    prenom?: Prisma.StringFilter<"Employe"> | string;
    fonction?: Prisma.StringFilter<"Employe"> | string;
    hotelAffectation?: Prisma.StringFilter<"Employe"> | string;
    actif?: Prisma.BoolFilter<"Employe"> | boolean;
    missions?: Prisma.OrdreMissionListRelationFilter;
    accompagnements?: Prisma.AccompagnateurListRelationFilter;
}, "id" | "mle">;
export type EmployeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    mle?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    fonction?: Prisma.SortOrder;
    hotelAffectation?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    _count?: Prisma.EmployeCountOrderByAggregateInput;
    _avg?: Prisma.EmployeAvgOrderByAggregateInput;
    _max?: Prisma.EmployeMaxOrderByAggregateInput;
    _min?: Prisma.EmployeMinOrderByAggregateInput;
    _sum?: Prisma.EmployeSumOrderByAggregateInput;
};
export type EmployeScalarWhereWithAggregatesInput = {
    AND?: Prisma.EmployeScalarWhereWithAggregatesInput | Prisma.EmployeScalarWhereWithAggregatesInput[];
    OR?: Prisma.EmployeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EmployeScalarWhereWithAggregatesInput | Prisma.EmployeScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Employe"> | number;
    mle?: Prisma.StringWithAggregatesFilter<"Employe"> | string;
    nom?: Prisma.StringWithAggregatesFilter<"Employe"> | string;
    prenom?: Prisma.StringWithAggregatesFilter<"Employe"> | string;
    fonction?: Prisma.StringWithAggregatesFilter<"Employe"> | string;
    hotelAffectation?: Prisma.StringWithAggregatesFilter<"Employe"> | string;
    actif?: Prisma.BoolWithAggregatesFilter<"Employe"> | boolean;
};
export type EmployeCreateInput = {
    mle: string;
    nom: string;
    prenom: string;
    fonction: string;
    hotelAffectation: string;
    actif?: boolean;
    missions?: Prisma.OrdreMissionCreateNestedManyWithoutEmployeInput;
    accompagnements?: Prisma.AccompagnateurCreateNestedManyWithoutEmployeInput;
};
export type EmployeUncheckedCreateInput = {
    id?: number;
    mle: string;
    nom: string;
    prenom: string;
    fonction: string;
    hotelAffectation: string;
    actif?: boolean;
    missions?: Prisma.OrdreMissionUncheckedCreateNestedManyWithoutEmployeInput;
    accompagnements?: Prisma.AccompagnateurUncheckedCreateNestedManyWithoutEmployeInput;
};
export type EmployeUpdateInput = {
    mle?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    fonction?: Prisma.StringFieldUpdateOperationsInput | string;
    hotelAffectation?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    missions?: Prisma.OrdreMissionUpdateManyWithoutEmployeNestedInput;
    accompagnements?: Prisma.AccompagnateurUpdateManyWithoutEmployeNestedInput;
};
export type EmployeUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    mle?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    fonction?: Prisma.StringFieldUpdateOperationsInput | string;
    hotelAffectation?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    missions?: Prisma.OrdreMissionUncheckedUpdateManyWithoutEmployeNestedInput;
    accompagnements?: Prisma.AccompagnateurUncheckedUpdateManyWithoutEmployeNestedInput;
};
export type EmployeCreateManyInput = {
    id?: number;
    mle: string;
    nom: string;
    prenom: string;
    fonction: string;
    hotelAffectation: string;
    actif?: boolean;
};
export type EmployeUpdateManyMutationInput = {
    mle?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    fonction?: Prisma.StringFieldUpdateOperationsInput | string;
    hotelAffectation?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type EmployeUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    mle?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    fonction?: Prisma.StringFieldUpdateOperationsInput | string;
    hotelAffectation?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type EmployeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    mle?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    fonction?: Prisma.SortOrder;
    hotelAffectation?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
};
export type EmployeAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type EmployeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    mle?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    fonction?: Prisma.SortOrder;
    hotelAffectation?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
};
export type EmployeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    mle?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    fonction?: Prisma.SortOrder;
    hotelAffectation?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
};
export type EmployeSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type EmployeScalarRelationFilter = {
    is?: Prisma.EmployeWhereInput;
    isNot?: Prisma.EmployeWhereInput;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type EmployeCreateNestedOneWithoutMissionsInput = {
    create?: Prisma.XOR<Prisma.EmployeCreateWithoutMissionsInput, Prisma.EmployeUncheckedCreateWithoutMissionsInput>;
    connectOrCreate?: Prisma.EmployeCreateOrConnectWithoutMissionsInput;
    connect?: Prisma.EmployeWhereUniqueInput;
};
export type EmployeUpdateOneRequiredWithoutMissionsNestedInput = {
    create?: Prisma.XOR<Prisma.EmployeCreateWithoutMissionsInput, Prisma.EmployeUncheckedCreateWithoutMissionsInput>;
    connectOrCreate?: Prisma.EmployeCreateOrConnectWithoutMissionsInput;
    upsert?: Prisma.EmployeUpsertWithoutMissionsInput;
    connect?: Prisma.EmployeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EmployeUpdateToOneWithWhereWithoutMissionsInput, Prisma.EmployeUpdateWithoutMissionsInput>, Prisma.EmployeUncheckedUpdateWithoutMissionsInput>;
};
export type EmployeCreateNestedOneWithoutAccompagnementsInput = {
    create?: Prisma.XOR<Prisma.EmployeCreateWithoutAccompagnementsInput, Prisma.EmployeUncheckedCreateWithoutAccompagnementsInput>;
    connectOrCreate?: Prisma.EmployeCreateOrConnectWithoutAccompagnementsInput;
    connect?: Prisma.EmployeWhereUniqueInput;
};
export type EmployeUpdateOneRequiredWithoutAccompagnementsNestedInput = {
    create?: Prisma.XOR<Prisma.EmployeCreateWithoutAccompagnementsInput, Prisma.EmployeUncheckedCreateWithoutAccompagnementsInput>;
    connectOrCreate?: Prisma.EmployeCreateOrConnectWithoutAccompagnementsInput;
    upsert?: Prisma.EmployeUpsertWithoutAccompagnementsInput;
    connect?: Prisma.EmployeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EmployeUpdateToOneWithWhereWithoutAccompagnementsInput, Prisma.EmployeUpdateWithoutAccompagnementsInput>, Prisma.EmployeUncheckedUpdateWithoutAccompagnementsInput>;
};
export type EmployeCreateWithoutMissionsInput = {
    mle: string;
    nom: string;
    prenom: string;
    fonction: string;
    hotelAffectation: string;
    actif?: boolean;
    accompagnements?: Prisma.AccompagnateurCreateNestedManyWithoutEmployeInput;
};
export type EmployeUncheckedCreateWithoutMissionsInput = {
    id?: number;
    mle: string;
    nom: string;
    prenom: string;
    fonction: string;
    hotelAffectation: string;
    actif?: boolean;
    accompagnements?: Prisma.AccompagnateurUncheckedCreateNestedManyWithoutEmployeInput;
};
export type EmployeCreateOrConnectWithoutMissionsInput = {
    where: Prisma.EmployeWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmployeCreateWithoutMissionsInput, Prisma.EmployeUncheckedCreateWithoutMissionsInput>;
};
export type EmployeUpsertWithoutMissionsInput = {
    update: Prisma.XOR<Prisma.EmployeUpdateWithoutMissionsInput, Prisma.EmployeUncheckedUpdateWithoutMissionsInput>;
    create: Prisma.XOR<Prisma.EmployeCreateWithoutMissionsInput, Prisma.EmployeUncheckedCreateWithoutMissionsInput>;
    where?: Prisma.EmployeWhereInput;
};
export type EmployeUpdateToOneWithWhereWithoutMissionsInput = {
    where?: Prisma.EmployeWhereInput;
    data: Prisma.XOR<Prisma.EmployeUpdateWithoutMissionsInput, Prisma.EmployeUncheckedUpdateWithoutMissionsInput>;
};
export type EmployeUpdateWithoutMissionsInput = {
    mle?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    fonction?: Prisma.StringFieldUpdateOperationsInput | string;
    hotelAffectation?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    accompagnements?: Prisma.AccompagnateurUpdateManyWithoutEmployeNestedInput;
};
export type EmployeUncheckedUpdateWithoutMissionsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    mle?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    fonction?: Prisma.StringFieldUpdateOperationsInput | string;
    hotelAffectation?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    accompagnements?: Prisma.AccompagnateurUncheckedUpdateManyWithoutEmployeNestedInput;
};
export type EmployeCreateWithoutAccompagnementsInput = {
    mle: string;
    nom: string;
    prenom: string;
    fonction: string;
    hotelAffectation: string;
    actif?: boolean;
    missions?: Prisma.OrdreMissionCreateNestedManyWithoutEmployeInput;
};
export type EmployeUncheckedCreateWithoutAccompagnementsInput = {
    id?: number;
    mle: string;
    nom: string;
    prenom: string;
    fonction: string;
    hotelAffectation: string;
    actif?: boolean;
    missions?: Prisma.OrdreMissionUncheckedCreateNestedManyWithoutEmployeInput;
};
export type EmployeCreateOrConnectWithoutAccompagnementsInput = {
    where: Prisma.EmployeWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmployeCreateWithoutAccompagnementsInput, Prisma.EmployeUncheckedCreateWithoutAccompagnementsInput>;
};
export type EmployeUpsertWithoutAccompagnementsInput = {
    update: Prisma.XOR<Prisma.EmployeUpdateWithoutAccompagnementsInput, Prisma.EmployeUncheckedUpdateWithoutAccompagnementsInput>;
    create: Prisma.XOR<Prisma.EmployeCreateWithoutAccompagnementsInput, Prisma.EmployeUncheckedCreateWithoutAccompagnementsInput>;
    where?: Prisma.EmployeWhereInput;
};
export type EmployeUpdateToOneWithWhereWithoutAccompagnementsInput = {
    where?: Prisma.EmployeWhereInput;
    data: Prisma.XOR<Prisma.EmployeUpdateWithoutAccompagnementsInput, Prisma.EmployeUncheckedUpdateWithoutAccompagnementsInput>;
};
export type EmployeUpdateWithoutAccompagnementsInput = {
    mle?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    fonction?: Prisma.StringFieldUpdateOperationsInput | string;
    hotelAffectation?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    missions?: Prisma.OrdreMissionUpdateManyWithoutEmployeNestedInput;
};
export type EmployeUncheckedUpdateWithoutAccompagnementsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    mle?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    fonction?: Prisma.StringFieldUpdateOperationsInput | string;
    hotelAffectation?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    missions?: Prisma.OrdreMissionUncheckedUpdateManyWithoutEmployeNestedInput;
};
export type EmployeCountOutputType = {
    missions: number;
    accompagnements: number;
};
export type EmployeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    missions?: boolean | EmployeCountOutputTypeCountMissionsArgs;
    accompagnements?: boolean | EmployeCountOutputTypeCountAccompagnementsArgs;
};
export type EmployeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeCountOutputTypeSelect<ExtArgs> | null;
};
export type EmployeCountOutputTypeCountMissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrdreMissionWhereInput;
};
export type EmployeCountOutputTypeCountAccompagnementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AccompagnateurWhereInput;
};
export type EmployeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    mle?: boolean;
    nom?: boolean;
    prenom?: boolean;
    fonction?: boolean;
    hotelAffectation?: boolean;
    actif?: boolean;
    missions?: boolean | Prisma.Employe$missionsArgs<ExtArgs>;
    accompagnements?: boolean | Prisma.Employe$accompagnementsArgs<ExtArgs>;
    _count?: boolean | Prisma.EmployeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["employe"]>;
export type EmployeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    mle?: boolean;
    nom?: boolean;
    prenom?: boolean;
    fonction?: boolean;
    hotelAffectation?: boolean;
    actif?: boolean;
}, ExtArgs["result"]["employe"]>;
export type EmployeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    mle?: boolean;
    nom?: boolean;
    prenom?: boolean;
    fonction?: boolean;
    hotelAffectation?: boolean;
    actif?: boolean;
}, ExtArgs["result"]["employe"]>;
export type EmployeSelectScalar = {
    id?: boolean;
    mle?: boolean;
    nom?: boolean;
    prenom?: boolean;
    fonction?: boolean;
    hotelAffectation?: boolean;
    actif?: boolean;
};
export type EmployeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "mle" | "nom" | "prenom" | "fonction" | "hotelAffectation" | "actif", ExtArgs["result"]["employe"]>;
export type EmployeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    missions?: boolean | Prisma.Employe$missionsArgs<ExtArgs>;
    accompagnements?: boolean | Prisma.Employe$accompagnementsArgs<ExtArgs>;
    _count?: boolean | Prisma.EmployeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type EmployeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type EmployeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $EmployePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Employe";
    objects: {
        missions: Prisma.$OrdreMissionPayload<ExtArgs>[];
        accompagnements: Prisma.$AccompagnateurPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        mle: string;
        nom: string;
        prenom: string;
        fonction: string;
        hotelAffectation: string;
        actif: boolean;
    }, ExtArgs["result"]["employe"]>;
    composites: {};
};
export type EmployeGetPayload<S extends boolean | null | undefined | EmployeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EmployePayload, S>;
export type EmployeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EmployeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EmployeCountAggregateInputType | true;
};
export interface EmployeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Employe'];
        meta: {
            name: 'Employe';
        };
    };
    findUnique<T extends EmployeFindUniqueArgs>(args: Prisma.SelectSubset<T, EmployeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EmployeClient<runtime.Types.Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EmployeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EmployeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EmployeClient<runtime.Types.Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EmployeFindFirstArgs>(args?: Prisma.SelectSubset<T, EmployeFindFirstArgs<ExtArgs>>): Prisma.Prisma__EmployeClient<runtime.Types.Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EmployeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EmployeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EmployeClient<runtime.Types.Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EmployeFindManyArgs>(args?: Prisma.SelectSubset<T, EmployeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EmployeCreateArgs>(args: Prisma.SelectSubset<T, EmployeCreateArgs<ExtArgs>>): Prisma.Prisma__EmployeClient<runtime.Types.Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EmployeCreateManyArgs>(args?: Prisma.SelectSubset<T, EmployeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EmployeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EmployeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EmployeDeleteArgs>(args: Prisma.SelectSubset<T, EmployeDeleteArgs<ExtArgs>>): Prisma.Prisma__EmployeClient<runtime.Types.Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EmployeUpdateArgs>(args: Prisma.SelectSubset<T, EmployeUpdateArgs<ExtArgs>>): Prisma.Prisma__EmployeClient<runtime.Types.Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EmployeDeleteManyArgs>(args?: Prisma.SelectSubset<T, EmployeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EmployeUpdateManyArgs>(args: Prisma.SelectSubset<T, EmployeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EmployeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EmployeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EmployeUpsertArgs>(args: Prisma.SelectSubset<T, EmployeUpsertArgs<ExtArgs>>): Prisma.Prisma__EmployeClient<runtime.Types.Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EmployeCountArgs>(args?: Prisma.Subset<T, EmployeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EmployeCountAggregateOutputType> : number>;
    aggregate<T extends EmployeAggregateArgs>(args: Prisma.Subset<T, EmployeAggregateArgs>): Prisma.PrismaPromise<GetEmployeAggregateType<T>>;
    groupBy<T extends EmployeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EmployeGroupByArgs['orderBy'];
    } : {
        orderBy?: EmployeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EmployeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EmployeFieldRefs;
}
export interface Prisma__EmployeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    missions<T extends Prisma.Employe$missionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Employe$missionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrdreMissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    accompagnements<T extends Prisma.Employe$accompagnementsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Employe$accompagnementsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AccompagnateurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EmployeFieldRefs {
    readonly id: Prisma.FieldRef<"Employe", 'Int'>;
    readonly mle: Prisma.FieldRef<"Employe", 'String'>;
    readonly nom: Prisma.FieldRef<"Employe", 'String'>;
    readonly prenom: Prisma.FieldRef<"Employe", 'String'>;
    readonly fonction: Prisma.FieldRef<"Employe", 'String'>;
    readonly hotelAffectation: Prisma.FieldRef<"Employe", 'String'>;
    readonly actif: Prisma.FieldRef<"Employe", 'Boolean'>;
}
export type EmployeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeOmit<ExtArgs> | null;
    include?: Prisma.EmployeInclude<ExtArgs> | null;
    where: Prisma.EmployeWhereUniqueInput;
};
export type EmployeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeOmit<ExtArgs> | null;
    include?: Prisma.EmployeInclude<ExtArgs> | null;
    where: Prisma.EmployeWhereUniqueInput;
};
export type EmployeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeOmit<ExtArgs> | null;
    include?: Prisma.EmployeInclude<ExtArgs> | null;
    where?: Prisma.EmployeWhereInput;
    orderBy?: Prisma.EmployeOrderByWithRelationInput | Prisma.EmployeOrderByWithRelationInput[];
    cursor?: Prisma.EmployeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmployeScalarFieldEnum | Prisma.EmployeScalarFieldEnum[];
};
export type EmployeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeOmit<ExtArgs> | null;
    include?: Prisma.EmployeInclude<ExtArgs> | null;
    where?: Prisma.EmployeWhereInput;
    orderBy?: Prisma.EmployeOrderByWithRelationInput | Prisma.EmployeOrderByWithRelationInput[];
    cursor?: Prisma.EmployeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmployeScalarFieldEnum | Prisma.EmployeScalarFieldEnum[];
};
export type EmployeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeOmit<ExtArgs> | null;
    include?: Prisma.EmployeInclude<ExtArgs> | null;
    where?: Prisma.EmployeWhereInput;
    orderBy?: Prisma.EmployeOrderByWithRelationInput | Prisma.EmployeOrderByWithRelationInput[];
    cursor?: Prisma.EmployeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmployeScalarFieldEnum | Prisma.EmployeScalarFieldEnum[];
};
export type EmployeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeOmit<ExtArgs> | null;
    include?: Prisma.EmployeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmployeCreateInput, Prisma.EmployeUncheckedCreateInput>;
};
export type EmployeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EmployeCreateManyInput | Prisma.EmployeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EmployeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EmployeOmit<ExtArgs> | null;
    data: Prisma.EmployeCreateManyInput | Prisma.EmployeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EmployeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeOmit<ExtArgs> | null;
    include?: Prisma.EmployeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmployeUpdateInput, Prisma.EmployeUncheckedUpdateInput>;
    where: Prisma.EmployeWhereUniqueInput;
};
export type EmployeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EmployeUpdateManyMutationInput, Prisma.EmployeUncheckedUpdateManyInput>;
    where?: Prisma.EmployeWhereInput;
    limit?: number;
};
export type EmployeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EmployeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EmployeUpdateManyMutationInput, Prisma.EmployeUncheckedUpdateManyInput>;
    where?: Prisma.EmployeWhereInput;
    limit?: number;
};
export type EmployeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeOmit<ExtArgs> | null;
    include?: Prisma.EmployeInclude<ExtArgs> | null;
    where: Prisma.EmployeWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmployeCreateInput, Prisma.EmployeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EmployeUpdateInput, Prisma.EmployeUncheckedUpdateInput>;
};
export type EmployeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeOmit<ExtArgs> | null;
    include?: Prisma.EmployeInclude<ExtArgs> | null;
    where: Prisma.EmployeWhereUniqueInput;
};
export type EmployeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmployeWhereInput;
    limit?: number;
};
export type Employe$missionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Employe$accompagnementsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccompagnateurSelect<ExtArgs> | null;
    omit?: Prisma.AccompagnateurOmit<ExtArgs> | null;
    include?: Prisma.AccompagnateurInclude<ExtArgs> | null;
    where?: Prisma.AccompagnateurWhereInput;
    orderBy?: Prisma.AccompagnateurOrderByWithRelationInput | Prisma.AccompagnateurOrderByWithRelationInput[];
    cursor?: Prisma.AccompagnateurWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AccompagnateurScalarFieldEnum | Prisma.AccompagnateurScalarFieldEnum[];
};
export type EmployeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EmployeSelect<ExtArgs> | null;
    omit?: Prisma.EmployeOmit<ExtArgs> | null;
    include?: Prisma.EmployeInclude<ExtArgs> | null;
};
