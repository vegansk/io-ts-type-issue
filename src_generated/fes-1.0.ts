/** tslint:disable: all */

import * as iots from "io-ts"
import * as T from "../src/types"

function getStringEnumValues(o: object): string[] {
  return Object.keys(o)
    .map(_ => (o as { [n: string]: any })[_])
    .filter(v => typeof v === "string")
}
function mkStringEnum<E>(e: object, name: string): iots.Type<E> {
  const values = getStringEnumValues(e)
  const newType: iots.Type<E> = {
    _A: iots._A,
    name,
    validate: (v, c) => values.indexOf(v) >= 0 ? iots.success<E>(v) : iots.failure<E>(v, c)
  }
  return newType
}

export enum TransactionTypeEt {
  V_60101 = "60101",
  V_60102 = "60102",
  V_60103 = "60103",
  V_60105 = "60105",
  V_60106 = "60106",
  V_60108 = "60108",
  V_60111 = "60111",
  V_60112 = "60112",
  V_60130 = "60130",
  V_60131 = "60131",
  V_60132 = "60132",
  V_60133 = "60133",
  V_60201 = "60201",
  V_60301 = "60301",
  V_60302 = "60302",
  V_60305 = "60305",
  V_60308 = "60308",
  V_60401 = "60401",
  V_60402 = "60402",
  V_60404 = "60404",
  V_60411 = "60411",
  V_60412 = "60412",
  V_60413 = "60413",
  V_60414 = "60414",
  V_60451 = "60451",
  V_60452 = "60452",
  V_60501 = "60501",
  V_60502 = "60502",
  V_60504 = "60504",
  V_60505 = "60505",
  V_60551 = "60551",
  V_60552 = "60552",
  V_60554 = "60554",
  V_60555 = "60555",
  V_60304 = "60304",
  V_60204 = "60204",
  V_60104 = "60104",
  V_60107 = "60107",
  V_60121 = "60121",
  V_60120 = "60120"
}
export const TransactionTypeEtType = mkStringEnum<TransactionTypeEt>(TransactionTypeEt, "TransactionTypeEt")

export enum TaxStatusEt {V_01 = "01", V_02 = "02"}
export const TaxStatusEtType = mkStringEnum<TaxStatusEt>(TaxStatusEt, "TaxStatusEt")

export enum StatementTypeEt {
  HOLD = "HOLD",
  TRAN = "TRAN",
  CONF = "CONF",
  AVAI = "AVAI"
}
export const StatementTypeEtType = mkStringEnum<StatementTypeEt>(StatementTypeEt, "StatementTypeEt")

export enum SenderTypeEt {V_01 = "01", V_02 = "02", V_03 = "03"}
export const SenderTypeEtType = mkStringEnum<SenderTypeEt>(SenderTypeEt, "SenderTypeEt")

export enum SecurityCategoryEt {ORDN = "ORDN", PREF = "PREF"}
export const SecurityCategoryEtType = mkStringEnum<SecurityCategoryEt>(SecurityCategoryEt, "SecurityCategoryEt")

export enum SecurityClassificationEt {
  BOND = "BOND",
  SHAR = "SHAR",
  MFUN = "MFUN",
  RDRP = "RDRP"
}
export const SecurityClassificationEtType = mkStringEnum<SecurityClassificationEt>(SecurityClassificationEt, "SecurityClassificationEt")

export enum ResultReconciliationTotalEt {GOOD = "GOOD", DIVER = "DIVER"}
export const ResultReconciliationTotalEtType = mkStringEnum<ResultReconciliationTotalEt>(ResultReconciliationTotalEt, "ResultReconciliationTotalEt")

export enum ResultReconciliationEt {
  GOOD = "GOOD",
  MANUAL = "MANUAL",
  DIVER = "DIVER",
  SPARE = "SPARE",
  MISSI = "MISSI"
}
export const ResultReconciliationEtType = mkStringEnum<ResultReconciliationEt>(ResultReconciliationEt, "ResultReconciliationEt")

export enum ReportModeEt {PAPER = "PAPER", ELECR = "ELECR"}
export const ReportModeEtType = mkStringEnum<ReportModeEt>(ReportModeEt, "ReportModeEt")

export enum RegionEt {
  V_1 = "1",
  V_2 = "2",
  V_3 = "3",
  V_4 = "4",
  V_5 = "5",
  V_6 = "6",
  V_7 = "7",
  V_8 = "8",
  V_9 = "9",
  V_10 = "10",
  V_11 = "11",
  V_12 = "12",
  V_13 = "13",
  V_14 = "14",
  V_15 = "15",
  V_16 = "16",
  V_17 = "17",
  V_18 = "18",
  V_19 = "19",
  V_20 = "20",
  V_21 = "21",
  V_22 = "22",
  V_23 = "23",
  V_24 = "24",
  V_25 = "25",
  V_26 = "26",
  V_27 = "27",
  V_28 = "28",
  V_29 = "29",
  V_30 = "30",
  V_31 = "31",
  V_32 = "32",
  V_33 = "33",
  V_34 = "34",
  V_35 = "35",
  V_36 = "36",
  V_37 = "37",
  V_38 = "38",
  V_39 = "39",
  V_40 = "40",
  V_41 = "41",
  V_42 = "42",
  V_43 = "43",
  V_44 = "44",
  V_45 = "45",
  V_46 = "46",
  V_47 = "47",
  V_48 = "48",
  V_49 = "49",
  V_50 = "50",
  V_51 = "51",
  V_52 = "52",
  V_53 = "53",
  V_54 = "54",
  V_55 = "55",
  V_56 = "56",
  V_57 = "57",
  V_58 = "58",
  V_59 = "59",
  V_60 = "60",
  V_61 = "61",
  V_62 = "62",
  V_63 = "63",
  V_64 = "64",
  V_65 = "65",
  V_66 = "66",
  V_67 = "67",
  V_68 = "68",
  V_69 = "69",
  V_70 = "70",
  V_71 = "71",
  V_72 = "72",
  V_73 = "73",
  V_74 = "74",
  V_75 = "75",
  V_76 = "76",
  V_77 = "77",
  V_78 = "78",
  V_79 = "79",
  V_83 = "83",
  V_84 = "84",
  V_86 = "86",
  V_87 = "87",
  V_89 = "89",
  V_91 = "91",
  V_92 = "92",
  V_99 = "99"
}
export const RegionEtType = mkStringEnum<RegionEt>(RegionEt, "RegionEt")

export enum PhoneTypeEt {
  HOME = "HOME",
  BIZZ = "BIZZ",
  MOBI = "MOBI",
  FAXI = "FAXI"
}
export const PhoneTypeEtType = mkStringEnum<PhoneTypeEt>(PhoneTypeEt, "PhoneTypeEt")

export enum ProxyForEt {AUOP = "AUOP", AUCH = "AUCH"}
export const ProxyForEtType = mkStringEnum<ProxyForEt>(ProxyForEt, "ProxyForEt")

export enum PartyExchangeTypeEt {REG = "REG", ABON = "ABON"}
export const PartyExchangeTypeEtType = mkStringEnum<PartyExchangeTypeEt>(PartyExchangeTypeEt, "PartyExchangeTypeEt")

export enum OwnerStatusEt {
  LPRS = "LPRS",
  LIPR = "LIPR",
  LLCA = "LLCA",
  MINR = "MINR"
}
export const OwnerStatusEtType = mkStringEnum<OwnerStatusEt>(OwnerStatusEt, "OwnerStatusEt")

export enum OpfEt {
  V_00 = "00",
  V_41 = "41",
  V_42 = "42",
  V_47 = "47",
  V_51 = "51",
  V_52 = "52",
  V_53 = "53",
  V_64 = "64",
  V_65 = "65",
  V_66 = "66",
  V_67 = "67",
  V_68 = "68",
  V_71 = "71",
  V_72 = "72",
  V_73 = "73",
  V_76 = "76",
  V_77 = "77",
  V_78 = "78",
  V_80 = "80",
  V_82 = "82",
  V_83 = "83",
  V_84 = "84",
  V_85 = "85",
  V_86 = "86",
  V_87 = "87",
  V_88 = "88",
  V_89 = "89",
  V_90 = "90",
  V_91 = "91",
  V_92 = "92",
  V_93 = "93",
  V_94 = "94",
  V_96 = "96",
  V_97 = "97",
  V_98 = "98"
}
export const OpfEtType = mkStringEnum<OpfEt>(OpfEt, "OpfEt")

export enum NonresidentTypeEt {V_00 = "00", V_01 = "01"}
export const NonresidentTypeEtType = mkStringEnum<NonresidentTypeEt>(NonresidentTypeEt, "NonresidentTypeEt")

export enum MessageFunctionEt {NEWM = "NEWM", AMND = "AMND"}
export const MessageFunctionEtType = mkStringEnum<MessageFunctionEt>(MessageFunctionEt, "MessageFunctionEt")

export enum LetterGoTypeEt {
  LETR = "LETR",
  KURR = "KURR",
  REGR = "REGR",
  AGNT = "AGNT",
  RLTR = "RLTR",
  NULL = "NULL"
}
export const LetterGoTypeEtType = mkStringEnum<LetterGoTypeEt>(LetterGoTypeEt, "LetterGoTypeEt")

export enum JuridicalSpecialEt {
  FORG = "FORG",
  MORG = "MORG",
  SBRU = "SBRU",
  COMM = "COMM",
  CRED = "CRED",
  CBRF = "CBRF",
  INVF = "INVF",
  INSU = "INSU",
  PENS = "PENS",
  GFICO = "GFICO",
  OFICO = "OFICO",
  BUDG = "BUDG",
  NOBN = "NOBN",
  NFICO = "NFICO",
  GCTRL = "GCTRL",
  NKO = "NKO"
}
export const JuridicalSpecialEtType = mkStringEnum<JuridicalSpecialEt>(JuridicalSpecialEt, "JuridicalSpecialEt")

export enum JuridicalRegDocTypeEt {
  LICS = "LICS",
  REGN = "REGN",
  INCR = "INCR",
  USTV = "USTV",
  UKZP = "UKZP",
  PSTN = "PSTN",
  OTHR = "OTHR",
  NULL = "NULL"
}
export const JuridicalRegDocTypeEtType = mkStringEnum<JuridicalRegDocTypeEt>(JuridicalRegDocTypeEt, "JuridicalRegDocTypeEt")

export enum FormForEt {ACOP = "ACOP", ACCH = "ACCH"}
export const FormForEtType = mkStringEnum<FormForEt>(FormForEt, "FormForEt")

export enum FilterByPercentEt {
  CAPITAL_TOTAL = "CAPITAL_TOTAL",
  ISSUED_TOTAL = "ISSUED_TOTAL",
  PLACED_TOTAL = "PLACED_TOTAL",
  CAPITAL_ORDINARY = "CAPITAL_ORDINARY",
  ISSUED_ORDINARY = "ISSUED_ORDINARY",
  PLACED_ORDINARY = "PLACED_ORDINARY",
  CAPITAL_PREFFERED = "CAPITAL_PREFFERED",
  ISSUED_PREFFERED = "ISSUED_PREFFERED",
  PLACED_PREFFERED = "PLACED_PREFFERED",
  PERCENTAGE_OF_VOTE = "PERCENTAGE_OF_VOTE",
  PERCENTAGE_OF_SHARES_TOTAL = "PERCENTAGE_OF_SHARES_TOTAL",
  PERCENTAGE_OF_SHARES_ORDINARY = "PERCENTAGE_OF_SHARES_ORDINARY",
  PERCENTAGE_OF_SHARES_PREFFERED = "PERCENTAGE_OF_SHARES_PREFFERED"
}
export const FilterByPercentEtType = mkStringEnum<FilterByPercentEt>(FilterByPercentEt, "FilterByPercentEt")

export enum FileTypeEt {DOCX = "DOCX", XLSX = "XLSX", PARTAD_MSG = "PARTAD_MSG"}
export const FileTypeEtType = mkStringEnum<FileTypeEt>(FileTypeEt, "FileTypeEt")

export enum FinancialInstrumentTypeEt {
  COMM = "COMM",
  CONV = "CONV",
  CORP = "CORP",
  PREF = "PREF",
  MFUN = "MFUN",
  BOND = "BOND"
}
export const FinancialInstrumentTypeEtType = mkStringEnum<FinancialInstrumentTypeEt>(FinancialInstrumentTypeEt, "FinancialInstrumentTypeEt")

export enum InformationIndicatorEt {
  OWNL = "OWNL",
  DEPL = "DEPL",
  INML = "INML",
  NOML = "NOML",
  OTHR = "OTHR"
}
export const InformationIndicatorEtType = mkStringEnum<InformationIndicatorEt>(InformationIndicatorEt, "InformationIndicatorEt")

export enum IndividualDocumentTypeEt {
  V_01 = "01",
  V_02 = "02",
  V_03 = "03",
  V_04 = "04",
  V_05 = "05",
  V_06 = "06",
  V_07 = "07",
  V_08 = "08",
  V_09 = "09",
  V_10 = "10",
  V_11 = "11",
  V_12 = "12",
  V_13 = "13",
  V_14 = "14",
  V_15 = "15",
  V_18 = "18",
  V_21 = "21",
  V_22 = "22",
  V_23 = "23",
  V_24 = "24",
  V_26 = "26",
  V_27 = "27",
  V_91 = "91",
  V_00 = "00"
}
export const IndividualDocumentTypeEtType = mkStringEnum<IndividualDocumentTypeEt>(IndividualDocumentTypeEt, "IndividualDocumentTypeEt")

