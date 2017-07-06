import * as t from 'io-ts'
import * as T from './adapters'
import * as C from './adapters'

export const AccountTypeEtType = t.union([
  t.literal("ISSUE"), /* Эмиссионный счет */
  t.literal("EMITENT"), /* Лицевой счет эмитента */
  t.literal("OWNER"), /* Владелец */
  t.literal("NOMINEE"), /* Номинальный держатель */
  t.literal("TRUSTEE"), /* Доверительный управляющий */
  t.literal("PLEDGEE"), /* Залогодержатель */
  t.literal("UNKNOWN"), /* Счет неустановленных лиц */
  t.literal("NOTARY"), /* Нотариус */
  t.literal("RIGHTS"), /* Доверительный управляющий правами */
  t.literal("TREASURY"), /* Казначейский счет эмитента */
  t.literal("DEPOSIT"), /* Депозитный счет */
  t.literal("NDCD"), /* Номинальный держатель центрального депозитария */
  t.literal("FORNOMINEE"), /* Иностранный номинальный держатель */
  t.literal("FORAUTHOR"), /* Иностранный уполномоченный держатель */
  t.literal("DEPOPROG") /* Счет депозитарных программ */
])
export type AccountTypeEt = t.TypeOf<typeof AccountTypeEtType>

export const CountryEtType = t.union([
  t.literal("AB"), // АБХАЗИЯ
  t.literal("AU"), // АВСТРАЛИЯ
  t.literal("AT"), // АВСТРИЯ
  t.literal("AZ"), // АЗЕРБАЙДЖАН
  t.literal("AL"), // АЛБАНИЯ
  t.literal("DZ"), // АЛЖИР
  t.literal("AS"), // АМЕРИКАНСКОЕ САМОА
  t.literal("AI"), // АНГИЛЬЯ
  t.literal("AO"), // АНГОЛА
  t.literal("AD"), // АНДОРРА
  t.literal("AQ"), // АНТАРКТИДА
  t.literal("AG"), // АНТИГУА И БАРБУДА
  t.literal("AR"), // АРГЕНТИНА
  t.literal("AM"), // АРМЕНИЯ
  t.literal("AW"), // АРУБА
  t.literal("AF"), // АФГАНИСТАН
  t.literal("BS"), // БАГАМЫ
  t.literal("BD"), // БАНГЛАДЕШ
  t.literal("BB"), // БАРБАДОС
  t.literal("BH"), // БАХРЕЙН
  t.literal("BY"), // БЕЛАРУСЬ
  t.literal("BZ"), // БЕЛИЗ
  t.literal("BE"), // БЕЛЬГИЯ
  t.literal("BJ"), // БЕНИН
  t.literal("BM"), // БЕРМУДЫ
  t.literal("BG"), // БОЛГАРИЯ
  t.literal("BO"), // БОЛИВИЯ, МНОГОНАЦИОНАЛЬНОЕ ГОСУДАРСТВО
  t.literal("BA"), // БОСНИЯ И ГЕРЦЕГОВИНА
  t.literal("BW"), // БОТСВАНА
  t.literal("BR"), // БРАЗИЛИЯ
  t.literal("IO"), // БРИТАНСКАЯ ТЕРРИТОРИЯ В ИНДИЙСКОМ ОКЕАНЕ
  t.literal("BN"), // БРУНЕЙ-ДАРУССАЛАМ
  t.literal("BF"), // БУРКИНА-ФАСО
  t.literal("BI"), // БУРУНДИ
  t.literal("BT"), // БУТАН
  t.literal("VU"), // ВАНУАТУ
  t.literal("HU"), // ВЕНГРИЯ
  t.literal("VE"), // ВЕНЕСУЭЛА БОЛИВАРИАНСКАЯ РЕСПУБЛИКА
  t.literal("VG"), // ВИРГИНСКИЕ ОСТРОВА, БРИТАНСКИЕ
  t.literal("VI"), // ВИРГИНСКИЕ ОСТРОВА, США
  t.literal("VN"), // ВЬЕТНАМ
  t.literal("GA"), // ГАБОН
  t.literal("GY"), // ГАЙАНА
  t.literal("HT"), // ГАИТИ
  t.literal("GM"), // ГАМБИЯ
  t.literal("GH"), // ГАНА
  t.literal("GP"), // ГВАДЕЛУПА
  t.literal("GT"), // ГВАТЕМАЛА
  t.literal("GN"), // ГВИНЕЯ
  t.literal("GW"), // ГВИНЕЯ-БИСАУ
  t.literal("DE"), // ГЕРМАНИЯ
  t.literal("GG"), // ГЕРНСИ
  t.literal("GI"), // ГИБРАЛТАР
  t.literal("HN"), // ГОНДУРАС
  t.literal("HK"), // ГОНКОНГ
  t.literal("GD"), // ГРЕНАДА
  t.literal("GL"), // ГРЕНЛАНДИЯ
  t.literal("GR"), // ГРЕЦИЯ
  t.literal("GE"), // ГРУЗИЯ
  t.literal("GU"), // ГУАМ
  t.literal("DK"), // ДАНИЯ
  t.literal("JE"), // ДЖЕРСИ
  t.literal("DJ"), // ДЖИБУТИ
  t.literal("DM"), // ДОМИНИКА
  t.literal("DO"), // ДОМИНИКАНСКАЯ РЕСПУБЛИКА
  t.literal("EG"), // ЕГИПЕТ
  t.literal("ZM"), // ЗАМБИЯ
  t.literal("EH"), // ЗАПАДНАЯ САХАРА
  t.literal("ZW"), // ЗИМБАБВЕ
  t.literal("YE"), // ЙЕМЕН
  t.literal("IL"), // ИЗРАИЛЬ
  t.literal("IN"), // ИНДИЯ
  t.literal("ID"), // ИНДОНЕЗИЯ
  t.literal("JO"), // ИОРДАНИЯ
  t.literal("IQ"), // ИРАК
  t.literal("IR"), // ИРАН, ИСЛАМСКАЯ РЕСПУБЛИКА
  t.literal("IE"), // ИРЛАНДИЯ
  t.literal("IS"), // ИСЛАНДИЯ
  t.literal("ES"), // ИСПАНИЯ
  t.literal("IT"), // ИТАЛИЯ
  t.literal("CV"), // КАБО-ВЕРДЕ
  t.literal("KZ"), // КАЗАХСТАН
  t.literal("KH"), // КАМБОДЖА
  t.literal("CM"), // КАМЕРУН
  t.literal("CA"), // КАНАДА
  t.literal("QA"), // КАТАР
  t.literal("KE"), // КЕНИЯ
  t.literal("CY"), // КИПР
  t.literal("KG"), // КИРГИЗИЯ
  t.literal("KI"), // КИРИБАТИ
  t.literal("CN"), // КИТАЙ
  t.literal("CC"), // КОКОСОВЫЕ (КИЛИНГ) ОСТРОВА
  t.literal("CO"), // КОЛУМБИЯ
  t.literal("KM"), // КОМОРЫ
  t.literal("CG"), // КОНГО
  t.literal("CD"), // КОНГО, ДЕМОКРАТИЧЕСКАЯ РЕСПУБЛИКА
  t.literal("KP"), // КОРЕЯ, НАРОДНО-ДЕМОКРАТИЧЕСКАЯ РЕСПУБЛИКА
  t.literal("KR"), // КОРЕЯ, РЕСПУБЛИКА
  t.literal("CR"), // КОСТА-РИКА
  t.literal("CI"), // КОТ Д'ИВУАР
  t.literal("CU"), // КУБА
  t.literal("KW"), // КУВЕЙТ
  t.literal("LA"), // ЛАОССКАЯ НАРОДНО-ДЕМОКРАТИЧЕСКАЯ РЕСПУБЛИКА
  t.literal("LV"), // ЛАТВИЯ
  t.literal("LS"), // ЛЕСОТО
  t.literal("LR"), // ЛИБЕРИЯ
  t.literal("LB"), // ЛИВАН
  t.literal("LY"), // ЛИВИЙСКАЯ АРАБСКАЯ ДЖАМАХИРИЯ
  t.literal("LT"), // ЛИТВА
  t.literal("LI"), // ЛИХТЕНШТЕЙН
  t.literal("LU"), // ЛЮКСЕМБУРГ
  t.literal("MU"), // МАВРИКИЙ
  t.literal("MR"), // МАВРИТАНИЯ
  t.literal("MG"), // МАДАГАСКАР
  t.literal("YT"), // МАЙОТТА
  t.literal("MO"), // МАКАО
  t.literal("MW"), // МАЛАВИ
  t.literal("MY"), // МАЛАЙЗИЯ
  t.literal("ML"), // МАЛИ
  t.literal("UM"), // МАЛЫЕ ТИХООКЕАНСКИЕ ОТДАЛЕННЫЕ ОСТРОВА СОЕДИНЕННЫХ ШТАТОВ
  t.literal("MV"), // МАЛЬДИВЫ
  t.literal("MT"), // МАЛЬТА
  t.literal("MA"), // МАРОККО
  t.literal("MQ"), // МАРТИНИКА
  t.literal("MH"), // МАРШАЛЛОВЫ ОСТРОВА
  t.literal("MX"), // МЕКСИКА
  t.literal("FM"), // МИКРОНЕЗИЯ, ФЕДЕРАТИВНЫЕ ШТАТЫ
  t.literal("MZ"), // МОЗАМБИК
  t.literal("MD"), // МОЛДОВА, РЕСПУБЛИКА
  t.literal("MC"), // МОНАКО
  t.literal("MN"), // МОНГОЛИЯ
  t.literal("MS"), // МОНТСЕРРАТ
  t.literal("MM"), // МЬЯНМА
  t.literal("NA"), // НАМИБИЯ
  t.literal("NR"), // НАУРУ
  t.literal("NP"), // НЕПАЛ
  t.literal("NE"), // НИГЕР
  t.literal("NG"), // НИГЕРИЯ
  t.literal("AN"), // НИДЕРЛАНДСКИЕ АНТИЛЫ
  t.literal("NL"), // НИДЕРЛАНДЫ
  t.literal("NI"), // НИКАРАГУА
  t.literal("NU"), // НИУЭ
  t.literal("NZ"), // НОВАЯ ЗЕЛАНДИЯ
  t.literal("NC"), // НОВАЯ КАЛЕДОНИЯ
  t.literal("NO"), // НОРВЕГИЯ
  t.literal("AE"), // ОБЪЕДИНЕННЫЕ АРАБСКИЕ ЭМИРАТЫ
  t.literal("OM"), // ОМАН
  t.literal("BV"), // ОСТРОВ БУВЕ
  t.literal("IM"), // ОСТРОВ МЭН
  t.literal("NF"), // ОСТРОВ НОРФОЛК
  t.literal("CX"), // ОСТРОВ РОЖДЕСТВА
  t.literal("HM"), // ОСТРОВ ХЕРД И ОСТРОВА МАКДОНАЛЬД
  t.literal("KY"), // ОСТРОВА КАЙМАН
  t.literal("CK"), // ОСТРОВА КУКА
  t.literal("TC"), // ОСТРОВА ТЕРКС И КАЙКОС
  t.literal("PK"), // ПАКИСТАН
  t.literal("PW"), // ПАЛАУ
  t.literal("PS"), // ПАЛЕСТИНСКАЯ ТЕРРИТОРИЯ, ОККУПИРОВАННАЯ
  t.literal("PA"), // ПАНАМА
  t.literal("VA"), // ПАПСКИЙ ПРЕСТОЛ (ГОСУДАРСТВО - ГОРОД ВАТИКАН)
  t.literal("PG"), // ПАПУА-НОВАЯ ГВИНЕЯ
  t.literal("PY"), // ПАРАГВАЙ
  t.literal("PE"), // ПЕРУ
  t.literal("PN"), // ПИТКЕРН
  t.literal("PL"), // ПОЛЬША
  t.literal("PT"), // ПОРТУГАЛИЯ
  t.literal("PR"), // ПУЭРТО-РИКО
  t.literal("MK"), // РЕСПУБЛИКА МАКЕДОНИЯ[3]
  t.literal("RE"), // РЕЮНЬОН
  t.literal("RU"), // РОССИЯ
  t.literal("RW"), // РУАНДА
  t.literal("RO"), // РУМЫНИЯ
  t.literal("WS"), // САМОА
  t.literal("SM"), // САН-МАРИНО
  t.literal("ST"), // САН-ТОМЕ И ПРИНСИПИ
  t.literal("SA"), // САУДОВСКАЯ АРАВИЯ
  t.literal("SZ"), // СВАЗИЛЕНД
  t.literal("SH"), // СВЯТАЯ ЕЛЕНА
  t.literal("MP"), // СЕВЕРНЫЕ МАРИАНСКИЕ ОСТРОВА
  t.literal("SC"), // СЕЙШЕЛЫ
  t.literal("BL"), // СЕН-БАРТЕЛЕМИ
  t.literal("SN"), // СЕНЕГАЛ
  t.literal("MF"), // СЕН-МАРТЕН
  t.literal("VC"), // СЕНТ-ВИНСЕНТ И ГРЕНАДИНЫ
  t.literal("KN"), // СЕНТ-КИТС И НЕВИС
  t.literal("LC"), // СЕНТ-ЛЮСИЯ
  t.literal("PM"), // СЕНТ-ПЬЕР И МИКЕЛОН
  t.literal("RS"), // СЕРБИЯ
  t.literal("SG"), // СИНГАПУР
  t.literal("SY"), // СИРИЙСКАЯ АРАБСКАЯ РЕСПУБЛИКА
  t.literal("SK"), // СЛОВАКИЯ
  t.literal("SI"), // СЛОВЕНИЯ
  t.literal("GB"), // СОЕДИНЕННОЕ КОРОЛЕВСТВО
  t.literal("US"), // СОЕДИНЕННЫЕ ШТАТЫ
  t.literal("SB"), // СОЛОМОНОВЫ ОСТРОВА
  t.literal("SO"), // СОМАЛИ
  t.literal("SD"), // СУДАН
  t.literal("SR"), // СУРИНАМ
  t.literal("SL"), // СЬЕРРА-ЛЕОНЕ
  t.literal("TJ"), // ТАДЖИКИСТАН
  t.literal("TW"), // ТАЙВАНЬ (КИТАЙ)
  t.literal("TH"), // ТАИЛАНД
  t.literal("TZ"), // ТАНЗАНИЯ, ОБЪЕДИНЕННАЯ РЕСПУБЛИКА
  t.literal("TL"), // ТИМОР-ЛЕСТЕ
  t.literal("TG"), // ТОГО
  t.literal("TK"), // ТОКЕЛАУ
  t.literal("TO"), // ТОНГА
  t.literal("TT"), // ТРИНИДАД И ТОБАГО
  t.literal("TV"), // ТУВАЛУ
  t.literal("TN"), // ТУНИС
  t.literal("TM"), // ТУРКМЕНИЯ
  t.literal("TR"), // ТУРЦИЯ
  t.literal("UG"), // УГАНДА
  t.literal("UZ"), // УЗБЕКИСТАН
  t.literal("UA"), // УКРАИНА
  t.literal("WF"), // УОЛЛИС И ФУТУНА
  t.literal("UY"), // УРУГВАЙ
  t.literal("FO"), // ФАРЕРСКИЕ ОСТРОВА
  t.literal("FJ"), // ФИДЖИ
  t.literal("PH"), // ФИЛИППИНЫ
  t.literal("FI"), // ФИНЛЯНДИЯ
  t.literal("FK"), // ФОЛКЛЕНДСКИЕ ОСТРОВА (МАЛЬВИНСКИЕ)
  t.literal("FR"), // ФРАНЦИЯ
  t.literal("GF"), // ФРАНЦУЗСКАЯ ГВИАНА
  t.literal("PF"), // ФРАНЦУЗСКАЯ ПОЛИНЕЗИЯ
  t.literal("TF"), // ФРАНЦУЗСКИЕ ЮЖНЫЕ ТЕРРИТОРИИ
  t.literal("HR"), // ХОРВАТИЯ
  t.literal("CF"), // ЦЕНТРАЛЬНО-АФРИКАНСКАЯ РЕСПУБЛИКА
  t.literal("TD"), // ЧАД
  t.literal("ME"), // ЧЕРНОГОРИЯ
  t.literal("CZ"), // ЧЕШСКАЯ РЕСПУБЛИКА
  t.literal("CL"), // ЧИЛИ
  t.literal("CH"), // ШВЕЙЦАРИЯ
  t.literal("SE"), // ШВЕЦИЯ
  t.literal("SJ"), // ШПИЦБЕРГЕН И ЯН МАЙЕН
  t.literal("LK"), // ШРИ-ЛАНКА
  t.literal("EC"), // ЭКВАДОР
  t.literal("GQ"), // ЭКВАТОРИАЛЬНАЯ ГВИНЕЯ
  t.literal("AX"), // ЭЛАНДСКИЕ ОСТРОВА
  t.literal("SV"), // ЭЛЬ-САЛЬВАДОР
  t.literal("ER"), // ЭРИТРЕЯ
  t.literal("EE"), // ЭСТОНИЯ
  t.literal("ET"), // ЭФИОПИЯ
  t.literal("ZA"), // ЮЖНАЯ АФРИКА
  t.literal("GS"), // ЮЖНАЯ ДЖОРДЖИЯ И ЮЖНЫЕ САНДВИЧЕВЫ ОСТРОВА
  t.literal("OS"), // ЮЖНАЯ ОСЕТИЯ
  t.literal("JM"), // ЯМАЙКА
  t.literal("JP") // ЯПОНИЯ
])
export type CountryEt = t.TypeOf<typeof CountryEtType>

