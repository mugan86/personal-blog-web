import { PORTFOLIO_ITEMS } from "@core/constants/portfolio";

export async function pagination(
    page: number = 1,
    itemsPage: number = 20,
    filter: object = {}
  ) {
      // Comprobar el numero de items por pagina
      if (itemsPage < 1 || itemsPage > 10) {
          itemsPage = 10;
      }
      if (page < 1) {
          page = 1;
      }
      const total = PORTFOLIO_ITEMS.length; // Habría que aplicar  filtros, ahora coge todo
      const pages = Math.ceil(total / itemsPage);
      return {
          page,
          skip: (page - 1) * itemsPage,
          itemsPage,
          total,
          pages
      };
  }