import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AccompagnateurModel = runtime.Types.Result.DefaultSelection<Prisma.$AccompagnateurPayload>;
export type AggregateAccompagnateur = {
    _count: AccompagnateurCountAggregateOutputType | null;
    _avg: AccompagnateurAvgAggregateOutputType | null;
    _sum: AccompagnateurSumAggregateOutputType | null;
    _min: AccompagnateurMinAggregateOutputType | null;
    _max: AccompagnateurMaxAggregateOutputType | null;
};
export type AccompagnateurAvgAggregateOutputType = {
    id: number | null;
    ordreMissionId: number | null;
    employeId: number | null;
};
export type AccompagnateurSumAggregateOutputType = {
    id: number | null;
    ordreMissionId: number | null;
    employeId: number | null;
};
export type AccompagnateurMinAggregateOutputType = {
    id: number | null;
    ordreMissionId: number | null;
    employeId: number | null;
};
export type AccompagnateurMaxAggregateOutputType = {
    id: number | null;
    ordreMissionId: number | null;
    employeId: number | null;
};
export type AccompagnateurCountAggregateOutputType = {
    id: number;
    ordreMissionId: number;
    employeId: number;
    _all: number;
};
export type AccompagnateurAvgAggregateInputType = {
    id?: true;
    ordreMissionId?: true;
    employeId?: true;
};
export type AccompagnateurSumAggregateInputType = {
    id?: true;
    ordreMissionId?: true;
    employeId?: true;
};
export type AccompagnateurMinAggregateInputType = {
    id?: true;
    ordreMissionId?: true;
    employeId?: true;
};
export type AccompagnateurMaxAggregateInputType = {
    id?: true;
    ordreMissionId?: true;
    employeId?: true;
};
export type AccompagnateurCountAggregateInputType = {
    id?: true;
    ordreMissionId?: true;
    employeId?: true;
    _all?: true;
};
export type AccompagnateurAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AccompagnateurWhereInput;
    orderBy?: Prisma.AccompagnateurOrderByWithRelationInput | Prisma.AccompagnateurOrderByWithRelationInput[];
    cursor?: Prisma.AccompagnateurWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AccompagnateurCountAggregateInputType;
    _avg?: AccompagnateurAvgAggregateInputType;
    _sum?: AccompagnateurSumAggregateInputType;
    _min?: AccompagnateurMinAggregateInputType;
    _max?: AccompagnateurMaxAggregateInputType;
};
export type GetAccompagnateurAggregateType<T extends AccompagnateurAggregateArgs> = {
    [P in keyof T & keyof AggregateAccompagnateur]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAccompagnateur[P]> : Prisma.GetScalarType<T[P], AggregateAccompagnateur[P]>;
};
export type AccompagnateurGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AccompagnateurWhereInput;
    orderBy?: Prisma.AccompagnateurOrderByWithAggregationInput | Prisma.AccompagnateurOrderByWithAggregationInput[];
    by: Prisma.AccompagnateurScalarFieldEnum[] | Prisma.AccompagnateurScalarFieldEnum;
    having?: Prisma.AccompagnateurScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AccompagnateurCountAggregateInputType | true;
    _avg?: AccompagnateurAvgAggregateInputType;
    _sum?: AccompagnateurSumAggregateInputType;
    _min?: AccompagnateurMinAggregateInputType;
    _max?: AccompagnateurMaxAggregateInputType;
};
export type AccompagnateurGroupByOutputType = {
    id: number;
    ordreMissionId: number;
    employeId: number;
    _count: AccompagnateurCountAggregateOutputType | null;
    _avg: AccompagnateurAvgAggregateOutputType | null;
    _sum: AccompagnateurSumAggregateOutputType | null;
    _min: AccompagnateurMinAggregateOutputType | null;
    _max: AccompagnateurMaxAggregateOutputType | null;
};
export type GetAccompagnateurGroupByPayload<T extends AccompagnateurGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AccompagnateurGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AccompagnateurGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AccompagnateurGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AccompagnateurGroupByOutputType[P]>;
}>>;
export type AccompagnateurWhereInput = {
    AND?: Prisma.AccompagnateurWhereInput | Prisma.AccompagnateurWhereInput[];
    OR?: Prisma.AccompagnateurWhereInput[];
    NOT?: Prisma.AccompagnateurWhereInput | Prisma.AccompagnateurWhereInput[];
    id?: Prisma.IntFilter<"Accompagnateur"> | number;
    ordreMissionId?: Prisma.IntFilter<"Accompagnateur"> | number;
    employeId?: Prisma.IntFilter<"Accompagnateur"> | number;
    ordreMission?: Prisma.XOR<Prisma.OrdreMissionScalarRelationFilter, Prisma.OrdreMissionWhereInput>;
    employe?: Prisma.XOR<Prisma.EmployeScalarRelationFilter, Prisma.EmployeWhereInput>;
};
export type AccompagnateurOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    ordreMissionId?: Prisma.SortOrder;
    employeId?: Prisma.SortOrder;
    ordreMission?: Prisma.OrdreMissionOrderByWithRelationInput;
    employe?: Prisma.EmployeOrderByWithRelationInput;
};
export type AccompagnateurWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    ordreMissionId_employeId?: Prisma.AccompagnateurOrdreMissionIdEmployeIdCompoundUniqueInput;
    AND?: Prisma.AccompagnateurWhereInput | Prisma.AccompagnateurWhereInput[];
    OR?: Prisma.AccompagnateurWhereInput[];
    NOT?: Prisma.AccompagnateurWhereInput | Prisma.AccompagnateurWhereInput[];
    ordreMissionId?: Prisma.IntFilter<"Accompagnateur"> | number;
    employeId?: Prisma.IntFilter<"Accompagnateur"> | number;
    ordreMission?: Prisma.XOR<Prisma.OrdreMissionScalarRelationFilter, Prisma.OrdreMissionWhereInput>;
    employe?: Prisma.XOR<Prisma.EmployeScalarRelationFilter, Prisma.EmployeWhereInput>;
}, "id" | "ordreMissionId_employeId">;
export type AccompagnateurOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    ordreMissionId?: Prisma.SortOrder;
    employeId?: Prisma.SortOrder;
    _count?: Prisma.AccompagnateurCountOrderByAggregateInput;
    _avg?: Prisma.AccompagnateurAvgOrderByAggregateInput;
    _max?: Prisma.AccompagnateurMaxOrderByAggregateInput;
    _min?: Prisma.AccompagnateurMinOrderByAggregateInput;
    _sum?: Prisma.AccompagnateurSumOrderByAggregateInput;
};
export type AccompagnateurScalarWhereWithAggregatesInput = {
    AND?: Prisma.AccompagnateurScalarWhereWithAggregatesInput | Prisma.AccompagnateurScalarWhereWithAggregatesInput[];
    OR?: Prisma.AccompagnateurScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AccompagnateurScalarWhereWithAggregatesInput | Prisma.AccompagnateurScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Accompagnateur"> | number;
    ordreMissionId?: Prisma.IntWithAggregatesFilter<"Accompagnateur"> | number;
    employeId?: Prisma.IntWithAggregatesFilter<"Accompagnateur"> | number;
};
export type AccompagnateurCreateInput = {
    ordreMission: Prisma.OrdreMissionCreateNestedOneWithoutAccompagnateursInput;
    employe: Prisma.EmployeCreateNestedOneWithoutAccompagnementsInput;
};
export type AccompagnateurUncheckedCreateInput = {
    id?: number;
    ordreMissionId: number;
    employeId: number;
};
export type AccompagnateurUpdateInput = {
    ordreMission?: Prisma.OrdreMissionUpdateOneRequiredWithoutAccompagnateursNestedInput;
    employe?: Prisma.EmployeUpdateOneRequiredWithoutAccompagnementsNestedInput;
};
export type AccompagnateurUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    ordreMissionId?: Prisma.IntFieldUpdateOperationsInput | number;
    employeId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type AccompagnateurCreateManyInput = {
    id?: number;
    ordreMissionId: number;
    employeId: number;
};
export type AccompagnateurUpdateManyMutationInput = {};
export type AccompagnateurUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    ordreMissionId?: Prisma.IntFieldUpdateOperationsInput | number;
    employeId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type AccompagnateurListRelationFilter = {
    every?: Prisma.AccompagnateurWhereInput;
    some?: Prisma.AccompagnateurWhereInput;
    none?: Prisma.AccompagnateurWhereInput;
};
export type AccompagnateurOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AccompagnateurOrdreMissionIdEmployeIdCompoundUniqueInput = {
    ordreMissionId: number;
    employeId: number;
};
export type AccompagnateurCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ordreMissionId?: Prisma.SortOrder;
    employeId?: Prisma.SortOrder;
};
export type AccompagnateurAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ordreMissionId?: Prisma.SortOrder;
    employeId?: Prisma.SortOrder;
};
export type AccompagnateurMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ordreMissionId?: Prisma.SortOrder;
    employeId?: Prisma.SortOrder;
};
export type AccompagnateurMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ordreMissionId?: Prisma.SortOrder;
    employeId?: Prisma.SortOrder;
};
export type AccompagnateurSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    ordreMissionId?: Prisma.SortOrder;
    employeId?: Prisma.SortOrder;
};
export type AccompagnateurCreateNestedManyWithoutEmployeInput = {
    create?: Prisma.XOR<Prisma.AccompagnateurCreateWithoutEmployeInput, Prisma.AccompagnateurUncheckedCreateWithoutEmployeInput> | Prisma.AccompagnateurCreateWithoutEmployeInput[] | Prisma.AccompagnateurUncheckedCreateWithoutEmployeInput[];
    connectOrCreate?: Prisma.AccompagnateurCreateOrConnectWithoutEmployeInput | Prisma.AccompagnateurCreateOrConnectWithoutEmployeInput[];
    createMany?: Prisma.AccompagnateurCreateManyEmployeInputEnvelope;
    connect?: Prisma.AccompagnateurWhereUniqueInput | Prisma.AccompagnateurWhereUniqueInput[];
};
export type AccompagnateurUncheckedCreateNestedManyWithoutEmployeInput = {
    create?: Prisma.XOR<Prisma.AccompagnateurCreateWithoutEmployeInput, Prisma.AccompagnateurUncheckedCreateWithoutEmployeInput> | Prisma.AccompagnateurCreateWithoutEmployeInput[] | Prisma.AccompagnateurUncheckedCreateWithoutEmployeInput[];
    connectOrCreate?: Prisma.AccompagnateurCreateOrConnectWithoutEmployeInput | Prisma.AccompagnateurCreateOrConnectWithoutEmployeInput[];
    createMany?: Prisma.AccompagnateurCreateManyEmployeInputEnvelope;
    connect?: Prisma.AccompagnateurWhereUniqueInput | Prisma.AccompagnateurWhereUniqueInput[];
};
export type AccompagnateurUpdateManyWithoutEmployeNestedInput = {
    create?: Prisma.XOR<Prisma.AccompagnateurCreateWithoutEmployeInput, Prisma.AccompagnateurUncheckedCreateWithoutEmployeInput> | Prisma.AccompagnateurCreateWithoutEmployeInput[] | Prisma.AccompagnateurUncheckedCreateWithoutEmployeInput[];
    connectOrCreate?: Prisma.AccompagnateurCreateOrConnectWithoutEmployeInput | Prisma.AccompagnateurCreateOrConnectWithoutEmployeInput[];
    upsert?: Prisma.AccompagnateurUpsertWithWhereUniqueWithoutEmployeInput | Prisma.AccompagnateurUpsertWithWhereUniqueWithoutEmployeInput[];
    createMany?: Prisma.AccompagnateurCreateManyEmployeInputEnvelope;
    set?: Prisma.AccompagnateurWhereUniqueInput | Prisma.AccompagnateurWhereUniqueInput[];
    disconnect?: Prisma.AccompagnateurWhereUniqueInput | Prisma.AccompagnateurWhereUniqueInput[];
    delete?: Prisma.AccompagnateurWhereUniqueInput | Prisma.AccompagnateurWhereUniqueInput[];
    connect?: Prisma.AccompagnateurWhereUniqueInput | Prisma.AccompagnateurWhereUniqueInput[];
    update?: Prisma.AccompagnateurUpdateWithWhereUniqueWithoutEmployeInput | Prisma.AccompagnateurUpdateWithWhereUniqueWithoutEmployeInput[];
    updateMany?: Prisma.AccompagnateurUpdateManyWithWhereWithoutEmployeInput | Prisma.AccompagnateurUpdateManyWithWhereWithoutEmployeInput[];
    deleteMany?: Prisma.AccompagnateurScalarWhereInput | Prisma.AccompagnateurScalarWhereInput[];
};
export type AccompagnateurUncheckedUpdateManyWithoutEmployeNestedInput = {
    create?: Prisma.XOR<Prisma.AccompagnateurCreateWithoutEmployeInput, Prisma.AccompagnateurUncheckedCreateWithoutEmployeInput> | Prisma.AccompagnateurCreateWithoutEmployeInput[] | Prisma.AccompagnateurUncheckedCreateWithoutEmployeInput[];
    connectOrCreate?: Prisma.AccompagnateurCreateOrConnectWithoutEmployeInput | Prisma.AccompagnateurCreateOrConnectWithoutEmployeInput[];
    upsert?: Prisma.AccompagnateurUpsertWithWhereUniqueWithoutEmployeInput | Prisma.AccompagnateurUpsertWithWhereUniqueWithoutEmployeInput[];
    createMany?: Prisma.AccompagnateurCreateManyEmployeInputEnvelope;
    set?: Prisma.AccompagnateurWhereUniqueInput | Prisma.AccompagnateurWhereUniqueInput[];
    disconnect?: Prisma.AccompagnateurWhereUniqueInput | Prisma.AccompagnateurWhereUniqueInput[];
    delete?: Prisma.AccompagnateurWhereUniqueInput | Prisma.AccompagnateurWhereUniqueInput[];
    connect?: Prisma.AccompagnateurWhereUniqueInput | Prisma.AccompagnateurWhereUniqueInput[];
    update?: Prisma.AccompagnateurUpdateWithWhereUniqueWithoutEmployeInput | Prisma.AccompagnateurUpdateWithWhereUniqueWithoutEmployeInput[];
    updateMany?: Prisma.AccompagnateurUpdateManyWithWhereWithoutEmployeInput | Prisma.AccompagnateurUpdateManyWithWhereWithoutEmployeInput[];
    deleteMany?: Prisma.AccompagnateurScalarWhereInput | Prisma.AccompagnateurScalarWhereInput[];
};
export type AccompagnateurCreateNestedManyWithoutOrdreMissionInput = {
    create?: Prisma.XOR<Prisma.AccompagnateurCreateWithoutOrdreMissionInput, Prisma.AccompagnateurUncheckedCreateWithoutOrdreMissionInput> | Prisma.AccompagnateurCreateWithoutOrdreMissionInput[] | Prisma.AccompagnateurUncheckedCreateWithoutOrdreMissionInput[];
    connectOrCreate?: Prisma.AccompagnateurCreateOrConnectWithoutOrdreMissionInput | Prisma.AccompagnateurCreateOrConnectWithoutOrdreMissionInput[];
    createMany?: Prisma.AccompagnateurCreateManyOrdreMissionInputEnvelope;
    connect?: Prisma.AccompagnateurWhereUniqueInput | Prisma.AccompagnateurWhereUniqueInput[];
};
export type AccompagnateurUncheckedCreateNestedManyWithoutOrdreMissionInput = {
    create?: Prisma.XOR<Prisma.AccompagnateurCreateWithoutOrdreMissionInput, Prisma.AccompagnateurUncheckedCreateWithoutOrdreMissionInput> | Prisma.AccompagnateurCreateWithoutOrdreMissionInput[] | Prisma.AccompagnateurUncheckedCreateWithoutOrdreMissionInput[];
    connectOrCreate?: Prisma.AccompagnateurCreateOrConnectWithoutOrdreMissionInput | Prisma.AccompagnateurCreateOrConnectWithoutOrdreMissionInput[];
    createMany?: Prisma.AccompagnateurCreateManyOrdreMissionInputEnvelope;
    connect?: Prisma.AccompagnateurWhereUniqueInput | Prisma.AccompagnateurWhereUniqueInput[];
};
export type AccompagnateurUpdateManyWithoutOrdreMissionNestedInput = {
    create?: Prisma.XOR<Prisma.AccompagnateurCreateWithoutOrdreMissionInput, Prisma.AccompagnateurUncheckedCreateWithoutOrdreMissionInput> | Prisma.AccompagnateurCreateWithoutOrdreMissionInput[] | Prisma.AccompagnateurUncheckedCreateWithoutOrdreMissionInput[];
    connectOrCreate?: Prisma.AccompagnateurCreateOrConnectWithoutOrdreMissionInput | Prisma.AccompagnateurCreateOrConnectWithoutOrdreMissionInput[];
    upsert?: Prisma.AccompagnateurUpsertWithWhereUniqueWithoutOrdreMissionInput | Prisma.AccompagnateurUpsertWithWhereUniqueWithoutOrdreMissionInput[];
    createMany?: Prisma.AccompagnateurCreateManyOrdreMissionInputEnvelope;
    set?: Prisma.AccompagnateurWhereUniqueInput | Prisma.AccompagnateurWhereUniqueInput[];
    disconnect?: Prisma.AccompagnateurWhereUniqueInput | Prisma.AccompagnateurWhereUniqueInput[];
    delete?: Prisma.AccompagnateurWhereUniqueInput | Prisma.AccompagnateurWhereUniqueInput[];
    connect?: Prisma.AccompagnateurWhereUniqueInput | Prisma.AccompagnateurWhereUniqueInput[];
    update?: Prisma.AccompagnateurUpdateWithWhereUniqueWithoutOrdreMissionInput | Prisma.AccompagnateurUpdateWithWhereUniqueWithoutOrdreMissionInput[];
    updateMany?: Prisma.AccompagnateurUpdateManyWithWhereWithoutOrdreMissionInput | Prisma.AccompagnateurUpdateManyWithWhereWithoutOrdreMissionInput[];
    deleteMany?: Prisma.AccompagnateurScalarWhereInput | Prisma.AccompagnateurScalarWhereInput[];
};
export type AccompagnateurUncheckedUpdateManyWithoutOrdreMissionNestedInput = {
    create?: Prisma.XOR<Prisma.AccompagnateurCreateWithoutOrdreMissionInput, Prisma.AccompagnateurUncheckedCreateWithoutOrdreMissionInput> | Prisma.AccompagnateurCreateWithoutOrdreMissionInput[] | Prisma.AccompagnateurUncheckedCreateWithoutOrdreMissionInput[];
    connectOrCreate?: Prisma.AccompagnateurCreateOrConnectWithoutOrdreMissionInput | Prisma.AccompagnateurCreateOrConnectWithoutOrdreMissionInput[];
    upsert?: Prisma.AccompagnateurUpsertWithWhereUniqueWithoutOrdreMissionInput | Prisma.AccompagnateurUpsertWithWhereUniqueWithoutOrdreMissionInput[];
    createMany?: Prisma.AccompagnateurCreateManyOrdreMissionInputEnvelope;
    set?: Prisma.AccompagnateurWhereUniqueInput | Prisma.AccompagnateurWhereUniqueInput[];
    disconnect?: Prisma.AccompagnateurWhereUniqueInput | Prisma.AccompagnateurWhereUniqueInput[];
    delete?: Prisma.AccompagnateurWhereUniqueInput | Prisma.AccompagnateurWhereUniqueInput[];
    connect?: Prisma.AccompagnateurWhereUniqueInput | Prisma.AccompagnateurWhereUniqueInput[];
    update?: Prisma.AccompagnateurUpdateWithWhereUniqueWithoutOrdreMissionInput | Prisma.AccompagnateurUpdateWithWhereUniqueWithoutOrdreMissionInput[];
    updateMany?: Prisma.AccompagnateurUpdateManyWithWhereWithoutOrdreMissionInput | Prisma.AccompagnateurUpdateManyWithWhereWithoutOrdreMissionInput[];
    deleteMany?: Prisma.AccompagnateurScalarWhereInput | Prisma.AccompagnateurScalarWhereInput[];
};
export type AccompagnateurCreateWithoutEmployeInput = {
    ordreMission: Prisma.OrdreMissionCreateNestedOneWithoutAccompagnateursInput;
};
export type AccompagnateurUncheckedCreateWithoutEmployeInput = {
    id?: number;
    ordreMissionId: number;
};
export type AccompagnateurCreateOrConnectWithoutEmployeInput = {
    where: Prisma.AccompagnateurWhereUniqueInput;
    create: Prisma.XOR<Prisma.AccompagnateurCreateWithoutEmployeInput, Prisma.AccompagnateurUncheckedCreateWithoutEmployeInput>;
};
export type AccompagnateurCreateManyEmployeInputEnvelope = {
    data: Prisma.AccompagnateurCreateManyEmployeInput | Prisma.AccompagnateurCreateManyEmployeInput[];
    skipDuplicates?: boolean;
};
export type AccompagnateurUpsertWithWhereUniqueWithoutEmployeInput = {
    where: Prisma.AccompagnateurWhereUniqueInput;
    update: Prisma.XOR<Prisma.AccompagnateurUpdateWithoutEmployeInput, Prisma.AccompagnateurUncheckedUpdateWithoutEmployeInput>;
    create: Prisma.XOR<Prisma.AccompagnateurCreateWithoutEmployeInput, Prisma.AccompagnateurUncheckedCreateWithoutEmployeInput>;
};
export type AccompagnateurUpdateWithWhereUniqueWithoutEmployeInput = {
    where: Prisma.AccompagnateurWhereUniqueInput;
    data: Prisma.XOR<Prisma.AccompagnateurUpdateWithoutEmployeInput, Prisma.AccompagnateurUncheckedUpdateWithoutEmployeInput>;
};
export type AccompagnateurUpdateManyWithWhereWithoutEmployeInput = {
    where: Prisma.AccompagnateurScalarWhereInput;
    data: Prisma.XOR<Prisma.AccompagnateurUpdateManyMutationInput, Prisma.AccompagnateurUncheckedUpdateManyWithoutEmployeInput>;
};
export type AccompagnateurScalarWhereInput = {
    AND?: Prisma.AccompagnateurScalarWhereInput | Prisma.AccompagnateurScalarWhereInput[];
    OR?: Prisma.AccompagnateurScalarWhereInput[];
    NOT?: Prisma.AccompagnateurScalarWhereInput | Prisma.AccompagnateurScalarWhereInput[];
    id?: Prisma.IntFilter<"Accompagnateur"> | number;
    ordreMissionId?: Prisma.IntFilter<"Accompagnateur"> | number;
    employeId?: Prisma.IntFilter<"Accompagnateur"> | number;
};
export type AccompagnateurCreateWithoutOrdreMissionInput = {
    employe: Prisma.EmployeCreateNestedOneWithoutAccompagnementsInput;
};
export type AccompagnateurUncheckedCreateWithoutOrdreMissionInput = {
    id?: number;
    employeId: number;
};
export type AccompagnateurCreateOrConnectWithoutOrdreMissionInput = {
    where: Prisma.AccompagnateurWhereUniqueInput;
    create: Prisma.XOR<Prisma.AccompagnateurCreateWithoutOrdreMissionInput, Prisma.AccompagnateurUncheckedCreateWithoutOrdreMissionInput>;
};
export type AccompagnateurCreateManyOrdreMissionInputEnvelope = {
    data: Prisma.AccompagnateurCreateManyOrdreMissionInput | Prisma.AccompagnateurCreateManyOrdreMissionInput[];
    skipDuplicates?: boolean;
};
export type AccompagnateurUpsertWithWhereUniqueWithoutOrdreMissionInput = {
    where: Prisma.AccompagnateurWhereUniqueInput;
    update: Prisma.XOR<Prisma.AccompagnateurUpdateWithoutOrdreMissionInput, Prisma.AccompagnateurUncheckedUpdateWithoutOrdreMissionInput>;
    create: Prisma.XOR<Prisma.AccompagnateurCreateWithoutOrdreMissionInput, Prisma.AccompagnateurUncheckedCreateWithoutOrdreMissionInput>;
};
export type AccompagnateurUpdateWithWhereUniqueWithoutOrdreMissionInput = {
    where: Prisma.AccompagnateurWhereUniqueInput;
    data: Prisma.XOR<Prisma.AccompagnateurUpdateWithoutOrdreMissionInput, Prisma.AccompagnateurUncheckedUpdateWithoutOrdreMissionInput>;
};
export type AccompagnateurUpdateManyWithWhereWithoutOrdreMissionInput = {
    where: Prisma.AccompagnateurScalarWhereInput;
    data: Prisma.XOR<Prisma.AccompagnateurUpdateManyMutationInput, Prisma.AccompagnateurUncheckedUpdateManyWithoutOrdreMissionInput>;
};
export type AccompagnateurCreateManyEmployeInput = {
    id?: number;
    ordreMissionId: number;
};
export type AccompagnateurUpdateWithoutEmployeInput = {
    ordreMission?: Prisma.OrdreMissionUpdateOneRequiredWithoutAccompagnateursNestedInput;
};
export type AccompagnateurUncheckedUpdateWithoutEmployeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    ordreMissionId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type AccompagnateurUncheckedUpdateManyWithoutEmployeInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    ordreMissionId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type AccompagnateurCreateManyOrdreMissionInput = {
    id?: number;
    employeId: number;
};
export type AccompagnateurUpdateWithoutOrdreMissionInput = {
    employe?: Prisma.EmployeUpdateOneRequiredWithoutAccompagnementsNestedInput;
};
export type AccompagnateurUncheckedUpdateWithoutOrdreMissionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    employeId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type AccompagnateurUncheckedUpdateManyWithoutOrdreMissionInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    employeId?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type AccompagnateurSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ordreMissionId?: boolean;
    employeId?: boolean;
    ordreMission?: boolean | Prisma.OrdreMissionDefaultArgs<ExtArgs>;
    employe?: boolean | Prisma.EmployeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["accompagnateur"]>;