export enum IndivBusinessTypeEt {INDV = "INDV", FERM = "FERM", NOTR = "NOTR"}
export const IndivBusinessTypeEtType = mkStringEnum<IndivBusinessTypeEt>(IndivBusinessTypeEt, "IndivBusinessTypeEt")

export enum FormatReportEt {
  DOCX = "DOCX",
  XLSX = "XLSX",
  PDF = "PDF",
  HTML = "HTML",
  OTHR = "OTHR"
}
export const FormatReportEtType = mkStringEnum<FormatReportEt>(FormatReportEt, "FormatReportEt")

export enum ForeignDocumentTypeEt {
  V_01 = "01",
  V_02 = "02",
  V_03 = "03",
  V_04 = "04",
  V_99 = "99",
  V_00 = "00"
}
export const ForeignDocumentTypeEtType = mkStringEnum<ForeignDocumentTypeEt>(ForeignDocumentTypeEt, "ForeignDocumentTypeEt")

export enum DocTypeEt {
  FORM = "FORM",
  FRPL = "FRPL",
  FRMN = "FRMN",
  APPL = "APPL",
  BANK = "BANK",
  PROX = "PROX",
  REPR = "REPR",
  MNGR = "MNGR",
  ATTC = "ATTC",
  BENF = "BENF",
  ACTU = "ACTU",
  PLDG = "PLDG",
  NOTR = "NOTR",
  REQU = "REQU",
  ORDR = "ORDR",
  JUDG = "JUDG",
  PASS = "PASS",
  TRAN = "TRAN",
  COMB = "COMB",
  MEET = "MEET",
  BLOK = "BLOK",
  UNBL = "UNBL",
  UNPL = "UNPL",
  PLMF = "PLMF",
  PLDL = "PLDL",
  INHE = "INHE",
  CREG = "CREG",
  COGR = "COGR",
  LOGR = "LOGR",
  CHAR = "CHAR",
  SIGN = "SIGN",
  CLOS = "CLOS",
  OTHR = "OTHR"
}
export const DocTypeEtType = mkStringEnum<DocTypeEt>(DocTypeEt, "DocTypeEt")

export enum DocProcessingEt {
  NOSEND = "NOSEND",
  REGIST = "REGIST",
  EXEC = "EXEC",
  REJECT = "REJECT",
  ANNUL = "ANNUL"
}
export const DocProcessingEtType = mkStringEnum<DocProcessingEt>(DocProcessingEt, "DocProcessingEt")

export enum DeliveryPlaceEt {REGR = "REGR", TAGN = "TAGN"}
export const DeliveryPlaceEtType = mkStringEnum<DeliveryPlaceEt>(DeliveryPlaceEt, "DeliveryPlaceEt")

export enum DeliveryMethodEt {
  V_01 = "01",
  V_02 = "02",
  V_03 = "03",
  V_04 = "04",
  V_05 = "05"
}
export const DeliveryMethodEtType = mkStringEnum<DeliveryMethodEt>(DeliveryMethodEt, "DeliveryMethodEt")

export enum DistrDivFrmEt {
  CASH = "CASH",
  BANK = "BANK",
  POST = "POST",
  NULL = "NULL"
}
export const DistrDivFrmEtType = mkStringEnum<DistrDivFrmEt>(DistrDivFrmEt, "DistrDivFrmEt")

export enum CountryEt {
  AB = "AB",
  AU = "AU",
  AT = "AT",
  AZ = "AZ",
  AL = "AL",
  DZ = "DZ",
  AS = "AS",
  AI = "AI",
  AO = "AO",
  AD = "AD",
  AQ = "AQ",
  AG = "AG",
  AR = "AR",
  AM = "AM",
  AW = "AW",
  AF = "AF",
  BS = "BS",
  BD = "BD",
  BB = "BB",
  BH = "BH",
  BY = "BY",
  BZ = "BZ",
  BE = "BE",
  BJ = "BJ",
  BM = "BM",
  BG = "BG",
  BO = "BO",
  BA = "BA",
  BW = "BW",
  BR = "BR",
  IO = "IO",
  BN = "BN",
  BF = "BF",
  BI = "BI",
  BT = "BT",
  VU = "VU",
  HU = "HU",
  VE = "VE",
  VG = "VG",
  VI = "VI",
  VN = "VN",
  GA = "GA",
  GY = "GY",
  HT = "HT",
  GM = "GM",
  GH = "GH",
  GP = "GP",
  GT = "GT",
  GN = "GN",
  GW = "GW",
  DE = "DE",
  GG = "GG",
  GI = "GI",
  HN = "HN",
  HK = "HK",
  GD = "GD",
  GL = "GL",
  GR = "GR",
  GE = "GE",
  GU = "GU",
  DK = "DK",
  JE = "JE",
  DJ = "DJ",
  DM = "DM",
  DO = "DO",
  EG = "EG",
  ZM = "ZM",
  EH = "EH",
  ZW = "ZW",
  YE = "YE",
  IL = "IL",
  IN = "IN",
  ID = "ID",
  JO = "JO",
  IQ = "IQ",
  IR = "IR",
  IE = "IE",
  IS = "IS",
  ES = "ES",
  IT = "IT",
  CV = "CV",
  KZ = "KZ",
  KH = "KH",
  CM = "CM",
  CA = "CA",
  QA = "QA",
  KE = "KE",
  CY = "CY",
  KG = "KG",
  KI = "KI",
  CN = "CN",
  CC = "CC",
  CO = "CO",
  KM = "KM",
  CG = "CG",
  CD = "CD",
  KP = "KP",
  KR = "KR",
  CR = "CR",
  CI = "CI",
  CU = "CU",
  KW = "KW",
  LA = "LA",
  LV = "LV",
  LS = "LS",
  LR = "LR",
  LB = "LB",
  LY = "LY",
  LT = "LT",
  LI = "LI",
  LU = "LU",
  MU = "MU",
  MR = "MR",
  MG = "MG",
  YT = "YT",
  MO = "MO",
  MW = "MW",
  MY = "MY",
  ML = "ML",
  UM = "UM",
  MV = "MV",
  MT = "MT",
  MA = "MA",
  MQ = "MQ",
  MH = "MH",
  MX = "MX",
  FM = "FM",
  MZ = "MZ",
  MD = "MD",
  MC = "MC",
  MN = "MN",
  MS = "MS",
  MM = "MM",
  NA = "NA",
  NR = "NR",
  NP = "NP",
  NE = "NE",
  NG = "NG",
  AN = "AN",
  NL = "NL",
  NI = "NI",
  NU = "NU",
  NZ = "NZ",
  NC = "NC",
  NO = "NO",
  AE = "AE",
  OM = "OM",
  BV = "BV",
  IM = "IM",
  NF = "NF",
  CX = "CX",
  HM = "HM",
  KY = "KY",
  CK = "CK",
  TC = "TC",
  PK = "PK",
  PW = "PW",
  PS = "PS",
  PA = "PA",
  VA = "VA",
  PG = "PG",
  PY = "PY",
  PE = "PE",
  PN = "PN",
  PL = "PL",
  PT = "PT",
  PR = "PR",
  MK = "MK",
  RE = "RE",
  RU = "RU",
  RW = "RW",
  RO = "RO",
  WS = "WS",
  SM = "SM",
  ST = "ST",
  SA = "SA",
  SZ = "SZ",
  SH = "SH",
  MP = "MP",
  SC = "SC",
  BL = "BL",
  SN = "SN",
  MF = "MF",
  VC = "VC",
  KN = "KN",
  LC = "LC",
  PM = "PM",
  RS = "RS",
  SG = "SG",
  SY = "SY",
  SK = "SK",
  SI = "SI",
  GB = "GB",
  US = "US",
  SB = "SB",
  SO = "SO",
  SD = "SD",
  SR = "SR",
  SL = "SL",
  TJ = "TJ",
  TW = "TW",
  TH = "TH",
  TZ = "TZ",
  TL = "TL",
  TG = "TG",
  TK = "TK",
  TO = "TO",
  TT = "TT",
  TV = "TV",
  TN = "TN",
  TM = "TM",
  TR = "TR",
  UG = "UG",
  UZ = "UZ",
  UA = "UA",
  WF = "WF",
  UY = "UY",
  FO = "FO",
  FJ = "FJ",
  PH = "PH",
  FI = "FI",
  FK = "FK",
  FR = "FR",
  GF = "GF",
  PF = "PF",
  TF = "TF",
  HR = "HR",
  CF = "CF",
  TD = "TD",
  ME = "ME",
  CZ = "CZ",
  CL = "CL",
  CH = "CH",
  SE = "SE",
  SJ = "SJ",
  LK = "LK",
  EC = "EC",
  GQ = "GQ",
  AX = "AX",
  SV = "SV",
  ER = "ER",
  EE = "EE",
  ET = "ET",
  ZA = "ZA",
  GS = "GS",
  OS = "OS",
  JM = "JM",
  JP = "JP"
}
export const CountryEtType = mkStringEnum<CountryEt>(CountryEt, "CountryEt")

export enum CorporateActionEventEt {
  BIDS = "BIDS",
  BONU = "BONU",
  BPUT = "BPUT",
  CONV = "CONV",
  DECR = "DECR",
  DRAW = "DRAW",
  DVCA = "DVCA",
  INCR = "INCR",
  EXOF = "EXOF",
  INTR = "INTR",
  MCAL = "MCAL",
  MEET = "MEET",
  REDM = "REDM",
  SPLF = "SPLF",
  SPLR = "SPLR",
  XMET = "XMET",
  PRII = "PRII",
  MRGR = "MRGR",
  OTHR = "OTHR"
}
export const CorporateActionEventEtType = mkStringEnum<CorporateActionEventEt>(CorporateActionEventEt, "CorporateActionEventEt")

export enum CoownersTypeEt {V_10 = "10", V_11 = "11"}
export const CoownersTypeEtType = mkStringEnum<CoownersTypeEt>(CoownersTypeEt, "CoownersTypeEt")

export enum CoownerFormForEt {ACOP = "ACOP", COAD = "COAD", COCH = "COCH"}
export const CoownerFormForEtType = mkStringEnum<CoownerFormForEt>(CoownerFormForEt, "CoownerFormForEt")

export enum ContractEt {
  AGTC = "AGTC",
  BYSA = "BYSA",
  COLA = "COLA",
  COMC = "COMC",
  DEPA = "DEPA",
  DSTA = "DSTA",
  EXGA = "EXGA",
  GIFA = "GIFA",
  INDA = "INDA",
  NCBO = "NCBO",
  NOMA = "NOMA",
  ORDA = "ORDA",
  OTHR = "OTHR",
  PLGA = "PLGA",
  TRSA = "TRSA",
  JUST = "JUST",
  ILST = "ILST",
  INHE = "INHE",
  REPO = "REPO",
  CONT = "CONT",
  REDF = "REDF",
  REDO = "REDO"
}
export const ContractEtType = mkStringEnum<ContractEt>(ContractEt, "ContractEt")

export enum ConditionTypeEt {no = "no", all = "all", part = "part"}
export const ConditionTypeEtType = mkStringEnum<ConditionTypeEt>(ConditionTypeEt, "ConditionTypeEt")

export enum BlockoperTypeEt {
  ALLS = "ALLS",
  DELI = "DELI",
  DERE = "DERE",
  STOC = "STOC",
  DEPL = "DEPL"
}
export const BlockoperTypeEtType = mkStringEnum<BlockoperTypeEt>(BlockoperTypeEt, "BlockoperTypeEt")

export enum BlockReasonEt {
  ARST = "ARST",
  DEAT = "DEAT",
  BUY8 = "BUY8",
  THIR = "THIR",
  OTHR = "OTHR"
}
export const BlockReasonEtType = mkStringEnum<BlockReasonEt>(BlockReasonEt, "BlockReasonEt")

export enum BlockTypeEt {
  BLOK = "BLOK",
  BLOP = "BLOP",
  BLON = "BLON",
  PLDG = "PLDG",
  PLDN = "PLDN",
  UNPA = "UNPA"
}
export const BlockTypeEtType = mkStringEnum<BlockTypeEt>(BlockTypeEt, "BlockTypeEt")

export enum AuthorisedPersonTypeEt {
  V_001 = "001",
  V_002 = "002",
  V_003 = "003",
  V_004 = "004",
  V_005 = "005",
  V_006 = "006",
  V_007 = "007",
  V_008 = "008",
  V_009 = "009",
  V_010 = "010",
  V_011 = "011",
  V_012 = "012"
}
export const AuthorisedPersonTypeEtType = mkStringEnum<AuthorisedPersonTypeEt>(AuthorisedPersonTypeEt, "AuthorisedPersonTypeEt")

export enum AccountTypeEt {
  ISSUE = "ISSUE",
  EMITENT = "EMITENT",
  OWNER = "OWNER",
  NOMINEE = "NOMINEE",
  TRUSTEE = "TRUSTEE",
  PLEDGEE = "PLEDGEE",
  UNKNOWN = "UNKNOWN",
  NOTARY = "NOTARY",
  RIGHTS = "RIGHTS",
  TREASURY = "TREASURY",
  DEPOSIT = "DEPOSIT",
  NDCD = "NDCD",
  FORNOMINEE = "FORNOMINEE",
  FORAUTHOR = "FORAUTHOR",
  DEPOPROG = "DEPOPROG"
}
export const AccountTypeEtType = mkStringEnum<AccountTypeEt>(AccountTypeEt, "AccountTypeEt")

