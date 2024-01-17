import { ref, watchEffect } from 'vue';

interface Params {
  [key: string]: string;
}

export const useParams = () => {
  const getUrlSearchParams = (): Params | null => {
    const searchParams = new URLSearchParams(window.location.search);
    const params: Params = {};

    for (const [key, value] of searchParams) {
      params[key] = value;
    }

    return Object.keys(params).length > 0 ? params : null;
  };

  const searchParams = ref(getUrlSearchParams());

  watchEffect(() => {
    searchParams.value = getUrlSearchParams();
  });

  return searchParams.value;
};
