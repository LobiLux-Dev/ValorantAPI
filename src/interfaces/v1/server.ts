import { Data } from './endpoints'

export interface ServerResponse<T extends Data> {
	status: number
	error?: string
	data?: T[]
}
