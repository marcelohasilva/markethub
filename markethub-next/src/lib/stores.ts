export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:3000";
export const CREATE_STORE_ROUTE = "/cadastrarloja";

export class ApiRequestError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.name = "ApiRequestError";
    this.status = status;
  }
}

export type StoreProfile = {
  id: string;
  name: string;
  description?: string | null;
  createdAt?: string;
  updatedAt?: string;
};

async function readErrorMessage(response: Response) {
  try {
    const data = await response.json();
    return data?.message || "Erro ao buscar loja";
  } catch {
    return "Erro ao buscar loja";
  }
}

export async function fetchCurrentStore(token: string): Promise<StoreProfile> {
  const response = await fetch(`${API_BASE_URL}/v1/stores/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new ApiRequestError(response.status, await readErrorMessage(response));
  }

  return response.json();
}

export async function updateCurrentStore(
  token: string,
  data: Pick<StoreProfile, "name" | "description">,
): Promise<StoreProfile> {
  const response = await fetch(`${API_BASE_URL}/v1/stores/me`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new ApiRequestError(response.status, await readErrorMessage(response));
  }

  return response.json();
}

export async function deleteCurrentStore(token: string): Promise<void> {
  const response = await fetch(`${API_BASE_URL}/v1/stores/me`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new ApiRequestError(response.status, await readErrorMessage(response));
  }
}
