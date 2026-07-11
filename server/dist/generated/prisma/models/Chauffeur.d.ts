import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ChauffeurModel = runtime.Types.Result.DefaultSelection<Prisma.$ChauffeurPayload>;
export type AggregateChauffeur = {
    _count: ChauffeurCountAggregateOutputType | null;
    _avg: ChauffeurAvgAggregateOutputType | null;
    _sum: ChauffeurSumAggregateOutputType | null;
    _min: ChauffeurMinAggregateOutputType | null;
    _max: ChauffeurMaxAggregateOutputType | null;
};
export type ChauffeurAvgAggregateOutputType = {
    id: number | null;
};
export type ChauffeurSumAggregateOutputType = {
    id: number | null;
};
export type ChauffeurMinAggregateOutputType = {
    id: number | null;
    mle: string | null;
    nom: string | null;
    prenom: string | null;
    telephone: string | null;
    disponible: boolean | null;
};
export type ChauffeurMaxAggregateOutputType = {
    id: number | null;
    mle: string | null;
    nom: string | null;
    prenom: string | null;
    telephone: string | null;
    disponible: boolean | null;
};
export type ChauffeurCountAggregateOutputType = {
    id: number;
    mle: number;
    nom: number;
    prenom: number;
    telephone: number;
    disponible: number;
    _all: number;
};
export type ChauffeurAvgAggregateInputType = {
    id?: true;
};
export type ChauffeurSumAggregateInputType = {
    id?: true;
};
export type ChauffeurMinAggregateInputType = {
    id?: true;
    mle?: true;
    nom?: true;
    prenom?: true;
    telephone?: true;
    disponible?: true;
};
export type ChauffeurMaxAggregateInputType = {
    id?: true;
    mle?: true;
    nom?: true;
    prenom?: true;
    telephone?: true;
    disponible?: true;
};
export type ChauffeurCountAggregateInputType = {
    id?: true;
    mle?: true;
    nom?: true;
    prenom?: true;
    telephone?: true;
    disponible?: true;
    _all?: true;
};
export type ChauffeurAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChauffeurWhereInput;
    orderBy?: Prisma.ChauffeurOrderByWithRelationInput | Prisma.ChauffeurOrderByWithRelationInput[];
    cursor?: Prisma.ChauffeurWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ChauffeurCountAggregateInputType;
    _avg?: ChauffeurAvgAggregateInputType;
    _sum?: ChauffeurSumAggregateInputType;
    _min?: ChauffeurMinAggregateInputType;
    _max?: ChauffeurMaxAggregateInputType;
};
export type GetChauffeurAggregateType<T extends ChauffeurAggregateArgs> = {
    [P in keyof T & keyof AggregateChauffeur]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateChauffeur[P]> : Prisma.GetScalarType<T[P], AggregateChauffeur[P]>;
};
export type ChauffeurGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChauffeurWhereInput;
    orderBy?: Prisma.ChauffeurOrderByWithAggregationInput | Prisma.ChauffeurOrderByWithAggregationInput[];
    by: Prisma.ChauffeurScalarFieldEnum[] | Prisma.ChauffeurScalarFieldEnum;
    having?: Prisma.ChauffeurScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ChauffeurCountAggregateInputType | true;
    _avg?: ChauffeurAvgAggregateInputType;
    _sum?: ChauffeurSumAggregateInputType;
    _min?: ChauffeurMinAggregateInputType;
    _max?: ChauffeurMaxAggregateInputType;
};
export type ChauffeurGroupByOutputType = {
    id: number;
    mle: string;
    nom: string;
    prenom: string;
    telephone: string | null;
    disponible: boolean;
    _count: ChauffeurCountAggregateOutputType | null;
    _avg: ChauffeurAvgAggregateOutputType | null;
    _sum: ChauffeurSumAggregateOutputType | null;
    _min: ChauffeurMinAggregateOutputType | null;
    _max: ChauffeurMaxAggregateOutputType | null;
};
export type GetChauffeurGroupByPayload<T extends ChauffeurGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ChauffeurGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ChauffeurGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ChauffeurGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ChauffeurGroupByOutputType[P]>;
}>>;
export type ChauffeurWhereInput = {
    AND?: Prisma.ChauffeurWhereInput | Prisma.ChauffeurWhereInput[];
    OR?: Prisma.ChauffeurWhereInput[];
    NOT?: Prisma.ChauffeurWhereInput | Prisma.ChauffeurWhereInput[];
    id?: Prisma.IntFilter<"Chauffeur"> | number;
    mle?: Prisma.StringFilter<"Chauffeur"> | string;
    nom?: Prisma.StringFilter<"Chauffeur"> | string;
    prenom?: Prisma.StringFilter<"Chauffeur"> | string;
    telephone?: Prisma.StringNullableFilter<"Chauffeur"> | string | null;
    disponible?: Prisma.BoolFilter<"Chauffeur"> | boolean;
    missions?: Prisma.OrdreMissionListRelationFilter;
};
export type ChauffeurOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    mle?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    telephone?: Prisma.SortOrderInput | Prisma.SortOrder;
    disponible?: Prisma.SortOrder;
    missions?: Prisma.OrdreMissionOrderByRelationAggregateInput;
};
export type ChauffeurWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    mle?: string;
    AND?: Prisma.ChauffeurWhereInput | Prisma.ChauffeurWhereInput[];
    OR?: Prisma.ChauffeurWhereInput[];
    NOT?: Prisma.ChauffeurWhereInput | Prisma.ChauffeurWhereInput[];
    nom?: Prisma.StringFilter<"Chauffeur"> | string;
    prenom?: Prisma.StringFilter<"Chauffeur"> | string;
    telephone?: Prisma.StringNullableFilter<"Chauffeur"> | string | null;
    disponible?: Prisma.BoolFilter<"Chauffeur"> | boolean;
    missions?: Prisma.OrdreMissionListRelationFilter;
}, "id" | "mle">;
export type ChauffeurOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    mle?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    telephone?: Prisma.SortOrderInput | Prisma.SortOrder;
    disponible?: Prisma.SortOrder;
    _count?: Prisma.ChauffeurCountOrderByAggregateInput;
    _avg?: Prisma.ChauffeurAvgOrderByAggregateInput;
    _max?: Prisma.ChauffeurMaxOrderByAggregateInput;
    _min?: Prisma.ChauffeurMinOrderByAggregateInput;
    _sum?: Prisma.ChauffeurSumOrderByAggregateInput;
};
export type ChauffeurScalarWhereWithAggregatesInput = {
    AND?: Prisma.ChauffeurScalarWhereWithAggregatesInput | Prisma.ChauffeurScalarWhereWithAggregatesInput[];
    OR?: Prisma.ChauffeurScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ChauffeurScalarWhereWithAggregatesInput | Prisma.ChauffeurScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Chauffeur"> | number;
    mle?: Prisma.StringWithAggregatesFilter<"Chauffeur"> | string;
    nom?: Prisma.StringWithAggregatesFilter<"Chauffeur"> | string;
    prenom?: Prisma.StringWithAggregatesFilter<"Chauffeur"> | string;
    telephone?: Prisma.StringNullableWithAggregatesFilter<"Chauffeur"> | string | null;
    disponible?: Prisma.BoolWithAggregatesFilter<"Chauffeur"> | boolean;
};
export type ChauffeurCreateInput = {
    mle: string;
    nom: string;
    prenom: string;
    telephone?: string | null;
    disponible?: boolean;
    missions?: Prisma.OrdreMissionCreateNestedManyWithoutChauffeurInput;
};
export type ChauffeurUncheckedCreateInput = {
    id?: number;
    mle: string;
    nom: string;
    prenom: string;
    telephone?: string | null;
    disponible?: boolean;
    missions?: Prisma.OrdreMissionUncheckedCreateNestedManyWithoutChauffeurInput;
};
export type ChauffeurUpdateInput = {
    mle?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disponible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    missions?: Prisma.OrdreMissionUpdateManyWithoutChauffeurNestedInput;
};
export type ChauffeurUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    mle?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disponible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    missions?: Prisma.OrdreMissionUncheckedUpdateManyWithoutChauffeurNestedInput;
};
export type ChauffeurCreateManyInput = {
    id?: number;
    mle: string;
    nom: string;
    prenom: string;
    telephone?: string | null;
    disponible?: boolean;
};
export type ChauffeurUpdateManyMutationInput = {
    mle?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disponible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ChauffeurUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    mle?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disponible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ChauffeurCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    mle?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    disponible?: Prisma.SortOrder;
};
export type ChauffeurAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type ChauffeurMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    mle?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    disponible?: Prisma.SortOrder;
};
export type ChauffeurMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    mle?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    prenom?: Prisma.SortOrder;
    telephone?: Prisma.SortOrder;
    disponible?: Prisma.SortOrder;
};
export type ChauffeurSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type ChauffeurScalarRelationFilter = {
    is?: Prisma.ChauffeurWhereInput;
    isNot?: Prisma.ChauffeurWhereInput;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type ChauffeurCreateNestedOneWithoutMissionsInput = {
    create?: Prisma.XOR<Prisma.ChauffeurCreateWithoutMissionsInput, Prisma.ChauffeurUncheckedCreateWithoutMissionsInput>;
    connectOrCreate?: Prisma.ChauffeurCreateOrConnectWithoutMissionsInput;
    connect?: Prisma.ChauffeurWhereUniqueInput;
};
export type ChauffeurUpdateOneRequiredWithoutMissionsNestedInput = {
    create?: Prisma.XOR<Prisma.ChauffeurCreateWithoutMissionsInput, Prisma.ChauffeurUncheckedCreateWithoutMissionsInput>;
    connectOrCreate?: Prisma.ChauffeurCreateOrConnectWithoutMissionsInput;
    upsert?: Prisma.ChauffeurUpsertWithoutMissionsInput;
    connect?: Prisma.ChauffeurWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ChauffeurUpdateToOneWithWhereWithoutMissionsInput, Prisma.ChauffeurUpdateWithoutMissionsInput>, Prisma.ChauffeurUncheckedUpdateWithoutMissionsInput>;
};
export type ChauffeurCreateWithoutMissionsInput = {
    mle: string;
    nom: string;
    prenom: string;
    telephone?: string | null;
    disponible?: boolean;
};
export type ChauffeurUncheckedCreateWithoutMissionsInput = {
    id?: number;
    mle: string;
    nom: string;
    prenom: string;
    telephone?: string | null;
    disponible?: boolean;
};
export type ChauffeurCreateOrConnectWithoutMissionsInput = {
    where: Prisma.ChauffeurWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChauffeurCreateWithoutMissionsInput, Prisma.ChauffeurUncheckedCreateWithoutMissionsInput>;
};
export type ChauffeurUpsertWithoutMissionsInput = {
    update: Prisma.XOR<Prisma.ChauffeurUpdateWithoutMissionsInput, Prisma.ChauffeurUncheckedUpdateWithoutMissionsInput>;
    create: Prisma.XOR<Prisma.ChauffeurCreateWithoutMissionsInput, Prisma.ChauffeurUncheckedCreateWithoutMissionsInput>;
    where?: Prisma.ChauffeurWhereInput;
};
export type ChauffeurUpdateToOneWithWhereWithoutMissionsInput = {
    where?: Prisma.ChauffeurWhereInput;
    data: Prisma.XOR<Prisma.ChauffeurUpdateWithoutMissionsInput, Prisma.ChauffeurUncheckedUpdateWithoutMissionsInput>;
};
export type ChauffeurUpdateWithoutMissionsInput = {
    mle?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disponible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ChauffeurUncheckedUpdateWithoutMissionsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    mle?: Prisma.StringFieldUpdateOperationsInput | string;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    prenom?: Prisma.StringFieldUpdateOperationsInput | string;
    telephone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    disponible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ChauffeurCountOutputType = {
    missions: number;
};
export type ChauffeurCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    missions?: boolean | ChauffeurCountOutputTypeCountMissionsArgs;
};
export type ChauffeurCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChauffeurCountOutputTypeSelect<ExtArgs> | null;
};
export type ChauffeurCountOutputTypeCountMissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrdreMissionWhereInput;
};
export type ChauffeurSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    mle?: boolean;
    nom?: boolean;
    prenom?: boolean;
    telephone?: boolean;
    disponible?: boolean;
    missions?: boolean | Prisma.Chauffeur$missionsArgs<ExtArgs>;
    _count?: boolean | Prisma.ChauffeurCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["chauffeur"]>;
