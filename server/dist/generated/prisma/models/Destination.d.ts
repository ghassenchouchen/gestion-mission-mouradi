import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DestinationModel = runtime.Types.Result.DefaultSelection<Prisma.$DestinationPayload>;
export type AggregateDestination = {
    _count: DestinationCountAggregateOutputType | null;
    _avg: DestinationAvgAggregateOutputType | null;
    _sum: DestinationSumAggregateOutputType | null;
    _min: DestinationMinAggregateOutputType | null;
    _max: DestinationMaxAggregateOutputType | null;
};
export type DestinationAvgAggregateOutputType = {
    id: number | null;
};
export type DestinationSumAggregateOutputType = {
    id: number | null;
};
export type DestinationMinAggregateOutputType = {
    id: number | null;
    nom: string | null;
    ville: string | null;
};
export type DestinationMaxAggregateOutputType = {
    id: number | null;
    nom: string | null;
    ville: string | null;
};
export type DestinationCountAggregateOutputType = {
    id: number;
    nom: number;
    ville: number;
    _all: number;
};
export type DestinationAvgAggregateInputType = {
    id?: true;
};
export type DestinationSumAggregateInputType = {
    id?: true;
};
export type DestinationMinAggregateInputType = {
    id?: true;
    nom?: true;
    ville?: true;
};
export type DestinationMaxAggregateInputType = {
    id?: true;
    nom?: true;
    ville?: true;
};
export type DestinationCountAggregateInputType = {
    id?: true;
    nom?: true;
    ville?: true;
    _all?: true;
};
export type DestinationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DestinationWhereInput;
    orderBy?: Prisma.DestinationOrderByWithRelationInput | Prisma.DestinationOrderByWithRelationInput[];
    cursor?: Prisma.DestinationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DestinationCountAggregateInputType;
    _avg?: DestinationAvgAggregateInputType;
    _sum?: DestinationSumAggregateInputType;
    _min?: DestinationMinAggregateInputType;
    _max?: DestinationMaxAggregateInputType;
};
export type GetDestinationAggregateType<T extends DestinationAggregateArgs> = {
    [P in keyof T & keyof AggregateDestination]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDestination[P]> : Prisma.GetScalarType<T[P], AggregateDestination[P]>;
};
export type DestinationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DestinationWhereInput;
    orderBy?: Prisma.DestinationOrderByWithAggregationInput | Prisma.DestinationOrderByWithAggregationInput[];
    by: Prisma.DestinationScalarFieldEnum[] | Prisma.DestinationScalarFieldEnum;
    having?: Prisma.DestinationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DestinationCountAggregateInputType | true;
    _avg?: DestinationAvgAggregateInputType;
    _sum?: DestinationSumAggregateInputType;
    _min?: DestinationMinAggregateInputType;
    _max?: DestinationMaxAggregateInputType;
};
export type DestinationGroupByOutputType = {
    id: number;
    nom: string;
    ville: string;
    _count: DestinationCountAggregateOutputType | null;
    _avg: DestinationAvgAggregateOutputType | null;
    _sum: DestinationSumAggregateOutputType | null;
    _min: DestinationMinAggregateOutputType | null;
    _max: DestinationMaxAggregateOutputType | null;
};
export type GetDestinationGroupByPayload<T extends DestinationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DestinationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DestinationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DestinationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DestinationGroupByOutputType[P]>;
}>>;
export type DestinationWhereInput = {
    AND?: Prisma.DestinationWhereInput | Prisma.DestinationWhereInput[];
    OR?: Prisma.DestinationWhereInput[];
    NOT?: Prisma.DestinationWhereInput | Prisma.DestinationWhereInput[];
    id?: Prisma.IntFilter<"Destination"> | number;
    nom?: Prisma.StringFilter<"Destination"> | string;
    ville?: Prisma.StringFilter<"Destination"> | string;
    missions?: Prisma.OrdreMissionListRelationFilter;
};
export type DestinationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    ville?: Prisma.SortOrder;
    missions?: Prisma.OrdreMissionOrderByRelationAggregateInput;
};
export type DestinationWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    nom?: string;
    AND?: Prisma.DestinationWhereInput | Prisma.DestinationWhereInput[];
    OR?: Prisma.DestinationWhereInput[];
    NOT?: Prisma.DestinationWhereInput | Prisma.DestinationWhereInput[];
    ville?: Prisma.StringFilter<"Destination"> | string;
    missions?: Prisma.OrdreMissionListRelationFilter;
}, "id" | "nom">;
export type DestinationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    ville?: Prisma.SortOrder;
    _count?: Prisma.DestinationCountOrderByAggregateInput;
    _avg?: Prisma.DestinationAvgOrderByAggregateInput;
    _max?: Prisma.DestinationMaxOrderByAggregateInput;
    _min?: Prisma.DestinationMinOrderByAggregateInput;
    _sum?: Prisma.DestinationSumOrderByAggregateInput;
};
export type DestinationScalarWhereWithAggregatesInput = {
    AND?: Prisma.DestinationScalarWhereWithAggregatesInput | Prisma.DestinationScalarWhereWithAggregatesInput[];
    OR?: Prisma.DestinationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DestinationScalarWhereWithAggregatesInput | Prisma.DestinationScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Destination"> | number;
    nom?: Prisma.StringWithAggregatesFilter<"Destination"> | string;
    ville?: Prisma.StringWithAggregatesFilter<"Destination"> | string;
};
export type DestinationCreateInput = {
    nom: string;
    ville: string;
    missions?: Prisma.OrdreMissionCreateNestedManyWithoutDestinationInput;
};
export type DestinationUncheckedCreateInput = {
    id?: number;
    nom: string;
    ville: string;
    missions?: Prisma.OrdreMissionUncheckedCreateNestedManyWithoutDestinationInput;
};
export type DestinationUpdateInput = {
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    ville?: Prisma.StringFieldUpdateOperationsInput | string;
    missions?: Prisma.OrdreMissionUpdateManyWithoutDestinationNestedInput;
};
export type DestinationUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    ville?: Prisma.StringFieldUpdateOperationsInput | string;
    missions?: Prisma.OrdreMissionUncheckedUpdateManyWithoutDestinationNestedInput;
};
export type DestinationCreateManyInput = {
    id?: number;
    nom: string;
    ville: string;
};
export type DestinationUpdateManyMutationInput = {
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    ville?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type DestinationUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    ville?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type DestinationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    ville?: Prisma.SortOrder;
};
export type DestinationAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type DestinationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    ville?: Prisma.SortOrder;
};
export type DestinationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nom?: Prisma.SortOrder;
    ville?: Prisma.SortOrder;
};
export type DestinationSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type DestinationScalarRelationFilter = {
    is?: Prisma.DestinationWhereInput;
    isNot?: Prisma.DestinationWhereInput;
};
export type DestinationCreateNestedOneWithoutMissionsInput = {
    create?: Prisma.XOR<Prisma.DestinationCreateWithoutMissionsInput, Prisma.DestinationUncheckedCreateWithoutMissionsInput>;
    connectOrCreate?: Prisma.DestinationCreateOrConnectWithoutMissionsInput;
    connect?: Prisma.DestinationWhereUniqueInput;
};
export type DestinationUpdateOneRequiredWithoutMissionsNestedInput = {
    create?: Prisma.XOR<Prisma.DestinationCreateWithoutMissionsInput, Prisma.DestinationUncheckedCreateWithoutMissionsInput>;
    connectOrCreate?: Prisma.DestinationCreateOrConnectWithoutMissionsInput;
    upsert?: Prisma.DestinationUpsertWithoutMissionsInput;
    connect?: Prisma.DestinationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DestinationUpdateToOneWithWhereWithoutMissionsInput, Prisma.DestinationUpdateWithoutMissionsInput>, Prisma.DestinationUncheckedUpdateWithoutMissionsInput>;
};
export type DestinationCreateWithoutMissionsInput = {
    nom: string;
    ville: string;
};
export type DestinationUncheckedCreateWithoutMissionsInput = {
    id?: number;
    nom: string;
    ville: string;
};
export type DestinationCreateOrConnectWithoutMissionsInput = {
    where: Prisma.DestinationWhereUniqueInput;
    create: Prisma.XOR<Prisma.DestinationCreateWithoutMissionsInput, Prisma.DestinationUncheckedCreateWithoutMissionsInput>;
};
export type DestinationUpsertWithoutMissionsInput = {
    update: Prisma.XOR<Prisma.DestinationUpdateWithoutMissionsInput, Prisma.DestinationUncheckedUpdateWithoutMissionsInput>;
    create: Prisma.XOR<Prisma.DestinationCreateWithoutMissionsInput, Prisma.DestinationUncheckedCreateWithoutMissionsInput>;
    where?: Prisma.DestinationWhereInput;
};
export type DestinationUpdateToOneWithWhereWithoutMissionsInput = {
    where?: Prisma.DestinationWhereInput;
    data: Prisma.XOR<Prisma.DestinationUpdateWithoutMissionsInput, Prisma.DestinationUncheckedUpdateWithoutMissionsInput>;
};
export type DestinationUpdateWithoutMissionsInput = {
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    ville?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type DestinationUncheckedUpdateWithoutMissionsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nom?: Prisma.StringFieldUpdateOperationsInput | string;
    ville?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type DestinationCountOutputType = {
    missions: number;
};
export type DestinationCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    missions?: boolean | DestinationCountOutputTypeCountMissionsArgs;
};
export type DestinationCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DestinationCountOutputTypeSelect<ExtArgs> | null;
};
export type DestinationCountOutputTypeCountMissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrdreMissionWhereInput;
};
export type DestinationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    ville?: boolean;
    missions?: boolean | Prisma.Destination$missionsArgs<ExtArgs>;
    _count?: boolean | Prisma.DestinationCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["destination"]>;
