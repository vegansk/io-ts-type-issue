import * as t from 'io-ts'

export function mkType<R extends t.Props, O extends t.Props>(
    required: R, optional: O, name?: string
) {
    return t.readonly(t.intersection([t.interface(required), t.partial(optional)]), name)
}

export const date: t.Type<Date> = {
    _A: t._A,
    name: "Date",
    validate: (v, c) => {
        if (v instanceof Date)
            return t.success(v)
        else if (typeof v === "string") {
            const d = new Date(v)
            return isNaN(d.getTime()) ? t.failure<Date>(v, c) : t.success(d)
        } else
            return t.failure<Date>(v, c)
    }
}

const UUIDFormat = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/
export const UUIDType: t.Type<string> = {
    _A: t._A,
    name: "UUID",
    validate: (v, c) => {
        return UUIDFormat.test(v) ? t.success(v) : t.failure<string>(v, c)
    }
}
export type UUID = t.TypeOf<typeof UUIDType>