export const DocTypeEtType = t.union([
  t.literal("FORM"), /* Анкета зарегистрированного лица */
  t.literal("FRPL"), /* Анкета залогодержателя */
  t.literal("FRMN"), /* Анкета управляющей компании */
  t.literal("APPL"), /* Заявление об открытии счета/ изменении анкеты */
  t.literal("BANK"), /* Банковская карточка */
  t.literal("PROX"), /* Доверенность */
  t.literal("REPR"), /* Сведения об уполномоченном представителе */
  t.literal("MNGR"), /* Документ о назначении руководителя */
  t.literal("ATTC"), /* Приложение к анкете ЗЛ */
  t.literal("BENF"), /* Сведения о бенефициарных владельцах и/или выгодоприобретателях */
  t.literal("ACTU"), /* Заявление о подтверждении актуальности данных ЗЛ */
  t.literal("PLDG"), /* Залоговое распоряжение */
  t.literal("NOTR"), /* Запрос нотариуса */
  t.literal("REQU"), /* Запрос на выдачу информации из реестра */
  t.literal("ORDR"), /* Исполнительный лист */
  t.literal("JUDG"), /* Решение суда */
  t.literal("PASS"), /* Копия документа, удостоверяющего личность */
  t.literal("TRAN"), /* Распоряжение о списании/зачислении ЦБ */
  t.literal("COMB"), /* Распоряжение на объединение лицевых счетов */
  t.literal("MEET"), /* Протокол собрания */
  t.literal("BLOK"), /* Распоряжение на блокирование */
  t.literal("UNBL"), /* Распоряжение на отмену блокирования */
  t.literal("UNPL"), /* Распоряжение о прекращении залога */
  t.literal("PLMF"), /* Распоряжение о внесении изменений в залог */
  t.literal("PLDL"), /* Распоряжение о передаче права залога */
  t.literal("INHE"), /* Свидетельство о праве на наследство */
  t.literal("CREG"), /* Свидетельство о регистрации */
  t.literal("COGR"), /* Свидетельство о внесении в ЕГРЮЛ */
  t.literal("LOGR"), /* Лист записи в ЕГРЮЛ */
  t.literal("CHAR"), /* Устав */
  t.literal("SIGN"), /* Карточка с образцами подписей */
  t.literal("CLOS"), /* Заявление на закрытие лицевого счета */
  t.literal("OTHR") /* Другой документ */
])
export type DocTypeEt = t.TypeOf<typeof DocTypeEtType>

