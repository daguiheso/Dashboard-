
export interface Profile {
	firstName: string;
	lastName: string;
	phoneNumber: number;
	email: string;
	role?: string;
	userId: string;
}

export interface Role {
	name: string;
	permission: string[];
}