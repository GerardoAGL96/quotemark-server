/* eslint-disable camelcase, no-unused-vars */
import Knex from 'knex'

export type Context = {
  knex: Knex,
  user: {
    id: string
    firstName: string
    lastName: string
    email: string
    avatar: string
    role: 'admin' | 'user',
    status: 'active' | 'banned',
    createdAt: string
    updatedAt: string
    deletedAt: string
  },
}

export type Value = string | number | boolean;

export type Filter<T> = {
  [key in keyof T]: {
    equals?: Value,
    not_equals?: Value,
    in?: Array<Value>,
    not_in?: Array<Value>,
    lt?: Value,
    lte?: Value,
    gt?: Value,
    gte?: Value,
    contains?: Value,
    starts_with?: Value,
    not_starts_with?: Value,
    ends_with?: Value,
    not_ends_with?: Value,
  }
}

export type ListArguments<T> = {
  first?: number,
  skip?: number,
  filter?: Filter<Partial<T>>
}