export type DestinationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    ville?: boolean;
}, ExtArgs["result"]["destination"]>;
export type DestinationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nom?: boolean;
    ville?: boolean;
}, ExtArgs["result"]["destination"]>;
export type DestinationSelectScalar = {
    id?: boolean;
    nom?: boolean;
    ville?: boolean;
};
export type DestinationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nom" | "ville", ExtArgs["result"]["destination"]>;
export type DestinationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    missions?: boolean | Prisma.Destination$missionsArgs<ExtArgs>;
    _count?: boolean | Prisma.DestinationCountOutputTypeDefaultArgs<ExtArgs>;
};
export type DestinationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type DestinationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $DestinationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Destination";
    objects: {
        missions: Prisma.$OrdreMissionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nom: string;
        ville: string;
    }, ExtArgs["result"]["destination"]>;
    composites: {};
};
export type DestinationGetPayload<S extends boolean | null | undefined | DestinationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DestinationPayload, S>;
export type DestinationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DestinationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DestinationCountAggregateInputType | true;
};
export interface DestinationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Destination'];
        meta: {
            name: 'Destination';
        };
    };
    findUnique<T extends DestinationFindUniqueArgs>(args: Prisma.SelectSubset<T, DestinationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DestinationClient<runtime.Types.Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DestinationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DestinationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DestinationClient<runtime.Types.Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DestinationFindFirstArgs>(args?: Prisma.SelectSubset<T, DestinationFindFirstArgs<ExtArgs>>): Prisma.Prisma__DestinationClient<runtime.Types.Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DestinationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DestinationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DestinationClient<runtime.Types.Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DestinationFindManyArgs>(args?: Prisma.SelectSubset<T, DestinationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DestinationCreateArgs>(args: Prisma.SelectSubset<T, DestinationCreateArgs<ExtArgs>>): Prisma.Prisma__DestinationClient<runtime.Types.Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DestinationCreateManyArgs>(args?: Prisma.SelectSubset<T, DestinationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DestinationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DestinationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DestinationDeleteArgs>(args: Prisma.SelectSubset<T, DestinationDeleteArgs<ExtArgs>>): Prisma.Prisma__DestinationClient<runtime.Types.Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DestinationUpdateArgs>(args: Prisma.SelectSubset<T, DestinationUpdateArgs<ExtArgs>>): Prisma.Prisma__DestinationClient<runtime.Types.Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DestinationDeleteManyArgs>(args?: Prisma.SelectSubset<T, DestinationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DestinationUpdateManyArgs>(args: Prisma.SelectSubset<T, DestinationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DestinationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DestinationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DestinationUpsertArgs>(args: Prisma.SelectSubset<T, DestinationUpsertArgs<ExtArgs>>): Prisma.Prisma__DestinationClient<runtime.Types.Result.GetResult<Prisma.$DestinationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DestinationCountArgs>(args?: Prisma.Subset<T, DestinationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DestinationCountAggregateOutputType> : number>;
    aggregate<T extends DestinationAggregateArgs>(args: Prisma.Subset<T, DestinationAggregateArgs>): Prisma.PrismaPromise<GetDestinationAggregateType<T>>;
    groupBy<T extends DestinationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DestinationGroupByArgs['orderBy'];
    } : {
        orderBy?: DestinationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DestinationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDestinationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DestinationFieldRefs;
}
export interface Prisma__DestinationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    missions<T extends Prisma.Destination$missionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Destination$missionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrdreMissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DestinationFieldRefs {
    readonly id: Prisma.FieldRef<"Destination", 'Int'>;
    readonly nom: Prisma.FieldRef<"Destination", 'String'>;
    readonly ville: Prisma.FieldRef<"Destination", 'String'>;
}
export type DestinationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DestinationSelect<ExtArgs> | null;
    omit?: Prisma.DestinationOmit<ExtArgs> | null;
    include?: Prisma.DestinationInclude<ExtArgs> | null;
    where: Prisma.DestinationWhereUniqueInput;
};
export type DestinationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DestinationSelect<ExtArgs> | null;
    omit?: Prisma.DestinationOmit<ExtArgs> | null;
    include?: Prisma.DestinationInclude<ExtArgs> | null;
    where: Prisma.DestinationWhereUniqueInput;
};
export type DestinationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DestinationSelect<ExtArgs> | null;
    omit?: Prisma.DestinationOmit<ExtArgs> | null;
    include?: Prisma.DestinationInclude<ExtArgs> | null;
    where?: Prisma.DestinationWhereInput;
    orderBy?: Prisma.DestinationOrderByWithRelationInput | Prisma.DestinationOrderByWithRelationInput[];
    cursor?: Prisma.DestinationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DestinationScalarFieldEnum | Prisma.DestinationScalarFieldEnum[];
};
export type DestinationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DestinationSelect<ExtArgs> | null;
    omit?: Prisma.DestinationOmit<ExtArgs> | null;
    include?: Prisma.DestinationInclude<ExtArgs> | null;
    where?: Prisma.DestinationWhereInput;
    orderBy?: Prisma.DestinationOrderByWithRelationInput | Prisma.DestinationOrderByWithRelationInput[];
    cursor?: Prisma.DestinationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DestinationScalarFieldEnum | Prisma.DestinationScalarFieldEnum[];
};
export type DestinationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DestinationSelect<ExtArgs> | null;
    omit?: Prisma.DestinationOmit<ExtArgs> | null;
    include?: Prisma.DestinationInclude<ExtArgs> | null;
    where?: Prisma.DestinationWhereInput;
    orderBy?: Prisma.DestinationOrderByWithRelationInput | Prisma.DestinationOrderByWithRelationInput[];
    cursor?: Prisma.DestinationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DestinationScalarFieldEnum | Prisma.DestinationScalarFieldEnum[];
};
export type DestinationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DestinationSelect<ExtArgs> | null;
    omit?: Prisma.DestinationOmit<ExtArgs> | null;
    include?: Prisma.DestinationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DestinationCreateInput, Prisma.DestinationUncheckedCreateInput>;
};
export type DestinationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DestinationCreateManyInput | Prisma.DestinationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DestinationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DestinationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DestinationOmit<ExtArgs> | null;
    data: Prisma.DestinationCreateManyInput | Prisma.DestinationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DestinationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DestinationSelect<ExtArgs> | null;
    omit?: Prisma.DestinationOmit<ExtArgs> | null;
    include?: Prisma.DestinationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DestinationUpdateInput, Prisma.DestinationUncheckedUpdateInput>;
    where: Prisma.DestinationWhereUniqueInput;
};
export type DestinationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DestinationUpdateManyMutationInput, Prisma.DestinationUncheckedUpdateManyInput>;
    where?: Prisma.DestinationWhereInput;
    limit?: number;
};
export type DestinationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DestinationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DestinationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DestinationUpdateManyMutationInput, Prisma.DestinationUncheckedUpdateManyInput>;
    where?: Prisma.DestinationWhereInput;
    limit?: number;
};
export type DestinationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DestinationSelect<ExtArgs> | null;
    omit?: Prisma.DestinationOmit<ExtArgs> | null;
    include?: Prisma.DestinationInclude<ExtArgs> | null;
    where: Prisma.DestinationWhereUniqueInput;
    create: Prisma.XOR<Prisma.DestinationCreateInput, Prisma.DestinationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DestinationUpdateInput, Prisma.DestinationUncheckedUpdateInput>;
};
export type DestinationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DestinationSelect<ExtArgs> | null;
    omit?: Prisma.DestinationOmit<ExtArgs> | null;
    include?: Prisma.DestinationInclude<ExtArgs> | null;
    where: Prisma.DestinationWhereUniqueInput;
};
export type DestinationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DestinationWhereInput;
    limit?: number;
};
export type Destination$missionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DestinationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DestinationSelect<ExtArgs> | null;
    omit?: Prisma.DestinationOmit<ExtArgs> | null;
    include?: Prisma.DestinationInclude<ExtArgs> | null;
};
