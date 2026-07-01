const API_URL = import.meta.env.VITE_API_URL;

export async function waitForBackend() {
    while (true) {
        try {
            const response = await fetch(`${API_URL}/health`);

            if (response.ok) {
                return;
            }
        } catch (_) { }

        console.log("Backend is sleeping...");

        await new Promise(resolve => setTimeout(resolve, 5000));
    }
}