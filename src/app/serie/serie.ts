/**
 * Esta clase representa una serie.
 * Contiene toda la informacion relevante para la serie.
 */
export interface Serie {

  /**
   * id de la serie
   */
  id: number;

  /**
   * Link a la serie
   */
  webpage: string;

  /**
   * Nombre de la serie
   */
  name: string;

  /**
   * Canal duenio de la serie
   */
  channel: string;

  /**
   * Numero de temporadas que tiene la serie
   */
  seasons: number;

  /**
   * caratula de la serie
   */
  poster:string;

  /**
   * Sinopsos de la serie
   */
  description: string

}
