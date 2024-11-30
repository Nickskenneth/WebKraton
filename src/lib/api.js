export async function getOrganisasi() {
	try {
		const response = await fetch('http://manpro.crossnet.co.id:8080/organisasi');
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}
		return await response.json();
	} catch (error) {
		console.error('Error fetching organisasi:', error);
		throw error;
	}
}