export const UnpaidInfoTType = iots.intersection([
  iots.interface({
    unpaidType: BlockTypeTType,
    security: SecurityInfoTType,
    quantity: UnitsOrFractionTType,
    basedInfo: iots.array(BasedInfoTType)
  }),
  iots.partial({
    idUnpaid: iots.number,
    unpaidDate: T.date,
    conditionUnpaid: ConditionBlockTType,
    comment: iots.string
  })
], "UnpaidInfoT")
export interface UnpaidInfoT extends iots.TypeOf<typeof UnpaidInfoTType> {}

export const UnitsOrFractionTFractionType = iots.intersection([
  iots.interface({numerator: iots.number, denominator: iots.number})
], "UnitsOrFractionTFraction")
export interface UnitsOrFractionTFraction extends iots.TypeOf<typeof UnitsOrFractionTFractionType> {}

export const UnitsOrFractionTType = iots.intersection([
  iots.interface({units: iots.number}),
  iots.partial({fraction: UnitsOrFractionTFractionType})
], "UnitsOrFractionT")
export interface UnitsOrFractionT extends iots.TypeOf<typeof UnitsOrFractionTType> {}

export const TransferAgentInfoTType = iots.intersection([
  iots.interface({taInfo: JuridicalInfoTType}),
  iots.partial({
    taId: IdTType,
    taLegalAddress: iots.union([AddressLegalTType,iots.null])
  })
], "TransferAgentInfoT")
export interface TransferAgentInfoT extends iots.TypeOf<typeof TransferAgentInfoTType> {}

export const TransactionTType = iots.intersection([
  iots.interface({
    security: SecurityInfoTType,
    quantity: UnitsOrFractionTType,
    blockIndicator: YesNoTType,
    basedInfo: iots.array(BasedInfoTType)
  }),
  iots.partial({
    transactionType: TransactionTypeEtType,
    settlementAmount: CurrencyAndAmountTType,
    pledgeInfo: PledgeInfoTType,
    unpaidInfo: UnpaidInfoTType,
    comment: iots.string,
    reference: iots.string,
    owner: iots.string
  })
], "TransactionT")
export interface TransactionT extends iots.TypeOf<typeof TransactionTType> {}

export const TaxCategoryTType = iots.intersection([
  iots.interface({
    taxStatusCode: TaxStatusEtType,
    taxExemptIndicator: YesNoTType
  }),
  iots.partial({nonresidentType: NonresidentTypeEtType, narrative: iots.string})
], "TaxCategoryT")
export interface TaxCategoryT extends iots.TypeOf<typeof TaxCategoryTType> {}

export const SecurityQuantityTBlockedType = iots.intersection([
  iots.interface({quantity: UnitsOrFractionTType, blockType: BlockTypeTType})
], "SecurityQuantityTBlocked")
export interface SecurityQuantityTBlocked extends iots.TypeOf<typeof SecurityQuantityTBlockedType> {}

export const SecurityQuantityTType = iots.intersection([
  iots.interface({
    total: UnitsOrFractionTType,
    blocked: iots.array(SecurityQuantityTBlockedType)
  })
], "SecurityQuantityT")
export interface SecurityQuantityT extends iots.TypeOf<typeof SecurityQuantityTType> {}

export const SecurityBalanceTType = iots.intersection([
  iots.interface({security: SecurityInfoTType, quantity: SecurityQuantityTType})
], "SecurityBalanceT")
export interface SecurityBalanceT extends iots.TypeOf<typeof SecurityBalanceTType> {}

export const SecurityInfoTType = iots.intersection([
  iots.interface({
    securityClassification: SecurityClassificationEtType,
    stateRegNum: iots.string
  }),
  iots.partial({
    securityCategory: SecurityCategoryEtType,
    securityType: iots.string,
    nominalValue: UnitsOrFractionTType,
    stateRegDate: T.date,
    proprietarySecurityCode: IdTType
  })
], "SecurityInfoT")
export interface SecurityInfoT extends iots.TypeOf<typeof SecurityInfoTType> {}

export const ScanInfoTMimeTypeType = iots.string
export type ScanInfoTMimeType = string

export const ScanInfoTType = iots.intersection([
  iots.interface({mimeType: ScanInfoTMimeTypeType, location: iots.string})
], "ScanInfoT")
export interface ScanInfoT extends iots.TypeOf<typeof ScanInfoTType> {}

export const RussianPublicTType = iots.intersection([
  iots.interface({official: YesNoTType}),
  iots.partial({comment: iots.string})
], "RussianPublicT")
export interface RussianPublicT extends iots.TypeOf<typeof RussianPublicTType> {}

export const ReconciliationInfoTType = iots.intersection([
  iots.interface({resultReconciliation: ResultReconciliationEtType}),
  iots.partial({narrative: iots.string})
], "ReconciliationInfoT")
export interface ReconciliationInfoT extends iots.TypeOf<typeof ReconciliationInfoTType> {}

export const RegistrarInfoTType = iots.intersection([
  iots.interface({
    registrarInfo: JuridicalInfoTType,
    registrarLegalAddress: iots.union([AddressLegalTType,iots.null]),
    contacts: ContactsTType
  })
], "RegistrarInfoT")
export interface RegistrarInfoT extends iots.TypeOf<typeof RegistrarInfoTType> {}

export const PledgeInfoTType = iots.intersection([
  iots.interface({
    pledgeType: BlockTypeTType,
    repeatPledge: YesNoTType,
    accountPledgee: AccountIdentTType,
    security: SecurityInfoTType,
    quantity: UnitsOrFractionTType,
    basedInfo: iots.array(BasedInfoTType)
  }),
  iots.partial({
    idPledge: iots.number,
    pledgeDate: T.date,
    conditionPledge: ConditionPledgeTType,
    comment: iots.string
  })
], "PledgeInfoT")
export interface PledgeInfoT extends iots.TypeOf<typeof PledgeInfoTType> {}

export const PhoneTType = iots.intersection([
  iots.interface({phoneNum: iots.string}),
  iots.partial({phoneType: PhoneTypeEtType})
], "PhoneT")
export interface PhoneT extends iots.TypeOf<typeof PhoneTType> {}

export const PersonInfo2TType = iots.intersection([
  iots.partial({juridical: JuridicalInfoTType, individual: IndividualInfoTType})
], "PersonInfo2T")
export interface PersonInfo2T extends iots.TypeOf<typeof PersonInfo2TType> {}

export const PersonInfoTType = iots.intersection([
  iots.partial({
    juridical: JuridicalInfoTType,
    individual: IndividualInfoTType,
    coowners: CoownershipInfoTType
  })
], "PersonInfoT")
export interface PersonInfoT extends iots.TypeOf<typeof PersonInfoTType> {}

export const PartyExchangeInfoTType = iots.intersection([
  iots.interface({typeParty: PartyExchangeTypeEtType, name: iots.string})
], "PartyExchangeInfoT")
export interface PartyExchangeInfoT extends iots.TypeOf<typeof PartyExchangeInfoTType> {}

export const OutdocInfoTType = iots.intersection([
  iots.interface({
    outdocNum: iots.union([iots.string,iots.null]),
    outdocDate: DateOrDatetimeTType,
    outdocName: iots.string,
    reportMode: ReportModeEtType,
    deliveryState: YesNoTType
  }),
  iots.partial({
    messageType: iots.string,
    receiptDate: DateOrDatetimeTType,
    deliveryDate: DateOrDatetimeTType,
    delivery: DeliveryDocTType
  })
], "OutdocInfoT")
export interface OutdocInfoT extends iots.TypeOf<typeof OutdocInfoTType> {}

export const OutDocTType = iots.intersection([
  iots.interface({
    docNum: iots.string,
    docDate: DateOrDatetimeTType,
    docLink: iots.union([DocLinkTType,iots.null])
  }),
  iots.partial({docDelivery: DeliveryDocTType})
], "OutDocT")
export interface OutDocT extends iots.TypeOf<typeof OutDocTType> {}

export const OpfTType = iots.intersection([
  iots.interface({opfType: OpfEtType}),
  iots.partial({narrative: iots.string})
], "OpfT")
export interface OpfT extends iots.TypeOf<typeof OpfTType> {}

export const OperationUnpaidCancelTType = iots.intersection([
  iots.interface({
    accountOwner: AccountIdentTType,
    unpaidInfo: UnpaidInfoTType,
    quantityCancel: UnitsOrFractionTType
  }),
  iots.partial({authorisedPersonOwner: AuthorisedPersonInfoTType})
], "OperationUnpaidCancelT")
export interface OperationUnpaidCancelT extends iots.TypeOf<typeof OperationUnpaidCancelTType> {}

export const OperationUnpaidTType = iots.intersection([
  iots.interface({
    accountOwner: AccountIdentTType,
    unpaidInfo: UnpaidInfoTType
  }),
  iots.partial({authorisedPersonOwner: AuthorisedPersonInfoTType})
], "OperationUnpaidT")
export interface OperationUnpaidT extends iots.TypeOf<typeof OperationUnpaidTType> {}

export const OperationUnpledgeTType = iots.intersection([
  iots.interface({
    accountOwner: AccountIdentTType,
    pledgeInfo: PledgeInfoTType,
    quantityUnpledge: UnitsOrFractionTType
  }),
  iots.partial({
    authorisedPersonOwner: AuthorisedPersonInfoTType,
    quantityConvert: UnitsOrFractionTType,
    quantityDivid: UnitsOrFractionTType,
    quantityVote: UnitsOrFractionTType
  })
], "OperationUnpledgeT")
export interface OperationUnpledgeT extends iots.TypeOf<typeof OperationUnpledgeTType> {}

export const OperationTransactionTType = iots.intersection([
  iots.interface({
    accountDeliv: AccountIdentTType,
    accountReceiv: AccountIdentTType,
    transaction: TransactionTType
  }),
  iots.partial({authorisedPersonDeliv: AuthorisedPersonIdentTType})
], "OperationTransactionT")
export interface OperationTransactionT extends iots.TypeOf<typeof OperationTransactionTType> {}

export const OperationPledgeDeliverTType = iots.intersection([
  iots.interface({
    accountOwner: AccountIdentTType,
    pledgeInfo: PledgeInfoTType,
    accountPledgeeNew: AccountIdentTType,
    quantityDeliver: UnitsOrFractionTType,
    basedInfo: iots.array(BasedInfoTType)
  }),
  iots.partial({authorisedPersonOwner: AuthorisedPersonInfoTType})
], "OperationPledgeDeliverT")
export interface OperationPledgeDeliverT extends iots.TypeOf<typeof OperationPledgeDeliverTType> {}

export const OperationPledgeModifyTType = iots.intersection([
  iots.interface({
    accountOwner: AccountIdentTType,
    pledgeInfo: PledgeInfoTType,
    conditionPledgeNew: ConditionPledgeTType,
    comment: iots.string
  }),
  iots.partial({authorisedPersonOwner: AuthorisedPersonInfoTType})
], "OperationPledgeModifyT")
export interface OperationPledgeModifyT extends iots.TypeOf<typeof OperationPledgeModifyTType> {}

export const OperationPledgeTType = iots.intersection([
  iots.interface({
    accountOwner: AccountIdentTType,
    pledgeInfo: PledgeInfoTType
  }),
  iots.partial({
    authorisedPersonOwner: AuthorisedPersonInfoTType,
    pledgePrev: PledgeInfoTType,
    unpaidPrev: UnpaidInfoTType
  })
], "OperationPledgeT")
export interface OperationPledgeT extends iots.TypeOf<typeof OperationPledgeTType> {}

export const OperationUnblockTType = iots.intersection([
  iots.interface({
    accountOwner: AccountIdentTType,
    blockInfo: BlockInfoTType,
    quantityUnblock: UnitsOrFractionTType
  }),
  iots.partial({authorisedPersonOwner: AuthorisedPersonInfoTType})
], "OperationUnblockT")
export interface OperationUnblockT extends iots.TypeOf<typeof OperationUnblockTType> {}

export const OperationConvertTType = iots.intersection([
  iots.interface({
    accountOwner: AccountIdentTType,
    securityDeliv: SecurityInfoTType,
    securityReceip: SecurityInfoTType,
    quantity: UnitsOrFractionTType,
    numerator: iots.number,
    denominator: iots.number
  }),
  iots.partial({authorisedPersonOwner: AuthorisedPersonIdentTType})
], "OperationConvertT")
export interface OperationConvertT extends iots.TypeOf<typeof OperationConvertTType> {}

export const OperationBlockoperTType = iots.intersection([
  iots.interface({
    accountOwner: AccountIdentTType,
    blockoperInfo: BlockoperInfoTType
  }),
  iots.partial({authorisedPersonOwner: AuthorisedPersonInfoTType})
], "OperationBlockoperT")
export interface OperationBlockoperT extends iots.TypeOf<typeof OperationBlockoperTType> {}

