import { useParams } from './params';

export const useBoxRedirect = () => {
  const params = useParams();
  const BASE_LINK = `https://checkout.sollenaturals.com/?order_type_id=40&products%5B1094%5D=1`;

  if (!params) return BASE_LINK;

  const stringParams = Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

  return `${BASE_LINK}&${stringParams}`;
};

export const LINK_TO_BOX = useBoxRedirect();
