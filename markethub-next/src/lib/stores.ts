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
  userId?: string;
  name: string;
  description?: string | null;
  products?: StoreProductSummary[];
  createdAt?: string;
  updatedAt?: string;
};

export type StoreProductSummary = {
  id: string;
  productUrl?: string;
  name: string;
  description?: string | null;
  price: string | number;
  active?: boolean;
  createdAt?: string;
  updatedAt?: string;
};

type StoreProfileApi = {
  id: string;
  userId?: string;
  name: string;
  description?: string | null;
  products?: StoreProductSummary[];
  createdAT?: string;
  updatedAT?: string;
  createdAt?: string;
  updatedAt?: string;
};

function normalizeStoreProfile(store: StoreProfileApi): StoreProfile {
  return {
    id: store.id,
    userId: store.userId,
    name: store.name,
    description: store.description ?? null,
    products: store.products?.map((product) => ({
      id: product.id,
      productUrl: product.productUrl,
      name: product.name,
      description: product.description ?? null,
      price: product.price,
      active: product.active,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    })),
    createdAt: store.createdAt ?? store.createdAT,
    updatedAt: store.updatedAt ?? store.updatedAT,
  };
}

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

  const data = (await response.json()) as StoreProfileApi;
  return normalizeStoreProfile(data);
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

  const responseData = (await response.json()) as StoreProfileApi;
  return normalizeStoreProfile(responseData);
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

export async function fetchAllStores(token?: string): Promise<StoreProfile[]> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}/v1/stores`, {
    method: "GET",
    headers,
  });

  if (!response.ok) {
    throw new ApiRequestError(response.status, await readErrorMessage(response));
  }

  const data = (await response.json()) as StoreProfileApi[];
  return data.map(normalizeStoreProfile);
}

export async function fetchStoreById(token: string | undefined, storeId: string): Promise<StoreProfile> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}/v1/stores/${storeId}`, {
    method: "GET",
    headers,
  });

  if (!response.ok) {
    throw new ApiRequestError(response.status, await readErrorMessage(response));
  }

  const data = (await response.json()) as StoreProfileApi;
  return normalizeStoreProfile(data);
}

export async function fetchStoreByIdOrFromList(token: string | undefined, storeId: string): Promise<StoreProfile> {
  try {
    return await fetchStoreById(token, storeId);
  } catch (error) {
    if (!(error instanceof ApiRequestError) || error.status !== 404) {
      throw error;
    }

    const stores = await fetchAllStores(token);
    const store = stores.find((item) => String(item.id) === String(storeId));

    if (!store) {
      throw error;
    }

    return store;
  }
}