export const OperationBlockTType = iots.intersection([
  iots.interface({accountOwner: AccountIdentTType, blockInfo: BlockInfoTType}),
  iots.partial({
    authorisedPersonOwner: AuthorisedPersonInfoTType,
    blockPrev: BlockInfoTType,
    pledgePrev: PledgeInfoTType,
    unpaidPrev: UnpaidInfoTType
  })
], "OperationBlockT")
export interface OperationBlockT extends iots.TypeOf<typeof OperationBlockTType> {}

export const OperationProxyCancelTType = iots.intersection([
  iots.interface({
    accountIdent: AccountIdentTType,
    identAuthorisedPerson: AuthorisedPersonIdentTType
  })
], "OperationProxyCancelT")
export interface OperationProxyCancelT extends iots.TypeOf<typeof OperationProxyCancelTType> {}

export const OperationProxyTPowersType = iots.intersection([
  iots.interface({
    basesOfPowers: BasesOfPowersTType,
    rightsSignature: YesNoTType,
    rightsVoting: YesNoTType,
    rightsDividend: YesNoTType,
    rightsDocum: YesNoTType,
    rightsCourier: YesNoTType
  }),
  iots.partial({comment: iots.string})
], "OperationProxyTPowers")
export interface OperationProxyTPowers extends iots.TypeOf<typeof OperationProxyTPowersType> {}

export const OperationProxyTType = iots.intersection([
  iots.interface({
    accountIdent: AccountIdentTType,
    authorisedPersonType: AuthorisedPersonTypeEtType,
    authorisedPersonForm: ContentFormOfAuthorisedTType,
    powers: OperationProxyTPowersType
  }),
  iots.partial({identAuthorisedPerson: AuthorisedPersonIdentTType})
], "OperationProxyT")
export interface OperationProxyT extends iots.TypeOf<typeof OperationProxyTType> {}

export const OperationFounderCloseTType = iots.intersection([
  iots.interface({accountIdent: AccountIdentTType})
], "OperationFounderCloseT")
export interface OperationFounderCloseT extends iots.TypeOf<typeof OperationFounderCloseTType> {}

export const OperationFounderTType = iots.intersection([
  iots.interface({
    founderForm: ContentFormOfShareholdersTType,
    duConditions: DuConditionsTType
  }),
  iots.partial({accountIdent: AccountIdentTType})
], "OperationFounderT")
export interface OperationFounderT extends iots.TypeOf<typeof OperationFounderTType> {}

export const OperationFormTAddTrusteeType = iots.intersection([
  iots.interface({profi: YesNoTType}),
  iots.partial({
    founderForm: ContentFormOfShareholdersTType,
    duConditions: DuConditionsTType
  })
], "OperationFormTAddTrustee")
export interface OperationFormTAddTrustee extends iots.TypeOf<typeof OperationFormTAddTrusteeType> {}

export const OperationFormTType = iots.intersection([
  iots.interface({shareholderForm: ContentFormOfShareholdersTType}),
  iots.partial({
    accountIdent: AccountIdentTType,
    addTrustee: OperationFormTAddTrusteeType
  })
], "OperationFormT")
export interface OperationFormT extends iots.TypeOf<typeof OperationFormTType> {}

export const OperationCoownersQuotaTType = iots.intersection([
  iots.interface({
    accountIdent: AccountIdentTType,
    coownerQuota: iots.array(CoownerInfoQuotaTType)
  })
], "OperationCoownersQuotaT")
export interface OperationCoownersQuotaT extends iots.TypeOf<typeof OperationCoownersQuotaTType> {}

export const OperationCoownerCloseTType = iots.intersection([
  iots.interface({
    accountIdent: AccountIdentTType,
    coownerIdent: CoownerInfoTType
  })
], "OperationCoownerCloseT")
export interface OperationCoownerCloseT extends iots.TypeOf<typeof OperationCoownerCloseTType> {}

export const OperationCoownerTType = iots.intersection([
  iots.interface({coownerForm: ContentFormOfCoownerTType}),
  iots.partial({
    accountIdent: AccountIdentTType,
    coownerIdent: CoownerInfoTType,
    quota: CoownerQuotaTType
  })
], "OperationCoownerT")
export interface OperationCoownerT extends iots.TypeOf<typeof OperationCoownerTType> {}

export const OperationAccountCloseTType = iots.intersection([
  iots.interface({accountIdent: AccountIdentTType}),
  iots.partial({authorisedPerson: AuthorisedPersonInfoTType})
], "OperationAccountCloseT")
export interface OperationAccountCloseT extends iots.TypeOf<typeof OperationAccountCloseTType> {}

export const OperationBriefTProcessingInfoType = iots.intersection([
  iots.interface({
    operationName: iots.string,
    operationNumb: iots.number,
    operationDate: T.date
  }),
  iots.partial({idOperation: iots.number})
], "OperationBriefTProcessingInfo")
export interface OperationBriefTProcessingInfo extends iots.TypeOf<typeof OperationBriefTProcessingInfoType> {}

export const OperationBriefTType = iots.intersection([
  iots.interface({baseDoc: BaseDocTType}),
  iots.partial({
    processingInfo: OperationBriefTProcessingInfoType,
    security: SecurityInfoTType,
    quantity: UnitsOrFractionTType
  })
], "OperationBriefT")
export interface OperationBriefT extends iots.TypeOf<typeof OperationBriefTType> {}

export const OperationTProcessingInfoType = iots.intersection([
  iots.interface({
    operationName: iots.string,
    operationNumb: iots.number,
    operationDate: T.date
  }),
  iots.partial({idOperation: iots.number})
], "OperationTProcessingInfo")
export interface OperationTProcessingInfo extends iots.TypeOf<typeof OperationTProcessingInfoType> {}

export const OperationTType = iots.intersection([
  iots.interface({
    baseDoc: BaseDocTType,
    processingInfo: OperationTProcessingInfoType
  }),
  iots.partial({
    accountOpen: OperationFormTType,
    accountModify: OperationFormTType,
    transaction: OperationTransactionTType,
    block: OperationBlockTType,
    unblock: OperationUnblockTType,
    pledge: OperationPledgeTType,
    unpledge: OperationUnpledgeTType,
    pledgeModify: OperationPledgeModifyTType,
    pledgeDeliver: OperationPledgeDeliverTType,
    unpaid: OperationUnpaidTType,
    unpaidCancel: OperationUnpaidCancelTType,
    blockoper: OperationBlockoperTType,
    unblockoper: OperationBlockoperTType,
    convert: OperationConvertTType,
    coownerOpen: OperationCoownerTType,
    coownerModify: OperationCoownerTType,
    coownerClose: OperationCoownerCloseTType,
    coownerQuota: OperationCoownersQuotaTType,
    proxyOpen: OperationProxyTType,
    proxyModify: OperationProxyTType,
    proxyCancel: OperationProxyCancelTType,
    accountClose: OperationAccountCloseTType,
    founderOpen: OperationFounderTType,
    founderModify: OperationFounderTType,
    founderClose: OperationFounderCloseTType
  })
], "OperationT")
export interface OperationT extends iots.TypeOf<typeof OperationTType> {}

export const OfficialInfoTType = iots.intersection([
  iots.interface({officialInfo: AuthorisedPersonInfoTType}),
  iots.partial({
    officialForm: OfficialFormTType,
    contacts: ContactsTType,
    comment: iots.string,
    premier: YesNoTType,
    premierBenefit: YesNoTType
  })
], "OfficialInfoT")
export interface OfficialInfoT extends iots.TypeOf<typeof OfficialInfoTType> {}

export const OfficialFormTType = iots.intersection([
  iots.partial({
    juridical: OfficialFormJuridicalTType,
    individual: OfficialFormIndividualTType
  })
], "OfficialFormT")
export interface OfficialFormT extends iots.TypeOf<typeof OfficialFormTType> {}

export const OfficialFormJuridicalTType = iots.intersection([
  iots.interface({official: iots.array(OfficialInfoTType)}),
  iots.partial({
    nationality: CountryEtType,
    address: AddressNostructTType,
    inn: iots.string
  })
], "OfficialFormJuridicalT")
export interface OfficialFormJuridicalT extends iots.TypeOf<typeof OfficialFormJuridicalTType> {}

export const OfficialFormIndividualTType = iots.intersection([
  iots.partial({
    birthtday: T.date,
    placeOfBirth: iots.string,
    nationality: CountryEtType,
    foreignDocument: ForeignDocumentTType,
    address: AddressNostructTType,
    inn: iots.string,
    foreignPublic: ForeignPublicTType,
    russianPublic: RussianPublicTType
  })
], "OfficialFormIndividualT")
export interface OfficialFormIndividualT extends iots.TypeOf<typeof OfficialFormIndividualTType> {}

export const MsgTType = iots.intersection([
  iots.interface({
    msgSender: PartyExchangeInfoTType,
    msgRecipient: PartyExchangeInfoTType,
    version: iots.string,
    uid: UuidTType
  })
], "MsgT")
export interface MsgT extends iots.TypeOf<typeof MsgTType> {}

export const LicenceTLicEndType = iots.intersection([
  iots.interface({unlimited: YesNoTType}),
  iots.partial({endDate: T.date})
], "LicenceTLicEnd")
export interface LicenceTLicEnd extends iots.TypeOf<typeof LicenceTLicEndType> {}

export const LicenceTType = iots.intersection([
  iots.interface({
    licNum: iots.union([iots.string,iots.null]),
    licDate: iots.union([T.date,iots.null])
  }),
  iots.partial({
    licName: iots.string,
    licPlace: iots.string,
    licEnd: LicenceTLicEndType
  })
], "LicenceT")
export interface LicenceT extends iots.TypeOf<typeof LicenceTType> {}

export const JuridicalRegistrationTType = iots.intersection([
  iots.partial({ogrn: JuridicalOgrnTType, regDoc: JuridicalRegDocTType})
], "JuridicalRegistrationT")
export interface JuridicalRegistrationT extends iots.TypeOf<typeof JuridicalRegistrationTType> {}

export const JuridicalRegDocTType = iots.intersection([
  iots.interface({
    regDocType: JuridicalDocTypeTType,
    regNum: iots.union([iots.string,iots.null]),
    regDate: iots.union([T.date,iots.null])
  }),
  iots.partial({regSeries: iots.string, regPlace: iots.string})
], "JuridicalRegDocT")
export interface JuridicalRegDocT extends iots.TypeOf<typeof JuridicalRegDocTType> {}

export const JuridicalDocTypeTType = iots.intersection([
  iots.interface({juridicalDocType: JuridicalRegDocTypeEtType}),
  iots.partial({narrative: iots.string})
], "JuridicalDocTypeT")
export interface JuridicalDocTypeT extends iots.TypeOf<typeof JuridicalDocTypeTType> {}

export const JuridicalOgrnTType = iots.intersection([
  iots.interface({ogrn: iots.string, ogrnDate: iots.union([T.date,iots.null])}),
  iots.partial({ogrnPlace: iots.string})
], "JuridicalOgrnT")
export interface JuridicalOgrnT extends iots.TypeOf<typeof JuridicalOgrnTType> {}

export const JuridicalInfoTJuridicalNameType = iots.string
export type JuridicalInfoTJuridicalName = string

export const JuridicalInfoTType = iots.intersection([
  iots.interface({
    juridicalName: JuridicalInfoTJuridicalNameType,
    juridicalRegistration: JuridicalRegistrationTType
  })
], "JuridicalInfoT")
export interface JuridicalInfoT extends iots.TypeOf<typeof JuridicalInfoTType> {}

export const IssuerInfoTType = iots.intersection([
  iots.interface({issuerInfo: JuridicalInfoTType}),
  iots.partial({issuerId: IdTType, issuerLegalAddress: AddressLegalTType})
], "IssuerInfoT")
export interface IssuerInfoT extends iots.TypeOf<typeof IssuerInfoTType> {}

export const InfoAnalyticsTIssuerSubdivType = iots.intersection([
  iots.interface({id: IdTType}),
  iots.partial({narrative: iots.string})
], "InfoAnalyticsTIssuerSubdiv")
export interface InfoAnalyticsTIssuerSubdiv extends iots.TypeOf<typeof InfoAnalyticsTIssuerSubdivType> {}

export const InfoAnalyticsTIssuerCategType = iots.intersection([
  iots.interface({id: IdTType}),
  iots.partial({narrative: iots.string})
], "InfoAnalyticsTIssuerCateg")
export interface InfoAnalyticsTIssuerCateg extends iots.TypeOf<typeof InfoAnalyticsTIssuerCategType> {}

export const InfoAnalyticsTType = iots.intersection([
  iots.partial({
    issuerSubdiv: InfoAnalyticsTIssuerSubdivType,
    issuerCateg: InfoAnalyticsTIssuerCategType,
    flWorker: YesNoTType,
    tabel: iots.string
  })
], "InfoAnalyticsT")
export interface InfoAnalyticsT extends iots.TypeOf<typeof InfoAnalyticsTType> {}

export const IndividualInfoTIndividualNameType = iots.string
export type IndividualInfoTIndividualName = string

export const IndividualInfoTType = iots.intersection([
  iots.interface({
    individualName: IndividualInfoTIndividualNameType,
    individualDocument: IndividualDocumentTType
  })
], "IndividualInfoT")
export interface IndividualInfoT extends iots.TypeOf<typeof IndividualInfoTType> {}

