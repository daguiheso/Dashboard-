
export interface Profile {
	id?: string;
	firstName: string;
	lastName: string;
	phoneNumber: number;
	email: string;
	// role?: string;
	userId: string;
}

export interface Role {
	name: string;
	permission: string[];
}

export interface Permission {
	id: string;
	name: string;
	model: string;
}