export const ExchangeParticipantTypeEtType = t.union([
  t.literal("REG"), /* Регистратор (реестродержатель) */
  t.literal("SUBDIV") /* Подразделение регистратора */
])
export type ExchangeParticipantTypeEt = t.TypeOf<typeof ExchangeParticipantTypeEtType>

export const IndividualDocumentTypeEtType = t.union([
  t.literal("01"), /* Паспорт гражданина СССР */
  t.literal("02"), /* Заграничный паспорт гражданина СССР */
  t.literal("03"), /* Свидетельство о рождении */
  t.literal("04"), /* Удостоверение личности офицера */
  t.literal("05"), /* Справка об освобождении из места лишения свободы */
  t.literal("06"), /*	Паспорт моряка Минморфлота */
  t.literal("07"), /*	Военный билет */
  t.literal("08"), /*	Временное удостоверение, выданное взамен военного билета */
  t.literal("09"), /*	Дипломатический паспорт гражданина РФ */
  t.literal("10"), /*	Паспорт иностранного гражданина */
  t.literal("11"), /*	Свидетельство о рассмотрении ходатайства о признании лица беженцем */
  t.literal("12"), /*	Вид на жительство в РФ */
  t.literal("13"), /*	Удостоверение беженца в РФ */
  t.literal("14"), /*	Временное удостоверение личности гражданина РФ */
  t.literal("15"), /*	Разрешение на временное проживание в РФ */
  t.literal("18"), /*	Свидетельство о предоставлении убежища на территории РФ */
  t.literal("21"), /*	Паспорт гражданина РФ */
  t.literal("22"), /*	Заграничный паспорт гражданина РФ */
  t.literal("23"), /*	Свидетельство о рождении, выданное уполномоченным органом иностранного государства */
  t.literal("24"), /*	Удостоверение личности военнослужащего Российской Федерации */
  t.literal("26"), /*	Паспорт моряка */
  t.literal("27"), /*	Военный билет офицера запаса */
  t.literal("91"), /*	Иные, выдаваемые органами внутренних дел РФ */
  t.literal("00")  /*	Не указан */
])
export type IndividualDocumentTypeEt = t.TypeOf<typeof IndividualDocumentTypeEtType>

