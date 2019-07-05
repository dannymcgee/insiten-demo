export enum Status {
	Researching,
	Pending,
	Approved,
	Declined
}

export const statusMap = [
	{ key: 'researching', description: 'Researching', icon: 'flask' },
	{ key: 'pending', description: 'Pending', icon: 'handshake' },
	{ key: 'approved', description: 'Approved', icon: 'check-circle' },
	{ key: 'declined', description: 'Declined', icon: 'ban' }
];