export const IndividualDocumentTType = iots.intersection([
  iots.interface({
    docType: IndividualDocTypeTType,
    docNum: iots.union([iots.string,iots.null]),
    docDate: iots.union([T.date,iots.null])
  }),
  iots.partial({
    docSeries: iots.string,
    docPlace: iots.string,
    docSubcode: iots.string
  })
], "IndividualDocumentT")
export interface IndividualDocumentT extends iots.TypeOf<typeof IndividualDocumentTType> {}

export const IndividualDocTypeTType = iots.intersection([
  iots.interface({individualDocType: IndividualDocumentTypeEtType}),
  iots.partial({narrative: iots.string})
], "IndividualDocTypeT")
export interface IndividualDocTypeT extends iots.TypeOf<typeof IndividualDocTypeTType> {}

export const IdNameTType = iots.intersection([
  iots.interface({id: iots.string, name: iots.string}),
  iots.partial({organization: iots.string})
], "IdNameT")
export interface IdNameT extends iots.TypeOf<typeof IdNameTType> {}

export const IdTType = iots.intersection([
  iots.interface({id: iots.string}),
  iots.partial({organization: iots.string})
], "IdT")
export interface IdT extends iots.TypeOf<typeof IdTType> {}

export const FormatReportTType = iots.intersection([
  iots.interface({format: FormatReportEtType}),
  iots.partial({mimeType: iots.any})
], "FormatReportT")
export interface FormatReportT extends iots.TypeOf<typeof FormatReportTType> {}

export const FormJuridicalTJuridicalNameType = iots.string
export type FormJuridicalTJuridicalName = string

export const FormJuridicalTJuridicalShortNameType = iots.string
export type FormJuridicalTJuridicalShortName = string

export const FormJuridicalTType = iots.intersection([
  iots.interface({
    juridicalName: FormJuridicalTJuridicalNameType,
    juridicalShortName: iots.union([FormJuridicalTJuridicalShortNameType,iots.null]),
    juridicalRegistration: JuridicalRegistrationTType,
    juridicalLegalAddress: iots.union([AddressLegalTType,iots.null]),
    juridicalPostAddress: iots.union([AddressPostTType,iots.null]),
    official: iots.array(OfficialInfoTType)
  }),
  iots.partial({
    registrationCountry: CountryEtType,
    special: JuridicalSpecialEtType,
    inn: iots.string,
    kpp: iots.string,
    okpo: iots.string,
    okved: iots.string,
    okved2: iots.string,
    opf: OpfTType,
    licence: LicenceTType,
    benefitNoident: YesNoTType,
    profitNoident: YesNoTType
  })
], "FormJuridicalT")
export interface FormJuridicalT extends iots.TypeOf<typeof FormJuridicalTType> {}

export const FormIndividualTIndividualNameType = iots.string
export type FormIndividualTIndividualName = string

export const FormIndividualTIndividualShortNameType = iots.string
export type FormIndividualTIndividualShortName = string

export const FormIndividualTType = iots.intersection([
  iots.interface({
    individualName: FormIndividualTIndividualNameType,
    individualDocument: IndividualDocumentTType,
    individualLegalAddress: iots.union([AddressLegalTType,iots.null]),
    individualPostAddress: iots.union([AddressPostTType,iots.null]),
    benefit: iots.array(OfficialInfoTType)
  }),
  iots.partial({
    individualShortName: FormIndividualTIndividualShortNameType,
    birthtday: T.date,
    placeOfBirth: iots.string,
    nationality: CountryEtType,
    foreignDocument: ForeignDocumentTType,
    inn: iots.string,
    ssn: iots.string,
    additionalDocument: DocIndivBusinessTType,
    foreignPublic: ForeignPublicTType,
    russianPublic: RussianPublicTType,
    ownerStatus: OwnerStatusEtType
  })
], "FormIndividualT")
export interface FormIndividualT extends iots.TypeOf<typeof FormIndividualTType> {}

export const FormCoownershipTCoownersNameType = iots.string
export type FormCoownershipTCoownersName = string

export const FormCoownershipTCoownersShortNameType = iots.string
export type FormCoownershipTCoownersShortName = string

export const FormCoownershipTType = iots.intersection([
  iots.interface({
    ownersType: CoownersTypeEtType,
    coownersName: FormCoownershipTCoownersNameType,
    coownersShortName: FormCoownershipTCoownersShortNameType
  }),
  iots.partial({coownersPostAddress: AddressPostTType})
], "FormCoownershipT")
export interface FormCoownershipT extends iots.TypeOf<typeof FormCoownershipTType> {}

export const ForeignPublicTType = iots.intersection([
  iots.interface({official: YesNoTType, relative: YesNoTType}),
  iots.partial({comment: iots.string})
], "ForeignPublicT")
export interface ForeignPublicT extends iots.TypeOf<typeof ForeignPublicTType> {}

export const ForeignDocumentTType = iots.intersection([
  iots.interface({
    docType: ForeignDocTypeTType,
    docNum: iots.union([iots.string,iots.null]),
    begDate: iots.union([T.date,iots.null]),
    endDate: iots.union([T.date,iots.null])
  }),
  iots.partial({docSeries: iots.string})
], "ForeignDocumentT")
export interface ForeignDocumentT extends iots.TypeOf<typeof ForeignDocumentTType> {}

export const ForeignDocTypeTType = iots.intersection([
  iots.interface({foreignDocType: ForeignDocumentTypeEtType}),
  iots.partial({narrative: iots.string})
], "ForeignDocTypeT")
export interface ForeignDocTypeT extends iots.TypeOf<typeof ForeignDocTypeTType> {}

export const FileReferenceTType = iots.intersection([
  iots.interface({type: FileTypeEtType, hash: iots.string, size: iots.number}),
  iots.partial({description: iots.string})
], "FileReferenceT")
export interface FileReferenceT extends iots.TypeOf<typeof FileReferenceTType> {}

export const DuConditionsTType = iots.intersection([
  iots.interface({
    rightDuNodispose: YesNoTType,
    rightFounderVoting: YesNoTType,
    rightFounderDivid: YesNoTType
  }),
  iots.partial({contractNum: iots.string, contractDate: T.date})
], "DuConditionsT")
export interface DuConditionsT extends iots.TypeOf<typeof DuConditionsTType> {}

export const DocTypeTType = iots.intersection([
  iots.interface({docTypeCode: DocTypeEtType}),
  iots.partial({narrative: iots.string})
], "DocTypeT")
export interface DocTypeT extends iots.TypeOf<typeof DocTypeTType> {}

export const DocSenderTType = iots.intersection([
  iots.interface({senderType: SenderTypeEtType, personInfo: PersonInfoTType}),
  iots.partial({
    accountNumber: iots.string,
    accountType: AccountTypeEtType,
    postAddress: iots.string,
    personSign: iots.string
  })
], "DocSenderT")
export interface DocSenderT extends iots.TypeOf<typeof DocSenderTType> {}

export const DocLink2TType = iots.intersection([
  iots.interface({
    outDocNum: iots.union([iots.string,iots.null]),
    uid: UuidTType
  }),
  iots.partial({
    outDocDate: DateOrDatetimeTType,
    inDocNum: iots.string,
    inRegDate: DateOrDatetimeTType,
    taDocNum: iots.string,
    taDocDate: DateOrDatetimeTType
  })
], "DocLink2T")
export interface DocLink2T extends iots.TypeOf<typeof DocLink2TType> {}

export const DocLinkTType = iots.intersection([
  iots.interface({
    outDocNum: iots.union([iots.string,iots.null]),
    inDocNum: iots.string
  }),
  iots.partial({
    outDocDate: DateOrDatetimeTType,
    inRegDate: DateOrDatetimeTType
  })
], "DocLinkT")
export interface DocLinkT extends iots.TypeOf<typeof DocLinkTType> {}

export const DocInfoTDocTaType = iots.intersection([
  iots.interface({
    taDocNum: iots.union([iots.string,iots.null]),
    taDocDate: iots.union([DateOrDatetimeTType,iots.null])
  })
], "DocInfoTDocTa")
export interface DocInfoTDocTa extends iots.TypeOf<typeof DocInfoTDocTaType> {}

export const DocInfoTType = iots.intersection([
  iots.interface({
    docLink: DocLinkTType,
    docTa: DocInfoTDocTaType,
    docName: iots.string,
    docEdo: YesNoTType,
    docState: DocProcessingEtType,
    outdocInfo: iots.array(OutdocInfoTType)
  }),
  iots.partial({
    messageType: iots.string,
    sender: DocSenderTType,
    issuer: IssuerInfoTType,
    processDate: DateOrDatetimeTType,
    uid: UuidTType
  })
], "DocInfoT")
export interface DocInfoT extends iots.TypeOf<typeof DocInfoTType> {}

export const DocAppTType = iots.intersection([
  iots.interface({
    appType: DocTypeTType,
    appNum: iots.union([iots.string,iots.null])
  }),
  iots.partial({appDate: DateOrDatetimeTType, scanInfo: ScanInfoTType})
], "DocAppT")
export interface DocAppT extends iots.TypeOf<typeof DocAppTType> {}

export const DocTDocTaOutdocDeliveryReportDeliveryType = iots.intersection([
  iots.interface({
    deliveryPlace: DeliveryPlaceEtType,
    deliveryMethod: DeliveryMethodEtType
  })
], "DocTDocTaOutdocDeliveryReportDelivery")
export interface DocTDocTaOutdocDeliveryReportDelivery extends iots.TypeOf<typeof DocTDocTaOutdocDeliveryReportDeliveryType> {}

export const DocTDocTaOutdocDeliveryType = iots.intersection([
  iots.interface({reportMode: ReportModeEtType}),
  iots.partial({
    eCopy: YesNoTType,
    reportDelivery: DocTDocTaOutdocDeliveryReportDeliveryType
  })
], "DocTDocTaOutdocDelivery")
export interface DocTDocTaOutdocDelivery extends iots.TypeOf<typeof DocTDocTaOutdocDeliveryType> {}

export const DocTDocTaType = iots.intersection([
  iots.interface({
    transferAgent: TransferAgentInfoTType,
    taDocNum: iots.string,
    taDocDate: DateOrDatetimeTType
  }),
  iots.partial({
    taDocType: DocTypeTType,
    outdocDelivery: DocTDocTaOutdocDeliveryType
  })
], "DocTDocTa")
export interface DocTDocTa extends iots.TypeOf<typeof DocTDocTaType> {}

export const DocTType = iots.intersection([
  iots.interface({
    docNum: iots.union([iots.string,iots.null]),
    docDate: DateOrDatetimeTType,
    sender: DocSenderTType
  }),
  iots.partial({docTa: DocTDocTaType})
], "DocT")
export interface DocT extends iots.TypeOf<typeof DocTType> {}

export const DocIndivBusinessTDocNotaryOrderType = iots.intersection([
  iots.interface({
    orderNum: iots.union([iots.string,iots.null]),
    orderDate: iots.union([T.date,iots.null])
  })
], "DocIndivBusinessTDocNotaryOrder")
export interface DocIndivBusinessTDocNotaryOrder extends iots.TypeOf<typeof DocIndivBusinessTDocNotaryOrderType> {}

export const DocIndivBusinessTDocNotaryType = iots.intersection([
  iots.interface({
    licence: LicenceTType,
    order: DocIndivBusinessTDocNotaryOrderType
  })
], "DocIndivBusinessTDocNotary")
export interface DocIndivBusinessTDocNotary extends iots.TypeOf<typeof DocIndivBusinessTDocNotaryType> {}

export const DocIndivBusinessTType = iots.intersection([
  iots.interface({indivBusinessType: IndivBusinessTypeEtType}),
  iots.partial({
    ogrnIndiv: JuridicalOgrnTType,
    docNotary: DocIndivBusinessTDocNotaryType
  })
], "DocIndivBusinessT")
export interface DocIndivBusinessT extends iots.TypeOf<typeof DocIndivBusinessTType> {}

export const DeliveryDocTType = iots.intersection([
  iots.interface({deliveryMethod: DeliveryMethodEtType}),
  iots.partial({
    deliveryPlace: DeliveryPlaceEtType,
    receiverName: iots.string,
    receiverAddress: iots.string
  })
], "DeliveryDocT")
export interface DeliveryDocT extends iots.TypeOf<typeof DeliveryDocTType> {}

export const DateOrPeriodTType = iots.intersection([
  iots.partial({date: DateOrDatetimeTType, beginDate: T.date, endDate: T.date})
], "DateOrPeriodT")
export interface DateOrPeriodT extends iots.TypeOf<typeof DateOrPeriodTType> {}

export const DateOrDatetimeTType = iots.intersection([
  iots.partial({date: T.date, datetime: T.date})
], "DateOrDatetimeT")
export interface DateOrDatetimeT extends iots.TypeOf<typeof DateOrDatetimeTType> {}

export const CurrencyAndAmountTType = iots.intersection([
  iots.interface({ccyCode: iots.string, amount: iots.number})
], "CurrencyAndAmountT")
export interface CurrencyAndAmountT extends iots.TypeOf<typeof CurrencyAndAmountTType> {}

export const CoownershipInfoTCoownersNameType = iots.string
export type CoownershipInfoTCoownersName = string

export const CoownershipInfoTType = iots.intersection([
  iots.interface({
    coownersName: CoownershipInfoTCoownersNameType,
    coownersList: iots.array(CoownerInfoTType)
  })
], "CoownershipInfoT")
export interface CoownershipInfoT extends iots.TypeOf<typeof CoownershipInfoTType> {}