export const LegalRegDocTypeEtType = t.union([
  t.literal("LICS"), /* Лицензия */
  t.literal("REGN"), /* Свидетельство о регистрации */
  t.literal("INCR"), /* Сертификат об инкорпорации */
  t.literal("USTV"), /* Устав */
  t.literal("UKZP"), /* Указ Президента */
  t.literal("PSTN"), /* Постановление */
  t.literal("OTHR"), /* Другой документ */
  t.literal("NULL")  /*  Не указан */
])
export type LegalRegDocTypeEt = t.TypeOf<typeof LegalRegDocTypeEtType>

export const RegionEtType = t.union([
  t.literal("1"), // Адыгея республика
  t.literal("2"),// Башкортостан республика
  t.literal("3"),// Бурятия республика
  t.literal("4"),// Алтай республика
  t.literal("5"),// Дагестан республика
  t.literal("6"),// Ингушетия республика
  t.literal("7"),// Кабардино-Балкарская республика
  t.literal("8"),// Калмыкия республика
  t.literal("9"),// Карачаево-Черкесская республика
  t.literal("1"), // Карелия республика
  t.literal("11"), // Коми республика
  t.literal("12"), // Марий Эл республика
  t.literal("13"), // Мордовия республика
  t.literal("14"), // Саха /Якутия/ республика
  t.literal("15"), // Северная Осетия - Алания республика
  t.literal("16"), // Татарстан республика
  t.literal("17"), // Тыва республика
  t.literal("18"), // Удмуртская республика
  t.literal("19"), // Хакасия республика
  t.literal("20"), // Чеченская республика
  t.literal("21"), // Чувашская республика
  t.literal("22"), // Алтайский край
  t.literal("23"), // Краснодарский край
  t.literal("24"), // Красноярский край
  t.literal("25"), // Приморский край
  t.literal("26"), // Ставропольский край
  t.literal("27"), // Хабаровский край
  t.literal("28"), // Амурская область
  t.literal("29"), // Архангельская область
  t.literal("30"), // Астраханская область
  t.literal("31"), // Белгородская область
  t.literal("32"), // Брянская область
  t.literal("33"), // Владимирская область
  t.literal("34"), // Волгоградская область
  t.literal("35"), // Вологодская область
  t.literal("36"), // Воронежская область
  t.literal("37"), // Ивановская область
  t.literal("38"), // Иркутская область
  t.literal("39"), // Калининградская область
  t.literal("40"), // Калужская область
  t.literal("41"), // Камчатский край
  t.literal("42"), // Кемеровская область
  t.literal("43"), // Кировская область
  t.literal("44"), // Костромская область
  t.literal("45"), // Курганская область
  t.literal("46"), // Курская область
  t.literal("47"), // Ленинградская область
  t.literal("48"), // Липецкая область
  t.literal("49"), // Магаданская область
  t.literal("50"), // Московская область
  t.literal("51"), // Мурманская область
  t.literal("52"), // Нижегородская область
  t.literal("53"), // Новгородская область
  t.literal("54"), // Новосибирская область
  t.literal("55"), // Омская область
  t.literal("56"), // Оренбургская область
  t.literal("57"), // Орловская область
  t.literal("58"), // Пензенская область
  t.literal("59"), // Пермский край
  t.literal("60"), // Псковская область
  t.literal("61"), // Ростовская область
  t.literal("62"), // Рязанская область
  t.literal("63"), // Самарская область
  t.literal("64"), // Саратовская область
  t.literal("65"), // Сахалинская область
  t.literal("66"), // Свердловская область
  t.literal("67"), // Смоленская область
  t.literal("68"), // Тамбовская область
  t.literal("69"), // Тверская область
  t.literal("70"), // Томская область
  t.literal("71"), // Тульская область
  t.literal("72"), // Тюменская область
  t.literal("73"), // Ульяновская область
  t.literal("74"), // Челябинская область
  t.literal("75"), // Забайкальский край
  t.literal("76"), // Ярославская область
  t.literal("77"), // Москва г.
  t.literal("78"), // Санкт-Петербург г.
  t.literal("79"), // Еврейская автономная область
  t.literal("83"), // Ненецкий автономный округ
  t.literal("84"), // Таймырский (Долгано-Ненецкий) автономный округ
  t.literal("86"), // Ханты-Мансийский - Югра автономный округ
  t.literal("87"), // Чукотский автономный округ
  t.literal("89"), // Ямало-Ненецкий автономный округ
  t.literal("91"), // Крым республика
  t.literal("92"), // Севастополь г.
  t.literal("99")  //  Байконур г.
])
export type RegionEt = t.TypeOf<typeof RegionEtType>