export type AccompagnateurSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ordreMissionId?: boolean;
    employeId?: boolean;
    ordreMission?: boolean | Prisma.OrdreMissionDefaultArgs<ExtArgs>;
    employe?: boolean | Prisma.EmployeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["accompagnateur"]>;
export type AccompagnateurSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    ordreMissionId?: boolean;
    employeId?: boolean;
    ordreMission?: boolean | Prisma.OrdreMissionDefaultArgs<ExtArgs>;
    employe?: boolean | Prisma.EmployeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["accompagnateur"]>;
export type AccompagnateurSelectScalar = {
    id?: boolean;
    ordreMissionId?: boolean;
    employeId?: boolean;
};
export type AccompagnateurOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "ordreMissionId" | "employeId", ExtArgs["result"]["accompagnateur"]>;
export type AccompagnateurInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ordreMission?: boolean | Prisma.OrdreMissionDefaultArgs<ExtArgs>;
    employe?: boolean | Prisma.EmployeDefaultArgs<ExtArgs>;
};
export type AccompagnateurIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ordreMission?: boolean | Prisma.OrdreMissionDefaultArgs<ExtArgs>;
    employe?: boolean | Prisma.EmployeDefaultArgs<ExtArgs>;
};
export type AccompagnateurIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ordreMission?: boolean | Prisma.OrdreMissionDefaultArgs<ExtArgs>;
    employe?: boolean | Prisma.EmployeDefaultArgs<ExtArgs>;
};
export type $AccompagnateurPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Accompagnateur";
    objects: {
        ordreMission: Prisma.$OrdreMissionPayload<ExtArgs>;
        employe: Prisma.$EmployePayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        ordreMissionId: number;
        employeId: number;
    }, ExtArgs["result"]["accompagnateur"]>;
    composites: {};
};
export type AccompagnateurGetPayload<S extends boolean | null | undefined | AccompagnateurDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AccompagnateurPayload, S>;
export type AccompagnateurCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AccompagnateurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AccompagnateurCountAggregateInputType | true;
};
export interface AccompagnateurDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Accompagnateur'];
        meta: {
            name: 'Accompagnateur';
        };
    };
    findUnique<T extends AccompagnateurFindUniqueArgs>(args: Prisma.SelectSubset<T, AccompagnateurFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AccompagnateurClient<runtime.Types.Result.GetResult<Prisma.$AccompagnateurPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AccompagnateurFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AccompagnateurFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AccompagnateurClient<runtime.Types.Result.GetResult<Prisma.$AccompagnateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AccompagnateurFindFirstArgs>(args?: Prisma.SelectSubset<T, AccompagnateurFindFirstArgs<ExtArgs>>): Prisma.Prisma__AccompagnateurClient<runtime.Types.Result.GetResult<Prisma.$AccompagnateurPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AccompagnateurFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AccompagnateurFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AccompagnateurClient<runtime.Types.Result.GetResult<Prisma.$AccompagnateurPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AccompagnateurFindManyArgs>(args?: Prisma.SelectSubset<T, AccompagnateurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AccompagnateurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AccompagnateurCreateArgs>(args: Prisma.SelectSubset<T, AccompagnateurCreateArgs<ExtArgs>>): Prisma.Prisma__AccompagnateurClient<runtime.Types.Result.GetResult<Prisma.$AccompagnateurPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AccompagnateurCreateManyArgs>(args?: Prisma.SelectSubset<T, AccompagnateurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AccompagnateurCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AccompagnateurCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AccompagnateurPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AccompagnateurDeleteArgs>(args: Prisma.SelectSubset<T, AccompagnateurDeleteArgs<ExtArgs>>): Prisma.Prisma__AccompagnateurClient<runtime.Types.Result.GetResult<Prisma.$AccompagnateurPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AccompagnateurUpdateArgs>(args: Prisma.SelectSubset<T, AccompagnateurUpdateArgs<ExtArgs>>): Prisma.Prisma__AccompagnateurClient<runtime.Types.Result.GetResult<Prisma.$AccompagnateurPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AccompagnateurDeleteManyArgs>(args?: Prisma.SelectSubset<T, AccompagnateurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AccompagnateurUpdateManyArgs>(args: Prisma.SelectSubset<T, AccompagnateurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AccompagnateurUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AccompagnateurUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AccompagnateurPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AccompagnateurUpsertArgs>(args: Prisma.SelectSubset<T, AccompagnateurUpsertArgs<ExtArgs>>): Prisma.Prisma__AccompagnateurClient<runtime.Types.Result.GetResult<Prisma.$AccompagnateurPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AccompagnateurCountArgs>(args?: Prisma.Subset<T, AccompagnateurCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AccompagnateurCountAggregateOutputType> : number>;
    aggregate<T extends AccompagnateurAggregateArgs>(args: Prisma.Subset<T, AccompagnateurAggregateArgs>): Prisma.PrismaPromise<GetAccompagnateurAggregateType<T>>;
    groupBy<T extends AccompagnateurGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AccompagnateurGroupByArgs['orderBy'];
    } : {
        orderBy?: AccompagnateurGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AccompagnateurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccompagnateurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AccompagnateurFieldRefs;
}
export interface Prisma__AccompagnateurClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    ordreMission<T extends Prisma.OrdreMissionDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OrdreMissionDefaultArgs<ExtArgs>>): Prisma.Prisma__OrdreMissionClient<runtime.Types.Result.GetResult<Prisma.$OrdreMissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    employe<T extends Prisma.EmployeDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EmployeDefaultArgs<ExtArgs>>): Prisma.Prisma__EmployeClient<runtime.Types.Result.GetResult<Prisma.$EmployePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AccompagnateurFieldRefs {
    readonly id: Prisma.FieldRef<"Accompagnateur", 'Int'>;
    readonly ordreMissionId: Prisma.FieldRef<"Accompagnateur", 'Int'>;
    readonly employeId: Prisma.FieldRef<"Accompagnateur", 'Int'>;
}
export type AccompagnateurFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccompagnateurSelect<ExtArgs> | null;
    omit?: Prisma.AccompagnateurOmit<ExtArgs> | null;
    include?: Prisma.AccompagnateurInclude<ExtArgs> | null;
    where: Prisma.AccompagnateurWhereUniqueInput;
};
export type AccompagnateurFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccompagnateurSelect<ExtArgs> | null;
    omit?: Prisma.AccompagnateurOmit<ExtArgs> | null;
    include?: Prisma.AccompagnateurInclude<ExtArgs> | null;
    where: Prisma.AccompagnateurWhereUniqueInput;
};
export type AccompagnateurFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AccompagnateurFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AccompagnateurFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type AccompagnateurCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccompagnateurSelect<ExtArgs> | null;
    omit?: Prisma.AccompagnateurOmit<ExtArgs> | null;
    include?: Prisma.AccompagnateurInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AccompagnateurCreateInput, Prisma.AccompagnateurUncheckedCreateInput>;
};
export type AccompagnateurCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AccompagnateurCreateManyInput | Prisma.AccompagnateurCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AccompagnateurCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccompagnateurSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AccompagnateurOmit<ExtArgs> | null;
    data: Prisma.AccompagnateurCreateManyInput | Prisma.AccompagnateurCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AccompagnateurIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AccompagnateurUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccompagnateurSelect<ExtArgs> | null;
    omit?: Prisma.AccompagnateurOmit<ExtArgs> | null;
    include?: Prisma.AccompagnateurInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AccompagnateurUpdateInput, Prisma.AccompagnateurUncheckedUpdateInput>;
    where: Prisma.AccompagnateurWhereUniqueInput;
};
export type AccompagnateurUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AccompagnateurUpdateManyMutationInput, Prisma.AccompagnateurUncheckedUpdateManyInput>;
    where?: Prisma.AccompagnateurWhereInput;
    limit?: number;
};
export type AccompagnateurUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccompagnateurSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AccompagnateurOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AccompagnateurUpdateManyMutationInput, Prisma.AccompagnateurUncheckedUpdateManyInput>;
    where?: Prisma.AccompagnateurWhereInput;
    limit?: number;
    include?: Prisma.AccompagnateurIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AccompagnateurUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccompagnateurSelect<ExtArgs> | null;
    omit?: Prisma.AccompagnateurOmit<ExtArgs> | null;
    include?: Prisma.AccompagnateurInclude<ExtArgs> | null;
    where: Prisma.AccompagnateurWhereUniqueInput;
    create: Prisma.XOR<Prisma.AccompagnateurCreateInput, Prisma.AccompagnateurUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AccompagnateurUpdateInput, Prisma.AccompagnateurUncheckedUpdateInput>;
};
export type AccompagnateurDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccompagnateurSelect<ExtArgs> | null;
    omit?: Prisma.AccompagnateurOmit<ExtArgs> | null;
    include?: Prisma.AccompagnateurInclude<ExtArgs> | null;
    where: Prisma.AccompagnateurWhereUniqueInput;
};
export type AccompagnateurDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AccompagnateurWhereInput;
    limit?: number;
};
export type AccompagnateurDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccompagnateurSelect<ExtArgs> | null;
    omit?: Prisma.AccompagnateurOmit<ExtArgs> | null;
    include?: Prisma.AccompagnateurInclude<ExtArgs> | null;
};
