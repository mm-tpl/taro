import setstorage from '../set';

export default async function set01factory(dfactory01: string) {
	await setstorage(setstorage.keys.dfactory01, dfactory01);
}