export const SecurityCategoryEtType = t.union([
  t.literal("ORDN"), /* Обыкновенная */
  t.literal("PREF")  /* Привилегированная */
])
export type SecurityCategoryEt = t.TypeOf<typeof SecurityCategoryEtType>

export const SecurityClassificationEtType = t.union([
  t.literal("BOND"),  /* Облигация */
  t.literal("SHAR"),  /* Акция */
  t.literal("MFUN"),  /* Инвестиционный пай */
  t.literal("RDRP")   /* Российская депозитарная расписка */
])
export type SecurityClassificationEt = t.TypeOf<typeof SecurityClassificationEtType>

/** Decimal value */
const DecimalValueType = T.mkType({
  decimal: t.number
}, {}, "DecimalValue")
export type DecimalValue = t.TypeOf<typeof DecimalValueType>

/** Natural fraction value */
const NaturalFractionType = T.mkType({
  integral: t.number,
  numerator: t.number,
  denominator: t.number
}, {}, "NaturalFraction")

const NaturalFractionValueType = T.mkType({
  natural: NaturalFractionType
}, {}, "NaturalFractionValue")
export type NaturalFractionValue = t.TypeOf<typeof NaturalFractionValueType>

export const FractionType = t.union([DecimalValueType, NaturalFractionValueType])
export type FractionT = t.TypeOf<typeof FractionType>