export type ChauffeurSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    mle?: boolean;
    nom?: boolean;
    prenom?: boolean;
    telephone?: boolean;
    disponible?: boolean;
}, ExtArgs["result"]["chauffeur"]>;
export type ChauffeurSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    mle?: boolean;
    nom?: boolean;
    prenom?: boolean;
    telephone?: boolean;
    disponible?: boolean;
}, ExtArgs["result"]["chauffeur"]>;
export type ChauffeurSelectScalar = {
    id?: boolean;
    mle?: boolean;
    nom?: boolean;
    prenom?: boolean;
    telephone?: boolean;
    disponible?: boolean;
};
export type ChauffeurOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "mle" | "nom" | "prenom" | "telephone" | "disponible", ExtArgs["result"]["chauffeur"]>;
export type ChauffeurInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    missions?: boolean | Prisma.Chauffeur$missionsArgs<ExtArgs>;
    _count?: boolean | Prisma.ChauffeurCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ChauffeurIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type ChauffeurIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $ChauffeurPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Chauffeur";
    objects: {
        missions: Prisma.$OrdreMissionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        mle: string;
        nom: string;
        prenom: string;
        telephone: string | null;
        disponible: boolean;
    }, ExtArgs["result"]["chauffeur"]>;
    composites: {};
};
export type ChauffeurGetPayload<S extends boolean | null | undefined | ChauffeurDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ChauffeurPayload, S>;
export type ChauffeurCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ChauffeurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ChauffeurCountAggregateInputType | true;
};
export interface ChauffeurDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Chauffeur'];
        meta: {
            name: 'Chauffeur';
        };
    };
    findUnique<T extends ChauffeurFindUniqueArgs>(args: Prisma.SelectSubset<T, ChauffeurFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ChauffeurClient<runtime.Types.Result.GetResult<Prisma.$ChauffeurPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ChauffeurFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ChauffeurFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ChauffeurClient<runtime.Types.Result.GetResult<Prisma.$ChauffeurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ChauffeurFindFirstArgs>(args?: Prisma.SelectSubset<T, ChauffeurFindFirstArgs<ExtArgs>>): Prisma.Prisma__ChauffeurClient<runtime.Types.Result.GetResult<Prisma.$ChauffeurPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ChauffeurFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ChauffeurFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ChauffeurClient<runtime.Types.Result.GetResult<Prisma.$ChauffeurPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ChauffeurFindManyArgs>(args?: Prisma.SelectSubset<T, ChauffeurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChauffeurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ChauffeurCreateArgs>(args: Prisma.SelectSubset<T, ChauffeurCreateArgs<ExtArgs>>): Prisma.Prisma__ChauffeurClient<runtime.Types.Result.GetResult<Prisma.$ChauffeurPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ChauffeurCreateManyArgs>(args?: Prisma.SelectSubset<T, ChauffeurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ChauffeurCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ChauffeurCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChauffeurPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ChauffeurDeleteArgs>(args: Prisma.SelectSubset<T, ChauffeurDeleteArgs<ExtArgs>>): Prisma.Prisma__ChauffeurClient<runtime.Types.Result.GetResult<Prisma.$ChauffeurPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ChauffeurUpdateArgs>(args: Prisma.SelectSubset<T, ChauffeurUpdateArgs<ExtArgs>>): Prisma.Prisma__ChauffeurClient<runtime.Types.Result.GetResult<Prisma.$ChauffeurPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ChauffeurDeleteManyArgs>(args?: Prisma.SelectSubset<T, ChauffeurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ChauffeurUpdateManyArgs>(args: Prisma.SelectSubset<T, ChauffeurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ChauffeurUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ChauffeurUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ChauffeurPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ChauffeurUpsertArgs>(args: Prisma.SelectSubset<T, ChauffeurUpsertArgs<ExtArgs>>): Prisma.Prisma__ChauffeurClient<runtime.Types.Result.GetResult<Prisma.$ChauffeurPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ChauffeurCountArgs>(args?: Prisma.Subset<T, ChauffeurCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ChauffeurCountAggregateOutputType> : number>;
    aggregate<T extends ChauffeurAggregateArgs>(args: Prisma.Subset<T, ChauffeurAggregateArgs>): Prisma.PrismaPromise<GetChauffeurAggregateType<T>>;
    groupBy<T extends ChauffeurGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ChauffeurGroupByArgs['orderBy'];
    } : {
        orderBy?: ChauffeurGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ChauffeurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChauffeurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ChauffeurFieldRefs;
}
export interface Prisma__ChauffeurClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    missions<T extends Prisma.Chauffeur$missionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Chauffeur$missionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrdreMissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ChauffeurFieldRefs {
    readonly id: Prisma.FieldRef<"Chauffeur", 'Int'>;
    readonly mle: Prisma.FieldRef<"Chauffeur", 'String'>;
    readonly nom: Prisma.FieldRef<"Chauffeur", 'String'>;
    readonly prenom: Prisma.FieldRef<"Chauffeur", 'String'>;
    readonly telephone: Prisma.FieldRef<"Chauffeur", 'String'>;
    readonly disponible: Prisma.FieldRef<"Chauffeur", 'Boolean'>;
}
export type ChauffeurFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChauffeurSelect<ExtArgs> | null;
    omit?: Prisma.ChauffeurOmit<ExtArgs> | null;
    include?: Prisma.ChauffeurInclude<ExtArgs> | null;
    where: Prisma.ChauffeurWhereUniqueInput;
};
export type ChauffeurFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChauffeurSelect<ExtArgs> | null;
    omit?: Prisma.ChauffeurOmit<ExtArgs> | null;
    include?: Prisma.ChauffeurInclude<ExtArgs> | null;
    where: Prisma.ChauffeurWhereUniqueInput;
};
export type ChauffeurFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChauffeurSelect<ExtArgs> | null;
    omit?: Prisma.ChauffeurOmit<ExtArgs> | null;
    include?: Prisma.ChauffeurInclude<ExtArgs> | null;
    where?: Prisma.ChauffeurWhereInput;
    orderBy?: Prisma.ChauffeurOrderByWithRelationInput | Prisma.ChauffeurOrderByWithRelationInput[];
    cursor?: Prisma.ChauffeurWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ChauffeurScalarFieldEnum | Prisma.ChauffeurScalarFieldEnum[];
};
export type ChauffeurFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChauffeurSelect<ExtArgs> | null;
    omit?: Prisma.ChauffeurOmit<ExtArgs> | null;
    include?: Prisma.ChauffeurInclude<ExtArgs> | null;
    where?: Prisma.ChauffeurWhereInput;
    orderBy?: Prisma.ChauffeurOrderByWithRelationInput | Prisma.ChauffeurOrderByWithRelationInput[];
    cursor?: Prisma.ChauffeurWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ChauffeurScalarFieldEnum | Prisma.ChauffeurScalarFieldEnum[];
};
export type ChauffeurFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChauffeurSelect<ExtArgs> | null;
    omit?: Prisma.ChauffeurOmit<ExtArgs> | null;
    include?: Prisma.ChauffeurInclude<ExtArgs> | null;
    where?: Prisma.ChauffeurWhereInput;
    orderBy?: Prisma.ChauffeurOrderByWithRelationInput | Prisma.ChauffeurOrderByWithRelationInput[];
    cursor?: Prisma.ChauffeurWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ChauffeurScalarFieldEnum | Prisma.ChauffeurScalarFieldEnum[];
};
export type ChauffeurCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChauffeurSelect<ExtArgs> | null;
    omit?: Prisma.ChauffeurOmit<ExtArgs> | null;
    include?: Prisma.ChauffeurInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ChauffeurCreateInput, Prisma.ChauffeurUncheckedCreateInput>;
};
export type ChauffeurCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ChauffeurCreateManyInput | Prisma.ChauffeurCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ChauffeurCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChauffeurSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ChauffeurOmit<ExtArgs> | null;
    data: Prisma.ChauffeurCreateManyInput | Prisma.ChauffeurCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ChauffeurUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChauffeurSelect<ExtArgs> | null;
    omit?: Prisma.ChauffeurOmit<ExtArgs> | null;
    include?: Prisma.ChauffeurInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ChauffeurUpdateInput, Prisma.ChauffeurUncheckedUpdateInput>;
    where: Prisma.ChauffeurWhereUniqueInput;
};
export type ChauffeurUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ChauffeurUpdateManyMutationInput, Prisma.ChauffeurUncheckedUpdateManyInput>;
    where?: Prisma.ChauffeurWhereInput;
    limit?: number;
};
export type ChauffeurUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChauffeurSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ChauffeurOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ChauffeurUpdateManyMutationInput, Prisma.ChauffeurUncheckedUpdateManyInput>;
    where?: Prisma.ChauffeurWhereInput;
    limit?: number;
};
export type ChauffeurUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChauffeurSelect<ExtArgs> | null;
    omit?: Prisma.ChauffeurOmit<ExtArgs> | null;
    include?: Prisma.ChauffeurInclude<ExtArgs> | null;
    where: Prisma.ChauffeurWhereUniqueInput;
    create: Prisma.XOR<Prisma.ChauffeurCreateInput, Prisma.ChauffeurUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ChauffeurUpdateInput, Prisma.ChauffeurUncheckedUpdateInput>;
};
export type ChauffeurDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChauffeurSelect<ExtArgs> | null;
    omit?: Prisma.ChauffeurOmit<ExtArgs> | null;
    include?: Prisma.ChauffeurInclude<ExtArgs> | null;
    where: Prisma.ChauffeurWhereUniqueInput;
};
export type ChauffeurDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ChauffeurWhereInput;
    limit?: number;
};
export type Chauffeur$missionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ChauffeurDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ChauffeurSelect<ExtArgs> | null;
    omit?: Prisma.ChauffeurOmit<ExtArgs> | null;
    include?: Prisma.ChauffeurInclude<ExtArgs> | null;
};
