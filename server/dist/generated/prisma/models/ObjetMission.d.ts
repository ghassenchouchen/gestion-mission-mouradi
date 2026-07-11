import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ObjetMissionModel = runtime.Types.Result.DefaultSelection<Prisma.$ObjetMissionPayload>;
export type AggregateObjetMission = {
    _count: ObjetMissionCountAggregateOutputType | null;
    _avg: ObjetMissionAvgAggregateOutputType | null;
    _sum: ObjetMissionSumAggregateOutputType | null;
    _min: ObjetMissionMinAggregateOutputType | null;
    _max: ObjetMissionMaxAggregateOutputType | null;
};
export type ObjetMissionAvgAggregateOutputType = {
    id: number | null;
};
export type ObjetMissionSumAggregateOutputType = {
    id: number | null;
};
export type ObjetMissionMinAggregateOutputType = {
    id: number | null;
    libelle: string | null;
    actif: boolean | null;
};
export type ObjetMissionMaxAggregateOutputType = {
    id: number | null;
    libelle: string | null;
    actif: boolean | null;
};
export type ObjetMissionCountAggregateOutputType = {
    id: number;
    libelle: number;
    actif: number;
    _all: number;
};
export type ObjetMissionAvgAggregateInputType = {
    id?: true;
};
export type ObjetMissionSumAggregateInputType = {
    id?: true;
};
export type ObjetMissionMinAggregateInputType = {
    id?: true;
    libelle?: true;
    actif?: true;
};
export type ObjetMissionMaxAggregateInputType = {
    id?: true;
    libelle?: true;
    actif?: true;
};
export type ObjetMissionCountAggregateInputType = {
    id?: true;
    libelle?: true;
    actif?: true;
    _all?: true;
};
export type ObjetMissionAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ObjetMissionWhereInput;
    orderBy?: Prisma.ObjetMissionOrderByWithRelationInput | Prisma.ObjetMissionOrderByWithRelationInput[];
    cursor?: Prisma.ObjetMissionWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ObjetMissionCountAggregateInputType;
    _avg?: ObjetMissionAvgAggregateInputType;
    _sum?: ObjetMissionSumAggregateInputType;
    _min?: ObjetMissionMinAggregateInputType;
    _max?: ObjetMissionMaxAggregateInputType;
};
export type GetObjetMissionAggregateType<T extends ObjetMissionAggregateArgs> = {
    [P in keyof T & keyof AggregateObjetMission]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateObjetMission[P]> : Prisma.GetScalarType<T[P], AggregateObjetMission[P]>;
};
export type ObjetMissionGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ObjetMissionWhereInput;
    orderBy?: Prisma.ObjetMissionOrderByWithAggregationInput | Prisma.ObjetMissionOrderByWithAggregationInput[];
    by: Prisma.ObjetMissionScalarFieldEnum[] | Prisma.ObjetMissionScalarFieldEnum;
    having?: Prisma.ObjetMissionScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ObjetMissionCountAggregateInputType | true;
    _avg?: ObjetMissionAvgAggregateInputType;
    _sum?: ObjetMissionSumAggregateInputType;
    _min?: ObjetMissionMinAggregateInputType;
    _max?: ObjetMissionMaxAggregateInputType;
};
export type ObjetMissionGroupByOutputType = {
    id: number;
    libelle: string;
    actif: boolean;
    _count: ObjetMissionCountAggregateOutputType | null;
    _avg: ObjetMissionAvgAggregateOutputType | null;
    _sum: ObjetMissionSumAggregateOutputType | null;
    _min: ObjetMissionMinAggregateOutputType | null;
    _max: ObjetMissionMaxAggregateOutputType | null;
};
export type GetObjetMissionGroupByPayload<T extends ObjetMissionGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ObjetMissionGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ObjetMissionGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ObjetMissionGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ObjetMissionGroupByOutputType[P]>;
}>>;
export type ObjetMissionWhereInput = {
    AND?: Prisma.ObjetMissionWhereInput | Prisma.ObjetMissionWhereInput[];
    OR?: Prisma.ObjetMissionWhereInput[];
    NOT?: Prisma.ObjetMissionWhereInput | Prisma.ObjetMissionWhereInput[];
    id?: Prisma.IntFilter<"ObjetMission"> | number;
    libelle?: Prisma.StringFilter<"ObjetMission"> | string;
    actif?: Prisma.BoolFilter<"ObjetMission"> | boolean;
    missions?: Prisma.OrdreMissionListRelationFilter;
};
export type ObjetMissionOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    libelle?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    missions?: Prisma.OrdreMissionOrderByRelationAggregateInput;
};
export type ObjetMissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    libelle?: string;
    AND?: Prisma.ObjetMissionWhereInput | Prisma.ObjetMissionWhereInput[];
    OR?: Prisma.ObjetMissionWhereInput[];
    NOT?: Prisma.ObjetMissionWhereInput | Prisma.ObjetMissionWhereInput[];
    actif?: Prisma.BoolFilter<"ObjetMission"> | boolean;
    missions?: Prisma.OrdreMissionListRelationFilter;
}, "id" | "libelle">;
export type ObjetMissionOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    libelle?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
    _count?: Prisma.ObjetMissionCountOrderByAggregateInput;
    _avg?: Prisma.ObjetMissionAvgOrderByAggregateInput;
    _max?: Prisma.ObjetMissionMaxOrderByAggregateInput;
    _min?: Prisma.ObjetMissionMinOrderByAggregateInput;
    _sum?: Prisma.ObjetMissionSumOrderByAggregateInput;
};
export type ObjetMissionScalarWhereWithAggregatesInput = {
    AND?: Prisma.ObjetMissionScalarWhereWithAggregatesInput | Prisma.ObjetMissionScalarWhereWithAggregatesInput[];
    OR?: Prisma.ObjetMissionScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ObjetMissionScalarWhereWithAggregatesInput | Prisma.ObjetMissionScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"ObjetMission"> | number;
    libelle?: Prisma.StringWithAggregatesFilter<"ObjetMission"> | string;
    actif?: Prisma.BoolWithAggregatesFilter<"ObjetMission"> | boolean;
};
export type ObjetMissionCreateInput = {
    libelle: string;
    actif?: boolean;
    missions?: Prisma.OrdreMissionCreateNestedManyWithoutObjetMissionInput;
};
export type ObjetMissionUncheckedCreateInput = {
    id?: number;
    libelle: string;
    actif?: boolean;
    missions?: Prisma.OrdreMissionUncheckedCreateNestedManyWithoutObjetMissionInput;
};
export type ObjetMissionUpdateInput = {
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    missions?: Prisma.OrdreMissionUpdateManyWithoutObjetMissionNestedInput;
};
export type ObjetMissionUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    missions?: Prisma.OrdreMissionUncheckedUpdateManyWithoutObjetMissionNestedInput;
};
export type ObjetMissionCreateManyInput = {
    id?: number;
    libelle: string;
    actif?: boolean;
};
export type ObjetMissionUpdateManyMutationInput = {
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ObjetMissionUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ObjetMissionCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    libelle?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
};
export type ObjetMissionAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type ObjetMissionMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    libelle?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
};
export type ObjetMissionMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    libelle?: Prisma.SortOrder;
    actif?: Prisma.SortOrder;
};
export type ObjetMissionSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type ObjetMissionScalarRelationFilter = {
    is?: Prisma.ObjetMissionWhereInput;
    isNot?: Prisma.ObjetMissionWhereInput;
};
export type ObjetMissionCreateNestedOneWithoutMissionsInput = {
    create?: Prisma.XOR<Prisma.ObjetMissionCreateWithoutMissionsInput, Prisma.ObjetMissionUncheckedCreateWithoutMissionsInput>;
    connectOrCreate?: Prisma.ObjetMissionCreateOrConnectWithoutMissionsInput;
    connect?: Prisma.ObjetMissionWhereUniqueInput;
};
export type ObjetMissionUpdateOneRequiredWithoutMissionsNestedInput = {
    create?: Prisma.XOR<Prisma.ObjetMissionCreateWithoutMissionsInput, Prisma.ObjetMissionUncheckedCreateWithoutMissionsInput>;
    connectOrCreate?: Prisma.ObjetMissionCreateOrConnectWithoutMissionsInput;
    upsert?: Prisma.ObjetMissionUpsertWithoutMissionsInput;
    connect?: Prisma.ObjetMissionWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ObjetMissionUpdateToOneWithWhereWithoutMissionsInput, Prisma.ObjetMissionUpdateWithoutMissionsInput>, Prisma.ObjetMissionUncheckedUpdateWithoutMissionsInput>;
};
export type ObjetMissionCreateWithoutMissionsInput = {
    libelle: string;
    actif?: boolean;
};
export type ObjetMissionUncheckedCreateWithoutMissionsInput = {
    id?: number;
    libelle: string;
    actif?: boolean;
};
export type ObjetMissionCreateOrConnectWithoutMissionsInput = {
    where: Prisma.ObjetMissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ObjetMissionCreateWithoutMissionsInput, Prisma.ObjetMissionUncheckedCreateWithoutMissionsInput>;
};
export type ObjetMissionUpsertWithoutMissionsInput = {
    update: Prisma.XOR<Prisma.ObjetMissionUpdateWithoutMissionsInput, Prisma.ObjetMissionUncheckedUpdateWithoutMissionsInput>;
    create: Prisma.XOR<Prisma.ObjetMissionCreateWithoutMissionsInput, Prisma.ObjetMissionUncheckedCreateWithoutMissionsInput>;
    where?: Prisma.ObjetMissionWhereInput;
};
export type ObjetMissionUpdateToOneWithWhereWithoutMissionsInput = {
    where?: Prisma.ObjetMissionWhereInput;
    data: Prisma.XOR<Prisma.ObjetMissionUpdateWithoutMissionsInput, Prisma.ObjetMissionUncheckedUpdateWithoutMissionsInput>;
};
export type ObjetMissionUpdateWithoutMissionsInput = {
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ObjetMissionUncheckedUpdateWithoutMissionsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    libelle?: Prisma.StringFieldUpdateOperationsInput | string;
    actif?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type ObjetMissionCountOutputType = {
    missions: number;
};
export type ObjetMissionCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    missions?: boolean | ObjetMissionCountOutputTypeCountMissionsArgs;
};
export type ObjetMissionCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ObjetMissionCountOutputTypeSelect<ExtArgs> | null;
};
export type ObjetMissionCountOutputTypeCountMissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrdreMissionWhereInput;
};
export type ObjetMissionSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    libelle?: boolean;
    actif?: boolean;
    missions?: boolean | Prisma.ObjetMission$missionsArgs<ExtArgs>;
    _count?: boolean | Prisma.ObjetMissionCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["objetMission"]>;
