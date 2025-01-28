import { EnumLanguages } from '@/app/i18n';

export interface ILanguageSelectorItem {
  text: string;
  value: EnumLanguages;
}

export interface ILanguageSelectorOption {
  label: string;
  items: ILanguageSelectorItem[];
}

export interface ICountrySelectorItem {
  text: string;
  value: number;
}

export interface ICountrySelectorOption {
  label: string;
  items: ICountrySelectorItem[];
}