export const AddressNostructTType = T.mkType({
  address: t.string
}, {
    country: CountryEtType, index: t.string
  }, "AddressNostructT")
export type AddressNostructT = t.TypeOf<typeof AddressNostructTType>

export const AddressStructTType = T.mkType({}, {
  country: CountryEtType,
  index: t.string,
  regionNumber: RegionEtType, regionType: t.string, region: t.string,
  zoneType: t.string, zone: t.string,
  cityType: t.string, city: t.string,
  placeType: t.string, place: t.string,
  streetType: t.string, street: t.string,
  house: t.string,
  building: t.string,
  flat: t.string
}, "AddressStructT")
export type AddressStructT = t.TypeOf<typeof AddressStructTType>

const addressStructToString = (addrStruct: AddressStructT) => {
  const combineValue = (t?: string, v?: string): string => {
    let type = t ? t : ""
    let value = v ? v : ""
    let res = type && value ? type + " " + value : type + value

    return res ? res + " " : ""
  }

  let region = combineValue(addrStruct.regionType, addrStruct.region)
  let place = combineValue(addrStruct.placeType, addrStruct.place)
  let city = combineValue(addrStruct.cityType, addrStruct.city)
  let street = combineValue(addrStruct.streetType, addrStruct.street)

  let house = addrStruct.house ? addrStruct.house : ""
  let building = addrStruct.building ? "/" + addrStruct.building : ""
  let flat = addrStruct.flat ? " оф.(к.) " + addrStruct.flat + " " : ""

  return region + place + city + street + house + building + flat
}

export const AddressLegalTType = T.mkType({}, {
  addressKladr: AddressStructTType,
  addressNostruct: AddressNostructTType
}, "AddressLegalT")
export type AddressLegalT = t.TypeOf<typeof AddressLegalTType>

export const addressLegalToString = (addr?: AddressLegalT): string => {
  if (!addr) {
    return ""
  }

  if (addr.addressNostruct) {
    return addr.addressNostruct.address
  }

  if (addr.addressKladr) {
    return addressStructToString(addr.addressKladr)
  }
  return ""
}

export const AddressPostTType = T.mkType({}, {
  addressKladr: AddressStructTType,
  addressNostruct: AddressNostructTType,
  another: t.string
}, "AddressPost")
export type AddressPostT = t.TypeOf<typeof AddressPostTType>


export const addressPostToString = (addr?: AddressPostT): string => {
  if (!addr) {
    return ""
  }

  if (addr.addressNostruct) {
    return addr.addressNostruct.address
  }

  if (addr.addressKladr) {
    return addressStructToString(addr.addressKladr)
  }
  return ""
}

export const ContactInfoTType = T.mkType({
  name: t.string,
  phone: t.string
}, {}, "ContactInfoT")
export type ContactInfoT = t.TypeOf<typeof ContactInfoTType>

export const DocLinkTType = T.mkType({
  outDocDate: T.date
}, {
    uid: C.UUIDType,
    outDocNum: t.string,
    inDocNum: t.string,
    inRegDate: T.date,
    taDocNum: t.string,
    taDocDate: T.date
  }, "DocLinkT")
export type DocLinkT = t.TypeOf<typeof DocLinkTType>

export const DocTypeTType = T.mkType({
  docTypeCode: DocTypeEtType
}, {
    narrative: t.string
  }, "DocTypeT")
export type DocTypeT = t.TypeOf<typeof DocTypeTType>

export const ExchangeParticipantTType = T.mkType({
  id: C.UUIDType,
  participantType: ExchangeParticipantTypeEtType,
  name: t.string
}, {}, "ExchangeParticipantT")
export type ExchangeParticipantT = t.TypeOf<typeof ExchangeParticipantTType>

export const IdTType = T.mkType({
  id: t.string
}, {
    organization: t.string
  }, "IdT")
export type IdT = t.TypeOf<typeof IdTType>

export const SecurityInfoTType = T.mkType({
  securityClassification: SecurityClassificationEtType,
  stateRegNum: t.string
}, {
    securityCategory: SecurityCategoryEtType,
    securityType: t.string,
    nominalValue: FractionType,
    stateRegDate: T.date,
    proprietarySecurityCode: IdTType
  }, "SecurityInfoT")
export type SecurityInfoT = t.TypeOf<typeof SecurityInfoTType>

