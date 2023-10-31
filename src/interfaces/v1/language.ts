/**
 * Enum representing different languages and their corresponding abbreviations.
 */
export enum CodeLang {
	/**
	 * Arabic language with abbreviation 'ar-AE' (United Arab Emirates).
	 */
	Arabic = 'ar-AE',

	/**
	 * German language with abbreviation 'de-DE' (Germany).
	 */
	German = 'de-DE',

	/**
	 * English language with abbreviation 'en-US' (United States).
	 */
	English = 'en-US',

	/**
	 * Spanish language with abbreviation 'es-ES' (Spain).
	 */
	SpanishSpain = 'es-ES',

	/**
	 * Spanish language with abbreviation 'es-MX' (Mexico).
	 */
	SpanishMexico = 'es-MX',

	/**
	 * French language with abbreviation 'fr-FR' (France).
	 */
	French = 'fr-FR',

	/**
	 * Indonesian language with abbreviation 'id-ID' (Indonesia).
	 */
	Indonesian = 'id-ID',

	/**
	 * Italian language with abbreviation 'it-IT' (Italy).
	 */
	Italian = 'it-IT',

	/**
	 * Japanese language with abbreviation 'ja-JP' (Japan).
	 */
	Japanese = 'ja-JP',

	/**
	 * Korean language with abbreviation 'ko-KR' (South Korea).
	 */
	Korean = 'ko-KR',

	/**
	 * Polish language with abbreviation 'pl-PL' (Poland).
	 */
	Polish = 'pl-PL',

	/**
	 * Portuguese language with abbreviation 'pt-BR' (Brazil).
	 */
	Portuguese = 'pt-BR',

	/**
	 * Russian language with abbreviation 'ru-RU' (Russia).
	 */
	Russian = 'ru-RU',

	/**
	 * Thai language with abbreviation 'th-TH' (Thailand).
	 */
	Thai = 'th-TH',

	/**
	 * Turkish language with abbreviation 'tr-TR' (Turkey).
	 */
	Turkish = 'tr-TR',

	/**
	 * Vietnamese language with abbreviation 'vi-VN' (Vietnam).
	 */
	Vietnamese = 'vi-VN',

	/**
	 * Chinese language with abbreviation 'zh-CN' (China).
	 */
	ChineseChina = 'zh-CN',

	/**
	 * Chinese language with abbreviation 'zh-TW' (Taiwan).
	 */
	ChineseTaiwan = 'zh-TW',
}

/**
 * Type representing a language.
 */
export type Language = keyof typeof CodeLang