export const CoownerInfoQuotaTType = iots.intersection([
  iots.interface({coownerIdent: CoownerInfoTType, quota: CoownerQuotaTType})
], "CoownerInfoQuotaT")
export interface CoownerInfoQuotaT extends iots.TypeOf<typeof CoownerInfoQuotaTType> {}

export const CoownerInfoTType = iots.intersection([
  iots.partial({
    idCoowner: iots.string,
    juridical: JuridicalInfoTType,
    individual: IndividualInfoTType
  })
], "CoownerInfoT")
export interface CoownerInfoT extends iots.TypeOf<typeof CoownerInfoTType> {}

export const CoownerQuotaTType = iots.intersection([
  iots.interface({numerator: iots.number, denominator: iots.number})
], "CoownerQuotaT")
export interface CoownerQuotaT extends iots.TypeOf<typeof CoownerQuotaTType> {}

export const ContractTypeTType = iots.intersection([
  iots.interface({contractCode: ContractEtType}),
  iots.partial({narrative: iots.string})
], "ContractTypeT")
export interface ContractTypeT extends iots.TypeOf<typeof ContractTypeTType> {}

export const ContentFormOfShareholdersTShareholderInfoType = iots.intersection([
  iots.partial({
    juridical: FormJuridicalTType,
    individual: FormIndividualTType,
    coowners: FormCoownershipTType
  })
], "ContentFormOfShareholdersTShareholderInfo")
export interface ContentFormOfShareholdersTShareholderInfo extends iots.TypeOf<typeof ContentFormOfShareholdersTShareholderInfoType> {}

export const ContentFormOfShareholdersTType = iots.intersection([
  iots.interface({
    accountType: AccountTypeEtType,
    shareholderInfo: ContentFormOfShareholdersTShareholderInfoType,
    contacts: ContactsTType,
    distrDivFrm: DistrDivFrmEtType,
    letterGoType: LetterGoTypeEtType
  }),
  iots.partial({
    bankDetails: BankTType,
    taxStatus: TaxCategoryTType,
    docByPost: YesNoTType,
    autoMfy: YesNoTType,
    comment: iots.string
  })
], "ContentFormOfShareholdersT")
export interface ContentFormOfShareholdersT extends iots.TypeOf<typeof ContentFormOfShareholdersTType> {}

export const ContentFormOfIssuerTType = iots.intersection([
  iots.interface({
    issuerInfo: FormJuridicalTType,
    contacts: ContactsTType,
    authorizedCapital: CurrencyAndAmountTType,
    letterGoType: LetterGoTypeEtType
  }),
  iots.partial({bankDetails: BankTType, codeFcsm: iots.string})
], "ContentFormOfIssuerT")
export interface ContentFormOfIssuerT extends iots.TypeOf<typeof ContentFormOfIssuerTType> {}

export const ContentFormOfCoownerTCoownerInfoType = iots.intersection([
  iots.partial({juridical: FormJuridicalTType, individual: FormIndividualTType})
], "ContentFormOfCoownerTCoownerInfo")
export interface ContentFormOfCoownerTCoownerInfo extends iots.TypeOf<typeof ContentFormOfCoownerTCoownerInfoType> {}

export const ContentFormOfCoownerTType = iots.intersection([
  iots.interface({
    coownerInfo: ContentFormOfCoownerTCoownerInfoType,
    contacts: ContactsTType,
    distrDivFrm: DistrDivFrmEtType,
    letterGoType: LetterGoTypeEtType
  }),
  iots.partial({
    coownerNumb: iots.string,
    bankDetails: BankTType,
    taxStatus: TaxCategoryTType,
    docByPost: YesNoTType,
    autoMfy: YesNoTType,
    comment: iots.string
  })
], "ContentFormOfCoownerT")
export interface ContentFormOfCoownerT extends iots.TypeOf<typeof ContentFormOfCoownerTType> {}

export const ContentFormOfAuthorisedTAuthorisedInfoType = iots.intersection([
  iots.partial({juridical: FormJuridicalTType, individual: FormIndividualTType})
], "ContentFormOfAuthorisedTAuthorisedInfo")
export interface ContentFormOfAuthorisedTAuthorisedInfo extends iots.TypeOf<typeof ContentFormOfAuthorisedTAuthorisedInfoType> {}

export const ContentFormOfAuthorisedTType = iots.intersection([
  iots.interface({
    authorisedInfo: ContentFormOfAuthorisedTAuthorisedInfoType,
    letterGoType: LetterGoTypeEtType
  }),
  iots.partial({contacts: ContactsTType, comment: iots.string})
], "ContentFormOfAuthorisedT")
export interface ContentFormOfAuthorisedT extends iots.TypeOf<typeof ContentFormOfAuthorisedTType> {}

export const ContactsTType = iots.intersection([
  iots.interface({
    phoneOrFax: iots.array(PhoneTType),
    eMail: iots.array(iots.string)
  })
], "ContactsT")
export interface ContactsT extends iots.TypeOf<typeof ContactsTType> {}

export const ConditionPledgeTType = iots.intersection([
  iots.interface({
    noRepledge: YesNoTType,
    transfer: YesNoTType,
    concession: YesNoTType,
    convert: ConditionTypeEtType,
    quantityConvert: UnitsOrFractionTType,
    addition: YesNoTType,
    securityClassification: SecurityClassificationEtType,
    securityCategory: SecurityCategoryEtType,
    quantityAddition: UnitsOrFractionTType,
    proAllQuantity: YesNoTType,
    quantityPart: UnitsOrFractionTType,
    delegDivid: ConditionTypeEtType,
    quantityDivid: UnitsOrFractionTType,
    delegVote: ConditionTypeEtType,
    quantityVote: UnitsOrFractionTType,
    bondsProvision: YesNoTType,
    bondsInfo: iots.string
  }),
  iots.partial({
    date: T.date,
    term: iots.string,
    docStatement: YesNoTType,
    docCommission: YesNoTType,
    docProtocol: YesNoTType,
    docCopy: YesNoTType,
    docSale: YesNoTType,
    caseNum: iots.string,
    person: iots.string,
    infoAdd: iots.string
  })
], "ConditionPledgeT")
export interface ConditionPledgeT extends iots.TypeOf<typeof ConditionPledgeTType> {}

export const ConditionBlockTType = iots.intersection([
  iots.interface({blockDivid: YesNoTType, blockVote: YesNoTType}),
  iots.partial({infoAdd: iots.string, dateEnd: T.date})
], "ConditionBlockT")
export interface ConditionBlockT extends iots.TypeOf<typeof ConditionBlockTType> {}

export const CashRubDtlsTType = iots.intersection([
  iots.interface({
    bankName: iots.string,
    bankCity: iots.string,
    ruic: iots.string,
    bankCorr: iots.string
  }),
  iots.partial({
    account: iots.string,
    accountPerson: iots.string,
    bankBranchName: iots.string,
    accountBranch: iots.string,
    bankInn: iots.string
  })
], "CashRubDtlsT")
export interface CashRubDtlsT extends iots.TypeOf<typeof CashRubDtlsTType> {}

export const BlockoperInfoTType = iots.intersection([
  iots.interface({blockoperType: BlockoperTypeTType}),
  iots.partial({
    idBlockoper: iots.number,
    blockoperDate: T.date,
    blockReason: BlockReasonEtType,
    comment: iots.string
  })
], "BlockoperInfoT")
export interface BlockoperInfoT extends iots.TypeOf<typeof BlockoperInfoTType> {}

export const BlockoperTypeTType = iots.intersection([
  iots.interface({blockoperTypeCode: BlockoperTypeEtType}),
  iots.partial({narrative: iots.string})
], "BlockoperTypeT")
export interface BlockoperTypeT extends iots.TypeOf<typeof BlockoperTypeTType> {}

export const BlockInfoTType = iots.intersection([
  iots.interface({
    blockType: BlockTypeTType,
    repeatBlock: YesNoTType,
    security: SecurityInfoTType,
    quantity: UnitsOrFractionTType,
    basedInfo: iots.array(BasedInfoTType)
  }),
  iots.partial({
    idBlock: iots.number,
    blockDate: T.date,
    blockReason: BlockReasonEtType,
    conditionBlock: ConditionBlockTType,
    comment: iots.string
  })
], "BlockInfoT")
export interface BlockInfoT extends iots.TypeOf<typeof BlockInfoTType> {}

export const BlockTypeTType = iots.intersection([
  iots.interface({blockTypeCode: BlockTypeEtType}),
  iots.partial({narrative: iots.string})
], "BlockTypeT")
export interface BlockTypeT extends iots.TypeOf<typeof BlockTypeTType> {}

export const BasesOfPowersTType = iots.intersection([
  iots.interface({basesOfPowersDocument: iots.string}),
  iots.partial({
    basesOfPowersNumber: iots.string,
    basesOfPowersDate: T.date,
    basesOfPowersEndDate: T.date,
    legitim: YesNoTType
  })
], "BasesOfPowersT")
export interface BasesOfPowersT extends iots.TypeOf<typeof BasesOfPowersTType> {}

export const BasedInfoTType = iots.intersection([
  iots.interface({
    contractType: ContractTypeTType,
    docNum: iots.union([iots.string,iots.null]),
    docDate: iots.union([T.date,iots.null])
  })
], "BasedInfoT")
export interface BasedInfoT extends iots.TypeOf<typeof BasedInfoTType> {}

export const BaseDocTType = iots.intersection([
  iots.interface({docInfo: DocLinkTType}),
  iots.partial({docUid: UuidTType, docName: iots.string})
], "BaseDocT")
export interface BaseDocT extends iots.TypeOf<typeof BaseDocTType> {}

export const BankPropRubTType = iots.intersection([
  iots.interface({cashRubDtls: CashRubDtlsTType}),
  iots.partial({
    payAddInfo: iots.string,
    payName: iots.string,
    inn: iots.string
  })
], "BankPropRubT")
export interface BankPropRubT extends iots.TypeOf<typeof BankPropRubTType> {}

export const BankTType = iots.intersection([
  iots.partial({bankStruct: BankPropRubTType, bankNostruct: iots.string})
], "BankT")
export interface BankT extends iots.TypeOf<typeof BankTType> {}

export const AuthorisedPersonInfoTType = iots.intersection([
  iots.interface({
    authorisedPersonType: AuthorisedPersonTypeEtType,
    authorisedPersonInfo: PersonInfo2TType
  }),
  iots.partial({
    authorisedPersonPosition: iots.string,
    basesOfPowers: BasesOfPowersTType
  })
], "AuthorisedPersonInfoT")
export interface AuthorisedPersonInfoT extends iots.TypeOf<typeof AuthorisedPersonInfoTType> {}

export const AuthorisedPersonIdentTType = iots.intersection([
  iots.interface({authorisedPerson: AuthorisedPersonInfoTType}),
  iots.partial({authorisedPersonId: iots.number})
], "AuthorisedPersonIdentT")
export interface AuthorisedPersonIdentT extends iots.TypeOf<typeof AuthorisedPersonIdentTType> {}

export const AnyTType = iots.any
export type AnyT = any

export const AddressNostructTType = iots.intersection([
  iots.interface({address: iots.string}),
  iots.partial({country: CountryEtType, index: iots.string})
], "AddressNostructT")
export interface AddressNostructT extends iots.TypeOf<typeof AddressNostructTType> {}

export const AddressStructTType = iots.intersection([
  iots.partial({
    country: CountryEtType,
    index: iots.string,
    regionNumber: RegionEtType,
    regionType: iots.string,
    region: iots.string,
    zonetType: iots.string,
    zone: iots.string,
    cityType: iots.string,
    city: iots.string,
    placeType: iots.string,
    place: iots.string,
    streetType: iots.string,
    street: iots.string,
    house: iots.string,
    building: iots.string,
    flat: iots.string
  })
], "AddressStructT")
export interface AddressStructT extends iots.TypeOf<typeof AddressStructTType> {}

export const AddressPostTType = iots.intersection([
  iots.partial({
    addressKladr: AddressStructTType,
    addressNostruct: AddressNostructTType,
    another: iots.string
  })
], "AddressPostT")
export interface AddressPostT extends iots.TypeOf<typeof AddressPostTType> {}

export const AddressLegalTType = iots.intersection([
  iots.partial({
    addressKladr: AddressStructTType,
    addressNostruct: AddressNostructTType
  })
], "AddressLegalT")
export interface AddressLegalT extends iots.TypeOf<typeof AddressLegalTType> {}

export const AccountIdentTType = iots.intersection([
  iots.interface({accountType: AccountTypeEtType, personInfo: PersonInfoTType}),
  iots.partial({accountNumber: iots.string})
], "AccountIdentT")
export interface AccountIdentT extends iots.TypeOf<typeof AccountIdentTType> {}

export const UuidTType = iots.string
export type UuidT = string

export enum YesNoT {Yes = "Yes", No = "No"}
export const YesNoTType = mkStringEnum<YesNoT>(YesNoT, "YesNoT")

export const DecimalTType = iots.number
export type DecimalT = number