export const IndividualDocTypeTType = T.mkType({
  individualDocType: IndividualDocumentTypeEtType
}, {
    narrative: t.string
  }, "IndividualDocTypeT")
export type IndividualDocTypeT = t.TypeOf<typeof IndividualDocTypeTType>

export const IndividualDocumentTType = T.mkType({
  docType: IndividualDocTypeTType
}, {
    docSeries: t.string,
    docNum: t.string,
    docDate: T.date,
    docPlace: t.string,
    docSubcode: t.string
  }, "IndividualDocumentT")
export type IndividualDocumentT = t.TypeOf<typeof IndividualDocumentTType>

export const IndividualInfoTType = T.mkType({
  individualName: t.string,
  individualDocument: IndividualDocumentTType
}, {}, "IndividualInfoT")
export type IndividualInfoT = t.TypeOf<typeof IndividualInfoTType>

function IndividualInfoTToString(info: IndividualInfoT): string {
  let res = info.individualName
  if (!!info.individualDocument.docNum) res += `№${info.individualDocument.docNum}`
  return res
}

export const LegalDocTypeTType = T.mkType({
  juridicalDocType: LegalRegDocTypeEtType
}, {
    narrative: t.string
  }, "LegalDocTypeT")
export type LegalDocTypeT = t.TypeOf<typeof LegalDocTypeTType>

export const LegalOgrnTType = T.mkType({
  ogrn: t.string
}, {
    ogrnDate: T.date,
    ogrnPlace: t.string
  }, "LegalOgrnT")
export type LegalOgrnT = t.TypeOf<typeof LegalOgrnTType>

export const LegalRegDocTType = T.mkType({
  regDocType: LegalDocTypeTType
}, {
    regNum: t.string,
    regSeries: t.string,
    regDate: T.date,
    regPlace: t.string
  }, "LegalRegDocT")
export type LegalRegDocT = t.TypeOf<typeof LegalRegDocTType>

export const LegalRegistrationTType = T.mkType({}, {
  ogrn: LegalOgrnTType,
  regDoc: LegalRegDocTType
}, "LegalRegistrationT")
export type LegalRegistrationT = t.TypeOf<typeof LegalRegistrationTType>

export const LegalInfoTType = T.mkType({
  juridicalName: t.string,
  juridicalRegistration: LegalRegistrationTType
}, {}, "LegalInfoT")
export type LegalInfoT = t.TypeOf<typeof LegalInfoTType>

function LegalInfoTToString(info: LegalInfoT): string {
  let res = info.juridicalName
  if (!!info.juridicalRegistration.ogrn) res += `, ОГРН ${info.juridicalRegistration.ogrn!.ogrn}`
  else if (!!info.juridicalRegistration.regDoc) res += `, №${info.juridicalRegistration.regDoc!.regNum}`
  return res
}

export const IssuerInfoTType = T.mkType({
  issuerInfo: LegalInfoTType
}, {
    issuerId: IdTType,
    issuerLegalAddress: AddressLegalTType
  }, "IssuerInfoT")
export type IssuerInfoT = t.TypeOf<typeof IssuerInfoTType>

export const CoownerInfoTType = T.mkType({}, {
  idCoowner: t.string,
  juridical: LegalInfoTType,
  individual: IndividualInfoTType
}, "CoownerInfoT")
export type CoownerInfoT = t.TypeOf<typeof CoownerInfoTType>

export const CoownershipInfoTType = T.mkType({
  coownersName: t.string
}, {
    coownershipInfoT: t.array(CoownerInfoTType)
  }, "CoownershipInfoT")
export type CoownershipInfoT = t.TypeOf<typeof CoownershipInfoTType>

export const ContentTType = T.mkType({
  text: t.string
}, {
    issuer: IssuerInfoTType
  }, "ContentT")
export type ContentT = t.TypeOf<typeof ContentTType>

export const MsgHeaderTType = T.mkType({
  sender: ExchangeParticipantTType,
  recipient: ExchangeParticipantTType
}, {}, "MsgHeaderT")
export type MsgHeaderT = t.TypeOf<typeof MsgHeaderTType>


export const PersonInfoTType = T.mkType({}, {
  legal: LegalInfoTType,
  individual: IndividualInfoTType,
  coowners: CoownershipInfoTType
}, "PersonInfoT")
export type PersonInfoT = t.TypeOf<typeof PersonInfoTType>

export const AccountIdentTType = T.mkType({
  accountType: AccountTypeEtType,
  personInfo: PersonInfoTType
}, {
    accountNumber: t.string
  }, "AccountIdentT")
export type AccountIdentT = t.TypeOf<typeof AccountIdentTType>

export const DocSenderTType = T.mkType({}, {
  issuerInfo: LegalInfoTType,
  accountIdent: AccountIdentTType,
  otherPersonInfo: PersonInfoTType,
  postAddress: t.string,
  personSign: t.string
}, "DocSenderT")
export type DocSenderT = t.TypeOf<typeof DocSenderTType>
export const DocSenderTToString = (sender?: DocSenderT): string => {
  if (!sender) {
    return ""
  }
  const { issuerInfo, accountIdent, otherPersonInfo } = sender
  if (issuerInfo) {
    return `ЮЛ:${LegalInfoTToString(issuerInfo)}. Эмитент`
  }
  if (accountIdent) {
    const { individual, legal, coowners } = accountIdent.personInfo
    if (individual) return `ФЛ:${IndividualInfoTToString(individual)}. ЗЛ `
    if (legal) return `ЮЛ:${LegalInfoTToString(legal)}. ЗЛ`
    if (coowners) return `ОС:${coowners.coownersName}. ЗЛ`
  }

  if (otherPersonInfo) {
    const { individual, legal, coowners } = otherPersonInfo
    if (individual) return `ФЛ:${IndividualInfoTToString(individual)}`
    if (legal) return `$ЮЛ:{LegalInfoTToString(legal)}`
    if (coowners) return `ОС:${coowners.coownersName}. ЗЛ`
  }

  return ""
}