export type ObjetMissionSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    libelle?: boolean;
    actif?: boolean;
}, ExtArgs["result"]["objetMission"]>;
export type ObjetMissionSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    libelle?: boolean;
    actif?: boolean;
}, ExtArgs["result"]["objetMission"]>;
export type ObjetMissionSelectScalar = {
    id?: boolean;
    libelle?: boolean;
    actif?: boolean;
};
export type ObjetMissionOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "libelle" | "actif", ExtArgs["result"]["objetMission"]>;
export type ObjetMissionInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    missions?: boolean | Prisma.ObjetMission$missionsArgs<ExtArgs>;
    _count?: boolean | Prisma.ObjetMissionCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ObjetMissionIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type ObjetMissionIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $ObjetMissionPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ObjetMission";
    objects: {
        missions: Prisma.$OrdreMissionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        libelle: string;
        actif: boolean;
    }, ExtArgs["result"]["objetMission"]>;
    composites: {};
};
export type ObjetMissionGetPayload<S extends boolean | null | undefined | ObjetMissionDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ObjetMissionPayload, S>;
export type ObjetMissionCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ObjetMissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ObjetMissionCountAggregateInputType | true;
};
export interface ObjetMissionDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ObjetMission'];
        meta: {
            name: 'ObjetMission';
        };
    };
    findUnique<T extends ObjetMissionFindUniqueArgs>(args: Prisma.SelectSubset<T, ObjetMissionFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ObjetMissionClient<runtime.Types.Result.GetResult<Prisma.$ObjetMissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ObjetMissionFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ObjetMissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ObjetMissionClient<runtime.Types.Result.GetResult<Prisma.$ObjetMissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ObjetMissionFindFirstArgs>(args?: Prisma.SelectSubset<T, ObjetMissionFindFirstArgs<ExtArgs>>): Prisma.Prisma__ObjetMissionClient<runtime.Types.Result.GetResult<Prisma.$ObjetMissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ObjetMissionFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ObjetMissionFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ObjetMissionClient<runtime.Types.Result.GetResult<Prisma.$ObjetMissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ObjetMissionFindManyArgs>(args?: Prisma.SelectSubset<T, ObjetMissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ObjetMissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ObjetMissionCreateArgs>(args: Prisma.SelectSubset<T, ObjetMissionCreateArgs<ExtArgs>>): Prisma.Prisma__ObjetMissionClient<runtime.Types.Result.GetResult<Prisma.$ObjetMissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ObjetMissionCreateManyArgs>(args?: Prisma.SelectSubset<T, ObjetMissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ObjetMissionCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ObjetMissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ObjetMissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ObjetMissionDeleteArgs>(args: Prisma.SelectSubset<T, ObjetMissionDeleteArgs<ExtArgs>>): Prisma.Prisma__ObjetMissionClient<runtime.Types.Result.GetResult<Prisma.$ObjetMissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ObjetMissionUpdateArgs>(args: Prisma.SelectSubset<T, ObjetMissionUpdateArgs<ExtArgs>>): Prisma.Prisma__ObjetMissionClient<runtime.Types.Result.GetResult<Prisma.$ObjetMissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ObjetMissionDeleteManyArgs>(args?: Prisma.SelectSubset<T, ObjetMissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ObjetMissionUpdateManyArgs>(args: Prisma.SelectSubset<T, ObjetMissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ObjetMissionUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ObjetMissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ObjetMissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ObjetMissionUpsertArgs>(args: Prisma.SelectSubset<T, ObjetMissionUpsertArgs<ExtArgs>>): Prisma.Prisma__ObjetMissionClient<runtime.Types.Result.GetResult<Prisma.$ObjetMissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ObjetMissionCountArgs>(args?: Prisma.Subset<T, ObjetMissionCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ObjetMissionCountAggregateOutputType> : number>;
    aggregate<T extends ObjetMissionAggregateArgs>(args: Prisma.Subset<T, ObjetMissionAggregateArgs>): Prisma.PrismaPromise<GetObjetMissionAggregateType<T>>;
    groupBy<T extends ObjetMissionGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ObjetMissionGroupByArgs['orderBy'];
    } : {
        orderBy?: ObjetMissionGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ObjetMissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetObjetMissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ObjetMissionFieldRefs;
}
export interface Prisma__ObjetMissionClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    missions<T extends Prisma.ObjetMission$missionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ObjetMission$missionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrdreMissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ObjetMissionFieldRefs {
    readonly id: Prisma.FieldRef<"ObjetMission", 'Int'>;
    readonly libelle: Prisma.FieldRef<"ObjetMission", 'String'>;
    readonly actif: Prisma.FieldRef<"ObjetMission", 'Boolean'>;
}
export type ObjetMissionFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ObjetMissionSelect<ExtArgs> | null;
    omit?: Prisma.ObjetMissionOmit<ExtArgs> | null;
    include?: Prisma.ObjetMissionInclude<ExtArgs> | null;
    where: Prisma.ObjetMissionWhereUniqueInput;
};
export type ObjetMissionFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ObjetMissionSelect<ExtArgs> | null;
    omit?: Prisma.ObjetMissionOmit<ExtArgs> | null;
    include?: Prisma.ObjetMissionInclude<ExtArgs> | null;
    where: Prisma.ObjetMissionWhereUniqueInput;
};
export type ObjetMissionFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ObjetMissionSelect<ExtArgs> | null;
    omit?: Prisma.ObjetMissionOmit<ExtArgs> | null;
    include?: Prisma.ObjetMissionInclude<ExtArgs> | null;
    where?: Prisma.ObjetMissionWhereInput;
    orderBy?: Prisma.ObjetMissionOrderByWithRelationInput | Prisma.ObjetMissionOrderByWithRelationInput[];
    cursor?: Prisma.ObjetMissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ObjetMissionScalarFieldEnum | Prisma.ObjetMissionScalarFieldEnum[];
};
export type ObjetMissionFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ObjetMissionSelect<ExtArgs> | null;
    omit?: Prisma.ObjetMissionOmit<ExtArgs> | null;
    include?: Prisma.ObjetMissionInclude<ExtArgs> | null;
    where?: Prisma.ObjetMissionWhereInput;
    orderBy?: Prisma.ObjetMissionOrderByWithRelationInput | Prisma.ObjetMissionOrderByWithRelationInput[];
    cursor?: Prisma.ObjetMissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ObjetMissionScalarFieldEnum | Prisma.ObjetMissionScalarFieldEnum[];
};
export type ObjetMissionFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ObjetMissionSelect<ExtArgs> | null;
    omit?: Prisma.ObjetMissionOmit<ExtArgs> | null;
    include?: Prisma.ObjetMissionInclude<ExtArgs> | null;
    where?: Prisma.ObjetMissionWhereInput;
    orderBy?: Prisma.ObjetMissionOrderByWithRelationInput | Prisma.ObjetMissionOrderByWithRelationInput[];
    cursor?: Prisma.ObjetMissionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ObjetMissionScalarFieldEnum | Prisma.ObjetMissionScalarFieldEnum[];
};
export type ObjetMissionCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ObjetMissionSelect<ExtArgs> | null;
    omit?: Prisma.ObjetMissionOmit<ExtArgs> | null;
    include?: Prisma.ObjetMissionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ObjetMissionCreateInput, Prisma.ObjetMissionUncheckedCreateInput>;
};
export type ObjetMissionCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ObjetMissionCreateManyInput | Prisma.ObjetMissionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ObjetMissionCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ObjetMissionSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ObjetMissionOmit<ExtArgs> | null;
    data: Prisma.ObjetMissionCreateManyInput | Prisma.ObjetMissionCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ObjetMissionUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ObjetMissionSelect<ExtArgs> | null;
    omit?: Prisma.ObjetMissionOmit<ExtArgs> | null;
    include?: Prisma.ObjetMissionInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ObjetMissionUpdateInput, Prisma.ObjetMissionUncheckedUpdateInput>;
    where: Prisma.ObjetMissionWhereUniqueInput;
};
export type ObjetMissionUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ObjetMissionUpdateManyMutationInput, Prisma.ObjetMissionUncheckedUpdateManyInput>;
    where?: Prisma.ObjetMissionWhereInput;
    limit?: number;
};
export type ObjetMissionUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ObjetMissionSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ObjetMissionOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ObjetMissionUpdateManyMutationInput, Prisma.ObjetMissionUncheckedUpdateManyInput>;
    where?: Prisma.ObjetMissionWhereInput;
    limit?: number;
};
export type ObjetMissionUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ObjetMissionSelect<ExtArgs> | null;
    omit?: Prisma.ObjetMissionOmit<ExtArgs> | null;
    include?: Prisma.ObjetMissionInclude<ExtArgs> | null;
    where: Prisma.ObjetMissionWhereUniqueInput;
    create: Prisma.XOR<Prisma.ObjetMissionCreateInput, Prisma.ObjetMissionUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ObjetMissionUpdateInput, Prisma.ObjetMissionUncheckedUpdateInput>;
};
export type ObjetMissionDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ObjetMissionSelect<ExtArgs> | null;
    omit?: Prisma.ObjetMissionOmit<ExtArgs> | null;
    include?: Prisma.ObjetMissionInclude<ExtArgs> | null;
    where: Prisma.ObjetMissionWhereUniqueInput;
};
export type ObjetMissionDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ObjetMissionWhereInput;
    limit?: number;
};
export type ObjetMission$missionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ObjetMissionDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ObjetMissionSelect<ExtArgs> | null;
    omit?: Prisma.ObjetMissionOmit<ExtArgs> | null;
    include?: Prisma.ObjetMissionInclude<ExtArgs> | null;
};
