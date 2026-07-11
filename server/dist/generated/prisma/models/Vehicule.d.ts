import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type VehiculeModel = runtime.Types.Result.DefaultSelection<Prisma.$VehiculePayload>;
export type AggregateVehicule = {
    _count: VehiculeCountAggregateOutputType | null;
    _avg: VehiculeAvgAggregateOutputType | null;
    _sum: VehiculeSumAggregateOutputType | null;
    _min: VehiculeMinAggregateOutputType | null;
    _max: VehiculeMaxAggregateOutputType | null;
};
export type VehiculeAvgAggregateOutputType = {
    id: number | null;
};
export type VehiculeSumAggregateOutputType = {
    id: number | null;
};
export type VehiculeMinAggregateOutputType = {
    id: number | null;
    immatriculation: string | null;
    marque: string | null;
    modele: string | null;
    type: string | null;
    disponible: boolean | null;
};
export type VehiculeMaxAggregateOutputType = {
    id: number | null;
    immatriculation: string | null;
    marque: string | null;
    modele: string | null;
    type: string | null;
    disponible: boolean | null;
};
export type VehiculeCountAggregateOutputType = {
    id: number;
    immatriculation: number;
    marque: number;
    modele: number;
    type: number;
    disponible: number;
    _all: number;
};
export type VehiculeAvgAggregateInputType = {
    id?: true;
};
export type VehiculeSumAggregateInputType = {
    id?: true;
};
export type VehiculeMinAggregateInputType = {
    id?: true;
    immatriculation?: true;
    marque?: true;
    modele?: true;
    type?: true;
    disponible?: true;
};
export type VehiculeMaxAggregateInputType = {
    id?: true;
    immatriculation?: true;
    marque?: true;
    modele?: true;
    type?: true;
    disponible?: true;
};
export type VehiculeCountAggregateInputType = {
    id?: true;
    immatriculation?: true;
    marque?: true;
    modele?: true;
    type?: true;
    disponible?: true;
    _all?: true;
};
export type VehiculeAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VehiculeWhereInput;
    orderBy?: Prisma.VehiculeOrderByWithRelationInput | Prisma.VehiculeOrderByWithRelationInput[];
    cursor?: Prisma.VehiculeWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | VehiculeCountAggregateInputType;
    _avg?: VehiculeAvgAggregateInputType;
    _sum?: VehiculeSumAggregateInputType;
    _min?: VehiculeMinAggregateInputType;
    _max?: VehiculeMaxAggregateInputType;
};
export type GetVehiculeAggregateType<T extends VehiculeAggregateArgs> = {
    [P in keyof T & keyof AggregateVehicule]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateVehicule[P]> : Prisma.GetScalarType<T[P], AggregateVehicule[P]>;
};
export type VehiculeGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VehiculeWhereInput;
    orderBy?: Prisma.VehiculeOrderByWithAggregationInput | Prisma.VehiculeOrderByWithAggregationInput[];
    by: Prisma.VehiculeScalarFieldEnum[] | Prisma.VehiculeScalarFieldEnum;
    having?: Prisma.VehiculeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VehiculeCountAggregateInputType | true;
    _avg?: VehiculeAvgAggregateInputType;
    _sum?: VehiculeSumAggregateInputType;
    _min?: VehiculeMinAggregateInputType;
    _max?: VehiculeMaxAggregateInputType;
};
export type VehiculeGroupByOutputType = {
    id: number;
    immatriculation: string;
    marque: string;
    modele: string;
    type: string;
    disponible: boolean;
    _count: VehiculeCountAggregateOutputType | null;
    _avg: VehiculeAvgAggregateOutputType | null;
    _sum: VehiculeSumAggregateOutputType | null;
    _min: VehiculeMinAggregateOutputType | null;
    _max: VehiculeMaxAggregateOutputType | null;
};
export type GetVehiculeGroupByPayload<T extends VehiculeGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<VehiculeGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof VehiculeGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], VehiculeGroupByOutputType[P]> : Prisma.GetScalarType<T[P], VehiculeGroupByOutputType[P]>;
}>>;
export type VehiculeWhereInput = {
    AND?: Prisma.VehiculeWhereInput | Prisma.VehiculeWhereInput[];
    OR?: Prisma.VehiculeWhereInput[];
    NOT?: Prisma.VehiculeWhereInput | Prisma.VehiculeWhereInput[];
    id?: Prisma.IntFilter<"Vehicule"> | number;
    immatriculation?: Prisma.StringFilter<"Vehicule"> | string;
    marque?: Prisma.StringFilter<"Vehicule"> | string;
    modele?: Prisma.StringFilter<"Vehicule"> | string;
    type?: Prisma.StringFilter<"Vehicule"> | string;
    disponible?: Prisma.BoolFilter<"Vehicule"> | boolean;
    missions?: Prisma.OrdreMissionListRelationFilter;
};
export type VehiculeOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    immatriculation?: Prisma.SortOrder;
    marque?: Prisma.SortOrder;
    modele?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    disponible?: Prisma.SortOrder;
    missions?: Prisma.OrdreMissionOrderByRelationAggregateInput;
};
export type VehiculeWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    immatriculation?: string;
    AND?: Prisma.VehiculeWhereInput | Prisma.VehiculeWhereInput[];
    OR?: Prisma.VehiculeWhereInput[];
    NOT?: Prisma.VehiculeWhereInput | Prisma.VehiculeWhereInput[];
    marque?: Prisma.StringFilter<"Vehicule"> | string;
    modele?: Prisma.StringFilter<"Vehicule"> | string;
    type?: Prisma.StringFilter<"Vehicule"> | string;
    disponible?: Prisma.BoolFilter<"Vehicule"> | boolean;
    missions?: Prisma.OrdreMissionListRelationFilter;
}, "id" | "immatriculation">;
export type VehiculeOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    immatriculation?: Prisma.SortOrder;
    marque?: Prisma.SortOrder;
    modele?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    disponible?: Prisma.SortOrder;
    _count?: Prisma.VehiculeCountOrderByAggregateInput;
    _avg?: Prisma.VehiculeAvgOrderByAggregateInput;
    _max?: Prisma.VehiculeMaxOrderByAggregateInput;
    _min?: Prisma.VehiculeMinOrderByAggregateInput;
    _sum?: Prisma.VehiculeSumOrderByAggregateInput;
};
export type VehiculeScalarWhereWithAggregatesInput = {
    AND?: Prisma.VehiculeScalarWhereWithAggregatesInput | Prisma.VehiculeScalarWhereWithAggregatesInput[];
    OR?: Prisma.VehiculeScalarWhereWithAggregatesInput[];
    NOT?: Prisma.VehiculeScalarWhereWithAggregatesInput | Prisma.VehiculeScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Vehicule"> | number;
    immatriculation?: Prisma.StringWithAggregatesFilter<"Vehicule"> | string;
    marque?: Prisma.StringWithAggregatesFilter<"Vehicule"> | string;
    modele?: Prisma.StringWithAggregatesFilter<"Vehicule"> | string;
    type?: Prisma.StringWithAggregatesFilter<"Vehicule"> | string;
    disponible?: Prisma.BoolWithAggregatesFilter<"Vehicule"> | boolean;
};
export type VehiculeCreateInput = {
    immatriculation: string;
    marque: string;
    modele: string;
    type: string;
    disponible?: boolean;
    missions?: Prisma.OrdreMissionCreateNestedManyWithoutVehiculeInput;
};
export type VehiculeUncheckedCreateInput = {
    id?: number;
    immatriculation: string;
    marque: string;
    modele: string;
    type: string;
    disponible?: boolean;
    missions?: Prisma.OrdreMissionUncheckedCreateNestedManyWithoutVehiculeInput;
};
export type VehiculeUpdateInput = {
    immatriculation?: Prisma.StringFieldUpdateOperationsInput | string;
    marque?: Prisma.StringFieldUpdateOperationsInput | string;
    modele?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    disponible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    missions?: Prisma.OrdreMissionUpdateManyWithoutVehiculeNestedInput;
};
export type VehiculeUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    immatriculation?: Prisma.StringFieldUpdateOperationsInput | string;
    marque?: Prisma.StringFieldUpdateOperationsInput | string;
    modele?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    disponible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    missions?: Prisma.OrdreMissionUncheckedUpdateManyWithoutVehiculeNestedInput;
};
export type VehiculeCreateManyInput = {
    id?: number;
    immatriculation: string;
    marque: string;
    modele: string;
    type: string;
    disponible?: boolean;
};
export type VehiculeUpdateManyMutationInput = {
    immatriculation?: Prisma.StringFieldUpdateOperationsInput | string;
    marque?: Prisma.StringFieldUpdateOperationsInput | string;
    modele?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    disponible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type VehiculeUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    immatriculation?: Prisma.StringFieldUpdateOperationsInput | string;
    marque?: Prisma.StringFieldUpdateOperationsInput | string;
    modele?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    disponible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type VehiculeCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    immatriculation?: Prisma.SortOrder;
    marque?: Prisma.SortOrder;
    modele?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    disponible?: Prisma.SortOrder;
};
export type VehiculeAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type VehiculeMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    immatriculation?: Prisma.SortOrder;
    marque?: Prisma.SortOrder;
    modele?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    disponible?: Prisma.SortOrder;
};
export type VehiculeMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    immatriculation?: Prisma.SortOrder;
    marque?: Prisma.SortOrder;
    modele?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    disponible?: Prisma.SortOrder;
};
export type VehiculeSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type VehiculeScalarRelationFilter = {
    is?: Prisma.VehiculeWhereInput;
    isNot?: Prisma.VehiculeWhereInput;
};
export type VehiculeCreateNestedOneWithoutMissionsInput = {
    create?: Prisma.XOR<Prisma.VehiculeCreateWithoutMissionsInput, Prisma.VehiculeUncheckedCreateWithoutMissionsInput>;
    connectOrCreate?: Prisma.VehiculeCreateOrConnectWithoutMissionsInput;
    connect?: Prisma.VehiculeWhereUniqueInput;
};
export type VehiculeUpdateOneRequiredWithoutMissionsNestedInput = {
    create?: Prisma.XOR<Prisma.VehiculeCreateWithoutMissionsInput, Prisma.VehiculeUncheckedCreateWithoutMissionsInput>;
    connectOrCreate?: Prisma.VehiculeCreateOrConnectWithoutMissionsInput;
    upsert?: Prisma.VehiculeUpsertWithoutMissionsInput;
    connect?: Prisma.VehiculeWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.VehiculeUpdateToOneWithWhereWithoutMissionsInput, Prisma.VehiculeUpdateWithoutMissionsInput>, Prisma.VehiculeUncheckedUpdateWithoutMissionsInput>;
};
export type VehiculeCreateWithoutMissionsInput = {
    immatriculation: string;
    marque: string;
    modele: string;
    type: string;
    disponible?: boolean;
};
export type VehiculeUncheckedCreateWithoutMissionsInput = {
    id?: number;
    immatriculation: string;
    marque: string;
    modele: string;
    type: string;
    disponible?: boolean;
};
export type VehiculeCreateOrConnectWithoutMissionsInput = {
    where: Prisma.VehiculeWhereUniqueInput;
    create: Prisma.XOR<Prisma.VehiculeCreateWithoutMissionsInput, Prisma.VehiculeUncheckedCreateWithoutMissionsInput>;
};
export type VehiculeUpsertWithoutMissionsInput = {
    update: Prisma.XOR<Prisma.VehiculeUpdateWithoutMissionsInput, Prisma.VehiculeUncheckedUpdateWithoutMissionsInput>;
    create: Prisma.XOR<Prisma.VehiculeCreateWithoutMissionsInput, Prisma.VehiculeUncheckedCreateWithoutMissionsInput>;
    where?: Prisma.VehiculeWhereInput;
};
export type VehiculeUpdateToOneWithWhereWithoutMissionsInput = {
    where?: Prisma.VehiculeWhereInput;
    data: Prisma.XOR<Prisma.VehiculeUpdateWithoutMissionsInput, Prisma.VehiculeUncheckedUpdateWithoutMissionsInput>;
};
export type VehiculeUpdateWithoutMissionsInput = {
    immatriculation?: Prisma.StringFieldUpdateOperationsInput | string;
    marque?: Prisma.StringFieldUpdateOperationsInput | string;
    modele?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    disponible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type VehiculeUncheckedUpdateWithoutMissionsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    immatriculation?: Prisma.StringFieldUpdateOperationsInput | string;
    marque?: Prisma.StringFieldUpdateOperationsInput | string;
    modele?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    disponible?: Prisma.BoolFieldUpdateOperationsInput | boolean;
};
export type VehiculeCountOutputType = {
    missions: number;
};
export type VehiculeCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    missions?: boolean | VehiculeCountOutputTypeCountMissionsArgs;
};
export type VehiculeCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehiculeCountOutputTypeSelect<ExtArgs> | null;
};
export type VehiculeCountOutputTypeCountMissionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OrdreMissionWhereInput;
};
export type VehiculeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    immatriculation?: boolean;
    marque?: boolean;
    modele?: boolean;
    type?: boolean;
    disponible?: boolean;
    missions?: boolean | Prisma.Vehicule$missionsArgs<ExtArgs>;
    _count?: boolean | Prisma.VehiculeCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["vehicule"]>;
