import fr from './fr';
import en from './en';
import de from './de';
import es from './es';
import it from './it';
import pt from './pt';
import sv from './sv';
import no from './no';
import da from './da';

export const dictionaries = {
  fr,
  en,
  de,
  es,
  it,
  pt,
  sv,
  no,
  da,
};

export type Dict = typeof dictionaries.fr;
