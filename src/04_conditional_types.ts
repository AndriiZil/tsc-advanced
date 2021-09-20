interface StringId {
    id: string;
}

interface NumberId {
    id: number;
}

type Id<T> = T extends string
    ? StringId
    : NumberId;

let oneId: Id<string>;
let twoId: Id<number>;

oneId = { id: '12' }

twoId = { id: 12 }