export type VehiculeSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    immatriculation?: boolean;
    marque?: boolean;
    modele?: boolean;
    type?: boolean;
    disponible?: boolean;
}, ExtArgs["result"]["vehicule"]>;
export type VehiculeSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    immatriculation?: boolean;
    marque?: boolean;
    modele?: boolean;
    type?: boolean;
    disponible?: boolean;
}, ExtArgs["result"]["vehicule"]>;
export type VehiculeSelectScalar = {
    id?: boolean;
    immatriculation?: boolean;
    marque?: boolean;
    modele?: boolean;
    type?: boolean;
    disponible?: boolean;
};
export type VehiculeOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "immatriculation" | "marque" | "modele" | "type" | "disponible", ExtArgs["result"]["vehicule"]>;
export type VehiculeInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    missions?: boolean | Prisma.Vehicule$missionsArgs<ExtArgs>;
    _count?: boolean | Prisma.VehiculeCountOutputTypeDefaultArgs<ExtArgs>;
};
export type VehiculeIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type VehiculeIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $VehiculePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Vehicule";
    objects: {
        missions: Prisma.$OrdreMissionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        immatriculation: string;
        marque: string;
        modele: string;
        type: string;
        disponible: boolean;
    }, ExtArgs["result"]["vehicule"]>;
    composites: {};
};
export type VehiculeGetPayload<S extends boolean | null | undefined | VehiculeDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$VehiculePayload, S>;
export type VehiculeCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<VehiculeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: VehiculeCountAggregateInputType | true;
};
export interface VehiculeDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Vehicule'];
        meta: {
            name: 'Vehicule';
        };
    };
    findUnique<T extends VehiculeFindUniqueArgs>(args: Prisma.SelectSubset<T, VehiculeFindUniqueArgs<ExtArgs>>): Prisma.Prisma__VehiculeClient<runtime.Types.Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends VehiculeFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, VehiculeFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__VehiculeClient<runtime.Types.Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends VehiculeFindFirstArgs>(args?: Prisma.SelectSubset<T, VehiculeFindFirstArgs<ExtArgs>>): Prisma.Prisma__VehiculeClient<runtime.Types.Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends VehiculeFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, VehiculeFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__VehiculeClient<runtime.Types.Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends VehiculeFindManyArgs>(args?: Prisma.SelectSubset<T, VehiculeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends VehiculeCreateArgs>(args: Prisma.SelectSubset<T, VehiculeCreateArgs<ExtArgs>>): Prisma.Prisma__VehiculeClient<runtime.Types.Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends VehiculeCreateManyArgs>(args?: Prisma.SelectSubset<T, VehiculeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends VehiculeCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, VehiculeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends VehiculeDeleteArgs>(args: Prisma.SelectSubset<T, VehiculeDeleteArgs<ExtArgs>>): Prisma.Prisma__VehiculeClient<runtime.Types.Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends VehiculeUpdateArgs>(args: Prisma.SelectSubset<T, VehiculeUpdateArgs<ExtArgs>>): Prisma.Prisma__VehiculeClient<runtime.Types.Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends VehiculeDeleteManyArgs>(args?: Prisma.SelectSubset<T, VehiculeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends VehiculeUpdateManyArgs>(args: Prisma.SelectSubset<T, VehiculeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends VehiculeUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, VehiculeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends VehiculeUpsertArgs>(args: Prisma.SelectSubset<T, VehiculeUpsertArgs<ExtArgs>>): Prisma.Prisma__VehiculeClient<runtime.Types.Result.GetResult<Prisma.$VehiculePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends VehiculeCountArgs>(args?: Prisma.Subset<T, VehiculeCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], VehiculeCountAggregateOutputType> : number>;
    aggregate<T extends VehiculeAggregateArgs>(args: Prisma.Subset<T, VehiculeAggregateArgs>): Prisma.PrismaPromise<GetVehiculeAggregateType<T>>;
    groupBy<T extends VehiculeGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: VehiculeGroupByArgs['orderBy'];
    } : {
        orderBy?: VehiculeGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, VehiculeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehiculeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: VehiculeFieldRefs;
}
export interface Prisma__VehiculeClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    missions<T extends Prisma.Vehicule$missionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Vehicule$missionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OrdreMissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface VehiculeFieldRefs {
    readonly id: Prisma.FieldRef<"Vehicule", 'Int'>;
    readonly immatriculation: Prisma.FieldRef<"Vehicule", 'String'>;
    readonly marque: Prisma.FieldRef<"Vehicule", 'String'>;
    readonly modele: Prisma.FieldRef<"Vehicule", 'String'>;
    readonly type: Prisma.FieldRef<"Vehicule", 'String'>;
    readonly disponible: Prisma.FieldRef<"Vehicule", 'Boolean'>;
}
export type VehiculeFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehiculeSelect<ExtArgs> | null;
    omit?: Prisma.VehiculeOmit<ExtArgs> | null;
    include?: Prisma.VehiculeInclude<ExtArgs> | null;
    where: Prisma.VehiculeWhereUniqueInput;
};
export type VehiculeFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehiculeSelect<ExtArgs> | null;
    omit?: Prisma.VehiculeOmit<ExtArgs> | null;
    include?: Prisma.VehiculeInclude<ExtArgs> | null;
    where: Prisma.VehiculeWhereUniqueInput;
};
export type VehiculeFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehiculeSelect<ExtArgs> | null;
    omit?: Prisma.VehiculeOmit<ExtArgs> | null;
    include?: Prisma.VehiculeInclude<ExtArgs> | null;
    where?: Prisma.VehiculeWhereInput;
    orderBy?: Prisma.VehiculeOrderByWithRelationInput | Prisma.VehiculeOrderByWithRelationInput[];
    cursor?: Prisma.VehiculeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VehiculeScalarFieldEnum | Prisma.VehiculeScalarFieldEnum[];
};
export type VehiculeFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehiculeSelect<ExtArgs> | null;
    omit?: Prisma.VehiculeOmit<ExtArgs> | null;
    include?: Prisma.VehiculeInclude<ExtArgs> | null;
    where?: Prisma.VehiculeWhereInput;
    orderBy?: Prisma.VehiculeOrderByWithRelationInput | Prisma.VehiculeOrderByWithRelationInput[];
    cursor?: Prisma.VehiculeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VehiculeScalarFieldEnum | Prisma.VehiculeScalarFieldEnum[];
};
export type VehiculeFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehiculeSelect<ExtArgs> | null;
    omit?: Prisma.VehiculeOmit<ExtArgs> | null;
    include?: Prisma.VehiculeInclude<ExtArgs> | null;
    where?: Prisma.VehiculeWhereInput;
    orderBy?: Prisma.VehiculeOrderByWithRelationInput | Prisma.VehiculeOrderByWithRelationInput[];
    cursor?: Prisma.VehiculeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VehiculeScalarFieldEnum | Prisma.VehiculeScalarFieldEnum[];
};
export type VehiculeCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehiculeSelect<ExtArgs> | null;
    omit?: Prisma.VehiculeOmit<ExtArgs> | null;
    include?: Prisma.VehiculeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VehiculeCreateInput, Prisma.VehiculeUncheckedCreateInput>;
};
export type VehiculeCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.VehiculeCreateManyInput | Prisma.VehiculeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type VehiculeCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehiculeSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.VehiculeOmit<ExtArgs> | null;
    data: Prisma.VehiculeCreateManyInput | Prisma.VehiculeCreateManyInput[];
    skipDuplicates?: boolean;
};
export type VehiculeUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehiculeSelect<ExtArgs> | null;
    omit?: Prisma.VehiculeOmit<ExtArgs> | null;
    include?: Prisma.VehiculeInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VehiculeUpdateInput, Prisma.VehiculeUncheckedUpdateInput>;
    where: Prisma.VehiculeWhereUniqueInput;
};
export type VehiculeUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.VehiculeUpdateManyMutationInput, Prisma.VehiculeUncheckedUpdateManyInput>;
    where?: Prisma.VehiculeWhereInput;
    limit?: number;
};
export type VehiculeUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehiculeSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.VehiculeOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.VehiculeUpdateManyMutationInput, Prisma.VehiculeUncheckedUpdateManyInput>;
    where?: Prisma.VehiculeWhereInput;
    limit?: number;
};
export type VehiculeUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehiculeSelect<ExtArgs> | null;
    omit?: Prisma.VehiculeOmit<ExtArgs> | null;
    include?: Prisma.VehiculeInclude<ExtArgs> | null;
    where: Prisma.VehiculeWhereUniqueInput;
    create: Prisma.XOR<Prisma.VehiculeCreateInput, Prisma.VehiculeUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.VehiculeUpdateInput, Prisma.VehiculeUncheckedUpdateInput>;
};
export type VehiculeDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehiculeSelect<ExtArgs> | null;
    omit?: Prisma.VehiculeOmit<ExtArgs> | null;
    include?: Prisma.VehiculeInclude<ExtArgs> | null;
    where: Prisma.VehiculeWhereUniqueInput;
};
export type VehiculeDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.VehiculeWhereInput;
    limit?: number;
};
export type Vehicule$missionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type VehiculeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VehiculeSelect<ExtArgs> | null;
    omit?: Prisma.VehiculeOmit<ExtArgs> | null;
    include?: Prisma.VehiculeInclude<ExtArgs> | null;
};