export const NoticeOfOutdocGiveType = iots.intersection([
  iots.interface({outdocLink: DocLinkTType, deliveryState: YesNoTType}),
  iots.partial({
    deliveryDate: DateOrDatetimeTType,
    docDelivery: DeliveryDocTType,
    addInfo: AnyTType
  })
], "NoticeOfOutdocGive")
export interface NoticeOfOutdocGive extends iots.TypeOf<typeof NoticeOfOutdocGiveType> {}

export const NoticeOfDocReceptionType = iots.intersection([
  iots.interface({regDatetime: T.date}),
  iots.partial({addInfo: AnyTType})
], "NoticeOfDocReception")
export interface NoticeOfDocReception extends iots.TypeOf<typeof NoticeOfDocReceptionType> {}

export const NoticeOfReportReportTypeType = iots.intersection([
  iots.interface({idReport: IdTType}),
  iots.partial({narrative: iots.any})
], "NoticeOfReportReportType")
export interface NoticeOfReportReportType extends iots.TypeOf<typeof NoticeOfReportReportTypeType> {}

export const NoticeOfReportReportDeliveryType = iots.intersection([
  iots.interface({deliveryMethod: DeliveryMethodEtType}),
  iots.partial({deliveryPlace: DeliveryPlaceEtType})
], "NoticeOfReportReportDelivery")
export interface NoticeOfReportReportDelivery extends iots.TypeOf<typeof NoticeOfReportReportDeliveryType> {}

export const NoticeOfReportType = iots.intersection([
  iots.interface({
    reportType: NoticeOfReportReportTypeType,
    reportMode: ReportModeEtType,
    makeDatetime: T.date
  }),
  iots.partial({
    eCopy: YesNoTType,
    reportDelivery: NoticeOfReportReportDeliveryType,
    format: FormatReportTType,
    addInfo: AnyTType
  })
], "NoticeOfReport")
export interface NoticeOfReport extends iots.TypeOf<typeof NoticeOfReportType> {}

export const FreeFormatMessageType = iots.intersection([
  iots.interface({appendix: iots.array(DocAppTType)}),
  iots.partial({
    docLink: DocLinkTType,
    registrar: RegistrarInfoTType,
    issuer: IssuerInfoTType,
    text: iots.string,
    scanInfo: ScanInfoTType,
    addInfo: AnyTType
  })
], "FreeFormatMessage")
export interface FreeFormatMessage extends iots.TypeOf<typeof FreeFormatMessageType> {}

export const RequestOfNotaryReportInfoType = iots.intersection([
  iots.interface({
    accountIdent: AccountIdentTType,
    date: iots.union([DateOrDatetimeTType,iots.null])
  }),
  iots.partial({authorisedPerson: AuthorisedPersonInfoTType})
], "RequestOfNotaryReportInfo")
export interface RequestOfNotaryReportInfo extends iots.TypeOf<typeof RequestOfNotaryReportInfoType> {}

export const RequestOfNotaryReportDeliveryType = iots.intersection([
  iots.interface({deliveryMethod: DeliveryMethodEtType}),
  iots.partial({deliveryPlace: DeliveryPlaceEtType})
], "RequestOfNotaryReportDelivery")
export interface RequestOfNotaryReportDelivery extends iots.TypeOf<typeof RequestOfNotaryReportDeliveryType> {}

export const RequestOfNotaryType = iots.intersection([
  iots.interface({
    issuer: IssuerInfoTType,
    reportInfo: RequestOfNotaryReportInfoType,
    reportMode: ReportModeEtType,
    appendix: iots.array(DocAppTType)
  }),
  iots.partial({
    eCopy: YesNoTType,
    reportDelivery: RequestOfNotaryReportDeliveryType,
    comment: iots.string,
    scanInfo: ScanInfoTType,
    addInfo: AnyTType
  })
], "RequestOfNotary")
export interface RequestOfNotary extends iots.TypeOf<typeof RequestOfNotaryType> {}

export const InstructionToDocRecallType = iots.intersection([
  iots.interface({docLink: DocLink2TType, reason: iots.string}),
  iots.partial({scanInfo: ScanInfoTType, addInfo: AnyTType})
], "InstructionToDocRecall")
export interface InstructionToDocRecall extends iots.TypeOf<typeof InstructionToDocRecallType> {}

export const StatementOfReconciliationDocListType = iots.intersection([
  iots.interface({
    docInfo: DocInfoTType,
    reconciliationInfo: ReconciliationInfoTType
  })
], "StatementOfReconciliationDocList")
export interface StatementOfReconciliationDocList extends iots.TypeOf<typeof StatementOfReconciliationDocListType> {}

export const StatementOfReconciliationType = iots.intersection([
  iots.interface({
    transferAgent: TransferAgentInfoTType,
    regSubdiv: IdNameTType,
    begDate: iots.union([T.date,iots.null]),
    endDate: iots.union([T.date,iots.null]),
    docList: iots.array(StatementOfReconciliationDocListType),
    totalResult: ResultReconciliationTotalEtType,
    totalDocs: iots.number,
    makeDatetime: T.date
  }),
  iots.partial({addInfo: AnyTType})
], "StatementOfReconciliation")
export interface StatementOfReconciliation extends iots.TypeOf<typeof StatementOfReconciliationType> {}

export const RequestForReconciliationType = iots.intersection([
  iots.interface({
    registrar: RegistrarInfoTType,
    regSubdiv: IdNameTType,
    transferAgent: TransferAgentInfoTType,
    begDate: iots.union([T.date,iots.null]),
    endDate: iots.union([T.date,iots.null]),
    docList: iots.array(DocInfoTType),
    totalDocs: iots.number,
    makeDatetime: T.date
  }),
  iots.partial({addInfo: AnyTType})
], "RequestForReconciliation")
export interface RequestForReconciliation extends iots.TypeOf<typeof RequestForReconciliationType> {}

export const RegisterOfShareholdersRegisterListShareholderShareholderInfoCoownerType = iots.intersection([
  iots.interface({coownerForm: ContentFormOfCoownerTType}),
  iots.partial({quota: CoownerQuotaTType})
], "RegisterOfShareholdersRegisterListShareholderShareholderInfoCoowner")
export interface RegisterOfShareholdersRegisterListShareholderShareholderInfoCoowner extends iots.TypeOf<typeof RegisterOfShareholdersRegisterListShareholderShareholderInfoCoownerType> {}

export const RegisterOfShareholdersRegisterListShareholderShareholderInfoType = iots.intersection([
  iots.interface({
    shareholderForm: ContentFormOfShareholdersTType,
    coowner: iots.array(RegisterOfShareholdersRegisterListShareholderShareholderInfoCoownerType)
  }),
  iots.partial({lei: iots.string})
], "RegisterOfShareholdersRegisterListShareholderShareholderInfo")
export interface RegisterOfShareholdersRegisterListShareholderShareholderInfo extends iots.TypeOf<typeof RegisterOfShareholdersRegisterListShareholderShareholderInfoType> {}

export const RegisterOfShareholdersRegisterListShareholderType = iots.intersection([
  iots.interface({
    shareholderId: IdTType,
    shareholderInfo: RegisterOfShareholdersRegisterListShareholderShareholderInfoType,
    securityBalance: iots.array(SecurityBalanceTType)
  })
], "RegisterOfShareholdersRegisterListShareholder")
export interface RegisterOfShareholdersRegisterListShareholder extends iots.TypeOf<typeof RegisterOfShareholdersRegisterListShareholderType> {}

export const RegisterOfShareholdersRegisterListType = iots.intersection([
  iots.interface({
    shareholderId: iots.array(IdTType),
    shareholder: iots.array(RegisterOfShareholdersRegisterListShareholderType)
  })
], "RegisterOfShareholdersRegisterList")
export interface RegisterOfShareholdersRegisterList extends iots.TypeOf<typeof RegisterOfShareholdersRegisterListType> {}

export const RegisterOfShareholdersType = iots.intersection([
  iots.interface({
    issuer: IssuerInfoTType,
    accountIdent: AccountIdentTType,
    corporateActionCode: CorporateActionEventEtType,
    recordDate: T.date,
    messageFunction: MessageFunctionEtType,
    informationIndicator: InformationIndicatorEtType,
    registerList: iots.array(RegisterOfShareholdersRegisterListType)
  }),
  iots.partial({previouslyProvidedList: DocLinkTType, addInfo: AnyTType})
], "RegisterOfShareholders")
export interface RegisterOfShareholders extends iots.TypeOf<typeof RegisterOfShareholdersType> {}

export const RequestForRegisterShareholdersType = iots.intersection([
  iots.interface({
    registrar: RegistrarInfoTType,
    issuer: IssuerInfoTType,
    accountIdent: AccountIdentTType,
    corporateActionCode: CorporateActionEventEtType,
    reasonIndicator: iots.string,
    informationIndicator: InformationIndicatorEtType,
    recordDate: T.date,
    certificationDeadlineDate: T.date,
    securityBalance: iots.array(SecurityBalanceTType),
    makeDatetime: T.date
  }),
  iots.partial({purposeOfRequest: iots.string, addInfo: AnyTType})
], "RequestForRegisterShareholders")
export interface RequestForRegisterShareholders extends iots.TypeOf<typeof RequestForRegisterShareholdersType> {}

export const StatementOfRejectedTransactionRejectedOperationType = iots.intersection([
  iots.interface({
    rejectReason: iots.array(iots.string),
    recommendation: iots.array(iots.string)
  }),
  iots.partial({operation: OperationTType})
], "StatementOfRejectedTransactionRejectedOperation")
export interface StatementOfRejectedTransactionRejectedOperation extends iots.TypeOf<typeof StatementOfRejectedTransactionRejectedOperationType> {}

export const StatementOfRejectedTransactionType = iots.intersection([
  iots.interface({
    registrar: RegistrarInfoTType,
    baseDoc: BaseDocTType,
    rejectedOperation: StatementOfRejectedTransactionRejectedOperationType,
    makeDatetime: T.date
  }),
  iots.partial({
    issuer: IssuerInfoTType,
    accountIdent: AccountIdentTType,
    addInfo: AnyTType
  })
], "StatementOfRejectedTransaction")
export interface StatementOfRejectedTransaction extends iots.TypeOf<typeof StatementOfRejectedTransactionType> {}

export const StatementOfConfirmedTransactionType = iots.intersection([
  iots.interface({
    registrar: RegistrarInfoTType,
    issuer: IssuerInfoTType,
    accountIdent: AccountIdentTType,
    operation: OperationTType,
    makeDatetime: T.date
  }),
  iots.partial({addInfo: AnyTType})
], "StatementOfConfirmedTransaction")
export interface StatementOfConfirmedTransaction extends iots.TypeOf<typeof StatementOfConfirmedTransactionType> {}

export const StatementOfTransactionsSecurityDataSecurityBalanceType = iots.intersection([
  iots.interface({
    security: SecurityInfoTType,
    openingBalance: SecurityQuantityTType,
    closingBalance: SecurityQuantityTType
  })
], "StatementOfTransactionsSecurityDataSecurityBalance")
export interface StatementOfTransactionsSecurityDataSecurityBalance extends iots.TypeOf<typeof StatementOfTransactionsSecurityDataSecurityBalanceType> {}

export const StatementOfTransactionsSecurityDataType = iots.intersection([
  iots.interface({
    securityInfo: iots.string,
    securityBalance: iots.array(StatementOfTransactionsSecurityDataSecurityBalanceType)
  })
], "StatementOfTransactionsSecurityData")
export interface StatementOfTransactionsSecurityData extends iots.TypeOf<typeof StatementOfTransactionsSecurityDataType> {}

export const StatementOfTransactionsOperationDataType = iots.intersection([
  iots.interface({
    operationInfo: iots.string,
    operation: iots.array(OperationTType)
  })
], "StatementOfTransactionsOperationData")
export interface StatementOfTransactionsOperationData extends iots.TypeOf<typeof StatementOfTransactionsOperationDataType> {}

export const StatementOfTransactionsType = iots.intersection([
  iots.interface({
    registrar: RegistrarInfoTType,
    issuer: IssuerInfoTType,
    accountIdent: AccountIdentTType,
    begDate: iots.union([T.date,iots.null]),
    endDate: iots.union([T.date,iots.null]),
    securityData: StatementOfTransactionsSecurityDataType,
    operationData: StatementOfTransactionsOperationDataType,
    makeDatetime: T.date
  }),
  iots.partial({addInfo: AnyTType})
], "StatementOfTransactions")
export interface StatementOfTransactions extends iots.TypeOf<typeof StatementOfTransactionsType> {}

export const StatementOfHoldingsSecurityDataType = iots.intersection([
  iots.interface({
    securityInfo: iots.string,
    securityBalance: iots.array(SecurityBalanceTType)
  })
], "StatementOfHoldingsSecurityData")
export interface StatementOfHoldingsSecurityData extends iots.TypeOf<typeof StatementOfHoldingsSecurityDataType> {}

export const StatementOfHoldingsType = iots.intersection([
  iots.interface({
    registrar: RegistrarInfoTType,
    issuer: IssuerInfoTType,
    accountIdent: AccountIdentTType,
    statementType: StatementTypeEtType,
    statementDate: DateOrDatetimeTType,
    securityData: StatementOfHoldingsSecurityDataType,
    makeDatetime: T.date
  }),
  iots.partial({addInfo: AnyTType})
], "StatementOfHoldings")
export interface StatementOfHoldings extends iots.TypeOf<typeof StatementOfHoldingsType> {}

