"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { FiAlertTriangle, FiCheckCircle, FiSave, FiSettings, FiTrash2, FiX } from "react-icons/fi";
import {
  ApiRequestError,
  CREATE_STORE_ROUTE,
  deleteCurrentStore,
  fetchCurrentStore,
  updateCurrentStore,
} from "@/lib/stores";

export default function Configuracoes() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState("");
  const [deleteErrorMessage, setDeleteErrorMessage] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadStore() {
      const token = localStorage.getItem("api_token");

      if (!token) {
        router.replace("/login");
        return;
      }

      try {
        const store = await fetchCurrentStore(token);

        if (isMounted) {
          setName(store.name ?? "");
          setDescription(store.description ?? "");
        }
      } catch (error) {
        if (error instanceof ApiRequestError && error.status === 404) {
          router.replace(CREATE_STORE_ROUTE);
          return;
        }

        setErrorMessage(error instanceof Error ? error.message : "Erro ao carregar dados da loja.");
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadStore();

    return () => {
      isMounted = false;
    };
  }, [router]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    if (!name.trim()) {
      setErrorMessage("Informe o nome da loja.");
      return;
    }

    const token = localStorage.getItem("api_token");

    if (!token) {
      router.replace("/login");
      return;
    }

    try {
      setIsSaving(true);
      const store = await updateCurrentStore(token, {
        name: name.trim(),
        description: description.trim(),
      });

      setName(store.name ?? "");
      setDescription(store.description ?? "");
      setShowSuccess(true);
      window.setTimeout(() => {
        setShowSuccess(false);
        router.push("/loja");
      }, 900);
    } catch (error) {
      if (error instanceof ApiRequestError && error.status === 404) {
        router.replace(CREATE_STORE_ROUTE);
        return;
      }

      setErrorMessage(error instanceof Error ? error.message : "Erro ao atualizar loja.");
    } finally {
      setIsSaving(false);
    }
  }

  function openDeleteModal() {
    setDeleteConfirmation("");
    setDeleteErrorMessage("");
    setIsDeleteModalOpen(true);
  }

  function closeDeleteModal() {
    if (isDeleting) {
      return;
    }

    setIsDeleteModalOpen(false);
    setDeleteConfirmation("");
    setDeleteErrorMessage("");
  }

  async function handleDeleteStore() {
    setDeleteErrorMessage("");

    if (deleteConfirmation.trim() !== "DELETAR") {
      setDeleteErrorMessage('Digite "DELETAR" para confirmar a exclusao permanente.');
      return;
    }

    const token = localStorage.getItem("api_token");

    if (!token) {
      router.replace("/login");
      return;
    }

    try {
      setIsDeleting(true);
      await deleteCurrentStore(token);
      router.replace(CREATE_STORE_ROUTE);
    } catch (error) {
      if (error instanceof ApiRequestError && error.status === 401) {
        router.replace("/login");
        return;
      }

      if (error instanceof ApiRequestError && error.status === 404) {
        router.replace(CREATE_STORE_ROUTE);
        return;
      }

      setDeleteErrorMessage(error instanceof Error ? error.message : "Erro ao excluir loja.");
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <main className="min-h-screen bg-[#F3F4F6] px-5 py-8 md:px-8">
      {showSuccess ? (
        <div className="fixed right-5 top-24 z-50 flex items-center gap-3 rounded-lg border border-emerald-200 bg-white px-5 py-4 text-sm font-semibold text-emerald-700 shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
          <FiCheckCircle className="h-5 w-5" />
          Dados da loja atualizados com sucesso.
        </div>
      ) : null}

      <div className="mx-auto w-full max-w-4xl">
        <section className="mb-6 flex items-center gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#F1EEFF] text-[#4D22F2]">
            <FiSettings className="h-6 w-6" />
          </span>
          <div>
            <h1 className="text-2xl font-bold text-[#1A1C27]">Configuracoes da Loja</h1>
            <p className="mt-1 text-sm text-gray-600">Atualize o nome e a descricao exibidos no perfil da sua loja.</p>
          </div>
        </section>

        <form
          onSubmit={handleSubmit}
          className="rounded-lg border border-[#E3E7F1] bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.05)] md:p-8"
        >
          {isLoading ? (
            <p className="text-sm text-gray-600">Carregando dados da loja...</p>
          ) : (
            <div className="space-y-6">
              <div>
                <label htmlFor="store-name" className="text-sm font-bold text-[#1B2744]">
                  Nome da loja
                </label>
                <input
                  id="store-name"
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="mt-2 h-12 w-full rounded-lg border border-[#DDE3F0] px-4 text-sm text-[#1B2744] outline-none transition focus:border-[#6B3DF2] focus:ring-2 focus:ring-[#6B3DF2]/10"
                  placeholder="Nome da loja"
                />
              </div>

              <div>
                <label htmlFor="store-description" className="text-sm font-bold text-[#1B2744]">
                  Descricao
                </label>
                <textarea
                  id="store-description"
                  value={description}
                  onChange={(event) => setDescription(event.target.value)}
                  className="mt-2 min-h-[150px] w-full resize-none rounded-lg border border-[#DDE3F0] px-4 py-4 text-sm leading-6 text-[#1B2744] outline-none transition focus:border-[#6B3DF2] focus:ring-2 focus:ring-[#6B3DF2]/10"
                  placeholder="Conte um pouco sobre sua loja"
                />
              </div>

              {errorMessage ? (
                <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                  {errorMessage}
                </p>
              ) : null}

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSaving}
                  className="flex h-12 cursor-pointer items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-[#7B2FFF] to-[#0B78F6] px-6 text-sm font-bold text-white shadow-[0_14px_28px_rgba(80,70,230,0.22)] transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <FiSave className="h-5 w-5" />
                  {isSaving ? "Salvando..." : "Salvar alteracoes"}
                </button>
              </div>
            </div>
          )}
        </form>

        <section className="mt-6 rounded-lg border border-red-200 bg-white p-6 shadow-[0_18px_45px_rgba(15,23,42,0.05)] md:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600">
                <FiAlertTriangle className="h-5 w-5" />
              </span>
              <div>
                <h2 className="text-lg font-bold text-[#1A1C27]">Excluir loja permanentemente</h2>
                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-600">
                  Esta acao remove a loja e todos os dados vinculados a ela. Depois de confirmar, nao sera possivel
                  desfazer.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={openDeleteModal}
              disabled={isLoading}
              className="flex h-12 shrink-0 cursor-pointer items-center justify-center gap-3 rounded-lg bg-red-600 px-5 text-sm font-bold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <FiTrash2 className="h-5 w-5" />
              Excluir loja permanentemente
            </button>
          </div>
        </section>
      </div>

      {isDeleteModalOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/55 px-5 py-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="delete-store-title"
        >
          <div className="w-full max-w-lg rounded-lg bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.28)]">
            <div className="flex items-start justify-between gap-4">
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-600">
                  <FiAlertTriangle className="h-5 w-5" />
                </span>
                <div>
                  <h2 id="delete-store-title" className="text-lg font-bold text-[#1A1C27]">
                    Excluir loja permanentemente?
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    Todos os produtos, pedidos, colecoes e dados vinculados a loja serao removidos.
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={closeDeleteModal}
                disabled={isDeleting}
                className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-lg text-gray-500 transition hover:bg-gray-100 hover:text-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
                aria-label="Fechar modal"
              >
                <FiX className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6">
              <label htmlFor="delete-confirmation" className="text-sm font-bold text-[#1B2744]">
                Digite DELETAR para confirmar
              </label>
              <input
                id="delete-confirmation"
                type="text"
                value={deleteConfirmation}
                onChange={(event) => setDeleteConfirmation(event.target.value)}
                disabled={isDeleting}
                className="mt-2 h-12 w-full rounded-lg border border-[#DDE3F0] px-4 text-sm text-[#1B2744] outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-500/10 disabled:bg-gray-50"
                placeholder="DELETAR"
              />
            </div>

            {deleteErrorMessage ? (
              <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                {deleteErrorMessage}
              </p>
            ) : null}

            <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={closeDeleteModal}
                disabled={isDeleting}
                className="flex h-11 cursor-pointer items-center justify-center rounded-lg border border-[#DDE3F0] px-5 text-sm font-bold text-[#1B2744] transition hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={handleDeleteStore}
                disabled={isDeleting || deleteConfirmation.trim() !== "DELETAR"}
                className="flex h-11 cursor-pointer items-center justify-center gap-3 rounded-lg bg-red-600 px-5 text-sm font-bold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <FiTrash2 className="h-5 w-5" />
                {isDeleting ? "Excluindo..." : "Excluir definitivamente"}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