export const TransferAgentInfoTType = T.mkType({
  taInfo: LegalInfoTType
}, {
    taId: IdTType,
    taLegalAddress: AddressLegalTType
  }, "TransferAgentInfoT")
export type TransferAgentInfoT = t.TypeOf<typeof TransferAgentInfoTType>

export const TaDocInfoTType = T.mkType({
  taInfo: TransferAgentInfoTType,
  taDocNum: t.string,
  taDocDate: T.date
}, {}, "TaDocInfoT")
export type TaDocInfoT = t.TypeOf<typeof TaDocInfoTType>

export const ScanInfoTType = T.mkType({
  mimeType: t.string,
  location: t.string
}, {}, "ScanInfoT")

export const DocInfoTType = T.mkType({
  docType: DocTypeTType,
}, {
    docNum: t.string,
    docDate: T.date,
    scanInfo: ScanInfoTType
  }, "DocInfoT")
export type DocInfoT = t.TypeOf<typeof DocInfoTType>

/** The document type */
export const DocTType = T.mkType({
  version: t.string,
  msgHeader: MsgHeaderTType,
  docType: DocTypeTType,
  docDate: T.date,
  sender: DocSenderTType
}, {
    uid: C.UUIDType,
    docNum: t.string,
    taDocInfo: TaDocInfoTType,
    docLink: DocLinkTType
  }, "DocT")
export type DocT = t.TypeOf<typeof DocTType>

export const AppendicesTType = t.interface({
  appendix: t.array(DocInfoTType)
})
export type AppendicesT = t.TypeOf<typeof AppendicesTType>

export const DocumentType = t.intersection([
  DocTType,
  T.mkType({
    content: ContentTType,
    appendices: AppendicesTType
  }, {})
])
export type Document = t.TypeOf<typeof DocumentType>

export const TransactionTypeEtType = t.union([
  t.literal("60101"), /* Сделка */
  t.literal("60102"), /* Дарение */
  t.literal("60103"), /* Наследование */
  t.literal("60105"), /* По решению суда*/
  t.literal("60106"), /* По договору мены*/
  t.literal("60108"), /* Передача ЦБ при невыполнении условий залога*/
  t.literal("60111"), /* Передача заложенных ЦБ*/
  t.literal("60112"), /* При выкупе по требованию лица*/
  t.literal("60130"), /* При выкупе по требованию лица, имеющего 95% */
  t.literal("60131"), /* При выкупе по требованию акционеров*/
  t.literal("60132"), /* При выкупе по добровольному предложению*/
  t.literal("60133"), /* При выкупе по обязательному предложению*/
  t.literal("60201"), /* Первичное размещение*/
  t.literal("60301"), /* Выкуп(приобретение) ценных бумаг эмитентом*/
  t.literal("60302"), /* Приобретение ЦБ эмитентом для погашения*/
  t.literal("60305"), /* Выкуп дробных акций эмитентом*/
  t.literal("60308"), /* Выкуп ЦБ эмитентом по требованию акицонеров*/
  t.literal("60401"), /* Передача ЦБ в номинальное держание*/
  t.literal("60402"), /* Возврат ЦБ от номинального держателя*/
  t.literal("60404"), /* Передача заложенных ЦБ номинальному держателю*/
  t.literal("60411"), /* Передача ЦБ в номинальное держание НД ЦД*/
  t.literal("60412"), /* Возврат ЦБ от НД ЦД*/
  t.literal("60413"), /* Возврат ЦБ от НД ЦД при прекращении депозитарного договора*/
  t.literal("60414"), /* Передача заложенных ЦБ в номинальное держание НД ЦД*/
  t.literal("60451"), /* Перевод ЦБ в депозит нотариуса */
  t.literal("60452"), /* Возврат ЦБ из депозита нотариуса*/
  t.literal("60501"), /* Передача ЦБ в доверительное управление */
  t.literal("60502"), /* Возврат ЦБ из доверительного управления */
  t.literal("60504"), /* Передача заложенных ЦБ в доверительное управление */
  t.literal("60505"), /* Возврат заложенных ЦБ из доверительного управления */
  t.literal("60551"), /* Передача ЦБ доверительному управляющему правами*/
  t.literal("60552"), /* Возврат ЦБ от доверительного управляющего правами*/
  t.literal("60554"), /* Передача заложенных ЦБ доверительному управляющему правами */
  t.literal("60555"), /* Возврат заложенных ЦБ от доверительного управляющего правами*/
  t.literal("60304"), /* Списание ЦБ при реорганизации/ ликвидации АО*/
  t.literal("60204"), /* Размещение ЦБ при реорганизации АО */
  t.literal("60104"), /* Реорганизация / ликвидация ЗЛ*/
  t.literal("60107"), /* Внесение в уставный капитал/ в имущество общества*/
  t.literal("60121"), /* При объединении лицевых счетов*/
  t.literal("60120"), /* По иным основаниям*/
], "TransactionTypeEt")

export type TransactionTypeEt = t.TypeOf<typeof TransactionTypeEtType>
