import { Endpoints } from './'

export interface ServerResponse<T extends Endpoints> {
	status: number
	error?: string
	data?: T[]
}