export const RequestForReportInExternalFormatReportInfoReportTypeType = iots.intersection([
  iots.interface({idReport: IdTType}),
  iots.partial({narrative: iots.string})
], "RequestForReportInExternalFormatReportInfoReportType")
export interface RequestForReportInExternalFormatReportInfoReportType extends iots.TypeOf<typeof RequestForReportInExternalFormatReportInfoReportTypeType> {}

export const RequestForReportInExternalFormatReportInfoStatementAvaiType = iots.intersection([
  iots.interface({security: SecurityInfoTType, quantity: UnitsOrFractionTType})
], "RequestForReportInExternalFormatReportInfoStatementAvai")
export interface RequestForReportInExternalFormatReportInfoStatementAvai extends iots.TypeOf<typeof RequestForReportInExternalFormatReportInfoStatementAvaiType> {}

export const RequestForReportInExternalFormatReportInfoFilterByPercentType = iots.intersection([
  iots.interface({percentKind: FilterByPercentEtType, percent: iots.number})
], "RequestForReportInExternalFormatReportInfoFilterByPercent")
export interface RequestForReportInExternalFormatReportInfoFilterByPercent extends iots.TypeOf<typeof RequestForReportInExternalFormatReportInfoFilterByPercentType> {}

export const RequestForReportInExternalFormatReportInfoType = iots.intersection([
  iots.interface({
    reportType: RequestForReportInExternalFormatReportInfoReportTypeType
  }),
  iots.partial({
    accountIdent: AccountIdentTType,
    authorisedPerson: AuthorisedPersonInfoTType,
    dateOrPeriod: DateOrPeriodTType,
    operation: OperationBriefTType,
    statementAvai: RequestForReportInExternalFormatReportInfoStatementAvaiType,
    filterByPercent: RequestForReportInExternalFormatReportInfoFilterByPercentType
  })
], "RequestForReportInExternalFormatReportInfo")
export interface RequestForReportInExternalFormatReportInfo extends iots.TypeOf<typeof RequestForReportInExternalFormatReportInfoType> {}

export const RequestForReportInExternalFormatReportDeliveryType = iots.intersection([
  iots.interface({deliveryMethod: DeliveryMethodEtType}),
  iots.partial({deliveryPlace: DeliveryPlaceEtType})
], "RequestForReportInExternalFormatReportDelivery")
export interface RequestForReportInExternalFormatReportDelivery extends iots.TypeOf<typeof RequestForReportInExternalFormatReportDeliveryType> {}

export const RequestForReportInExternalFormatType = iots.intersection([
  iots.interface({
    issuer: IssuerInfoTType,
    reportInfo: RequestForReportInExternalFormatReportInfoType,
    reportMode: ReportModeEtType,
    appendix: iots.array(DocAppTType)
  }),
  iots.partial({
    eCopy: YesNoTType,
    reportDelivery: RequestForReportInExternalFormatReportDeliveryType,
    comment: iots.string,
    scanInfo: ScanInfoTType,
    addInfo: AnyTType
  })
], "RequestForReportInExternalFormat")
export interface RequestForReportInExternalFormat extends iots.TypeOf<typeof RequestForReportInExternalFormatType> {}

export const RequestForStatementInXmlFormatReportInfoStatementType = iots.intersection([
  iots.interface({dateOrPeriod: DateOrPeriodTType}),
  iots.partial({security: SecurityInfoTType, quantity: UnitsOrFractionTType})
], "RequestForStatementInXmlFormatReportInfoStatement")
export interface RequestForStatementInXmlFormatReportInfoStatement extends iots.TypeOf<typeof RequestForStatementInXmlFormatReportInfoStatementType> {}

export const RequestForStatementInXmlFormatReportInfoType = iots.intersection([
  iots.interface({
    accountIdent: AccountIdentTType,
    statementType: StatementTypeEtType
  }),
  iots.partial({
    authorisedPerson: AuthorisedPersonInfoTType,
    operation: OperationBriefTType,
    statement: RequestForStatementInXmlFormatReportInfoStatementType
  })
], "RequestForStatementInXmlFormatReportInfo")
export interface RequestForStatementInXmlFormatReportInfo extends iots.TypeOf<typeof RequestForStatementInXmlFormatReportInfoType> {}

export const RequestForStatementInXmlFormatType = iots.intersection([
  iots.interface({
    issuer: IssuerInfoTType,
    reportInfo: RequestForStatementInXmlFormatReportInfoType,
    appendix: iots.array(DocAppTType)
  }),
  iots.partial({
    comment: iots.string,
    scanInfo: ScanInfoTType,
    addInfo: AnyTType
  })
], "RequestForStatementInXmlFormat")
export interface RequestForStatementInXmlFormat extends iots.TypeOf<typeof RequestForStatementInXmlFormatType> {}

export const InstructionToAuthorisedCancelType = iots.intersection([
  iots.interface({
    issuer: IssuerInfoTType,
    authorisedCancel: OperationProxyCancelTType,
    appendix: iots.array(DocAppTType)
  }),
  iots.partial({scanInfo: ScanInfoTType, addInfo: AnyTType})
], "InstructionToAuthorisedCancel")
export interface InstructionToAuthorisedCancel extends iots.TypeOf<typeof InstructionToAuthorisedCancelType> {}

export const ProxyOfAuthorisedPersonType = iots.intersection([
  iots.interface({
    issuer: IssuerInfoTType,
    proxyFor: ProxyForEtType,
    proxyOpen: OperationProxyTType,
    appendix: iots.array(DocAppTType)
  }),
  iots.partial({scanInfo: ScanInfoTType, addInfo: AnyTType})
], "ProxyOfAuthorisedPerson")
export interface ProxyOfAuthorisedPerson extends iots.TypeOf<typeof ProxyOfAuthorisedPersonType> {}

export const InstructionToCoownerCloseType = iots.intersection([
  iots.interface({
    issuer: IssuerInfoTType,
    coownerClose: OperationCoownerCloseTType,
    appendix: iots.array(DocAppTType)
  }),
  iots.partial({scanInfo: ScanInfoTType, addInfo: AnyTType})
], "InstructionToCoownerClose")
export interface InstructionToCoownerClose extends iots.TypeOf<typeof InstructionToCoownerCloseType> {}

export const InstructionToQuotaCoownersType = iots.intersection([
  iots.interface({
    issuer: IssuerInfoTType,
    coownerQuota: OperationCoownersQuotaTType,
    appendix: iots.array(DocAppTType)
  }),
  iots.partial({scanInfo: ScanInfoTType, addInfo: AnyTType})
], "InstructionToQuotaCoowners")
export interface InstructionToQuotaCoowners extends iots.TypeOf<typeof InstructionToQuotaCoownersType> {}

export const InstructionToAccountCloseType = iots.intersection([
  iots.interface({
    issuer: IssuerInfoTType,
    accountClose: OperationAccountCloseTType,
    appendix: iots.array(DocAppTType)
  }),
  iots.partial({scanInfo: ScanInfoTType, addInfo: AnyTType})
], "InstructionToAccountClose")
export interface InstructionToAccountClose extends iots.TypeOf<typeof InstructionToAccountCloseType> {}

export const InstructionToUnpaidCancelType = iots.intersection([
  iots.interface({
    issuer: IssuerInfoTType,
    unpaidCancelInfo: OperationUnpaidCancelTType,
    appendix: iots.array(DocAppTType)
  }),
  iots.partial({scanInfo: ScanInfoTType, addInfo: AnyTType})
], "InstructionToUnpaidCancel")
export interface InstructionToUnpaidCancel extends iots.TypeOf<typeof InstructionToUnpaidCancelType> {}

export const InstructionToUnpaidType = iots.intersection([
  iots.interface({
    issuer: IssuerInfoTType,
    unpaidInfo: OperationUnpaidTType,
    appendix: iots.array(DocAppTType)
  }),
  iots.partial({scanInfo: ScanInfoTType, addInfo: AnyTType})
], "InstructionToUnpaid")
export interface InstructionToUnpaid extends iots.TypeOf<typeof InstructionToUnpaidType> {}

export const InstructionToUnblockoperType = iots.intersection([
  iots.interface({
    issuer: IssuerInfoTType,
    blockoperInfo: OperationBlockoperTType,
    appendix: iots.array(DocAppTType)
  }),
  iots.partial({scanInfo: ScanInfoTType, addInfo: AnyTType})
], "InstructionToUnblockoper")
export interface InstructionToUnblockoper extends iots.TypeOf<typeof InstructionToUnblockoperType> {}

export const InstructionToBlockoperType = iots.intersection([
  iots.interface({
    issuer: IssuerInfoTType,
    blockoperInfo: OperationBlockoperTType,
    appendix: iots.array(DocAppTType)
  }),
  iots.partial({scanInfo: ScanInfoTType, addInfo: AnyTType})
], "InstructionToBlockoper")
export interface InstructionToBlockoper extends iots.TypeOf<typeof InstructionToBlockoperType> {}

export const InstructionToUnpledgeType = iots.intersection([
  iots.interface({
    issuer: IssuerInfoTType,
    unpledgeInfo: OperationUnpledgeTType,
    appendix: iots.array(DocAppTType)
  }),
  iots.partial({scanInfo: ScanInfoTType, addInfo: AnyTType})
], "InstructionToUnpledge")
export interface InstructionToUnpledge extends iots.TypeOf<typeof InstructionToUnpledgeType> {}

export const InstructionToPledgeModifyType = iots.intersection([
  iots.interface({
    issuer: IssuerInfoTType,
    pledgeModifyInfo: OperationPledgeModifyTType,
    appendix: iots.array(DocAppTType)
  }),
  iots.partial({scanInfo: ScanInfoTType, addInfo: AnyTType})
], "InstructionToPledgeModify")
export interface InstructionToPledgeModify extends iots.TypeOf<typeof InstructionToPledgeModifyType> {}

export const InstructionToPledgeDeliverType = iots.intersection([
  iots.interface({
    issuer: IssuerInfoTType,
    pledgeDeliverInfo: OperationPledgeDeliverTType,
    appendix: iots.array(DocAppTType)
  }),
  iots.partial({scanInfo: ScanInfoTType, addInfo: AnyTType})
], "InstructionToPledgeDeliver")
export interface InstructionToPledgeDeliver extends iots.TypeOf<typeof InstructionToPledgeDeliverType> {}

export const InstructionToPledgeType = iots.intersection([
  iots.interface({
    issuer: IssuerInfoTType,
    pledgeInfo: OperationPledgeTType,
    appendix: iots.array(DocAppTType)
  }),
  iots.partial({scanInfo: ScanInfoTType, addInfo: AnyTType})
], "InstructionToPledge")
export interface InstructionToPledge extends iots.TypeOf<typeof InstructionToPledgeType> {}

export const InstructionToUnblockType = iots.intersection([
  iots.interface({
    issuer: IssuerInfoTType,
    unblockInfo: OperationUnblockTType,
    appendix: iots.array(DocAppTType)
  }),
  iots.partial({scanInfo: ScanInfoTType, addInfo: AnyTType})
], "InstructionToUnblock")
export interface InstructionToUnblock extends iots.TypeOf<typeof InstructionToUnblockType> {}

export const InstructionToBlockType = iots.intersection([
  iots.interface({
    issuer: IssuerInfoTType,
    blockInfo: OperationBlockTType,
    appendix: iots.array(DocAppTType)
  }),
  iots.partial({scanInfo: ScanInfoTType, addInfo: AnyTType})
], "InstructionToBlock")
export interface InstructionToBlock extends iots.TypeOf<typeof InstructionToBlockType> {}

export const InstructionToConvertType = iots.intersection([
  iots.interface({
    issuer: IssuerInfoTType,
    convertInfo: OperationConvertTType,
    appendix: iots.array(DocAppTType)
  }),
  iots.partial({scanInfo: ScanInfoTType, addInfo: AnyTType})
], "InstructionToConvert")
export interface InstructionToConvert extends iots.TypeOf<typeof InstructionToConvertType> {}

export const InstructionToDeliverType = iots.intersection([
  iots.interface({
    issuer: IssuerInfoTType,
    transaction: OperationTransactionTType,
    appendix: iots.array(DocAppTType)
  }),
  iots.partial({scanInfo: ScanInfoTType, addInfo: AnyTType})
], "InstructionToDeliver")
export interface InstructionToDeliver extends iots.TypeOf<typeof InstructionToDeliverType> {}

export const FormOfCoownersType = iots.intersection([
  iots.interface({
    issuer: IssuerInfoTType,
    formFor: CoownerFormForEtType,
    coownerForm: OperationCoownerTType,
    appendix: iots.array(DocAppTType)
  }),
  iots.partial({
    coownersData: ContentFormOfShareholdersTType,
    scanInfo: ScanInfoTType,
    addInfo: AnyTType
  })
], "FormOfCoowners")
export interface FormOfCoowners extends iots.TypeOf<typeof FormOfCoownersType> {}

export const FormOfShareholdersType = iots.intersection([
  iots.interface({
    issuer: IssuerInfoTType,
    formFor: FormForEtType,
    accountForm: OperationFormTType,
    appendix: iots.array(DocAppTType)
  }),
  iots.partial({scanInfo: ScanInfoTType, addInfo: AnyTType})
], "FormOfShareholders")
export interface FormOfShareholders extends iots.TypeOf<typeof FormOfShareholdersType> {}