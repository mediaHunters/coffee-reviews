import {
  AppContainer
} from "./chunk-4PWV3P7U.mjs";
import "./chunk-4LOGOHG7.mjs";
import "./chunk-3Q737EHZ.mjs";
import "./chunk-BOA6SWSX.mjs";
import "./chunk-SWK2OFMK.mjs";
import "./chunk-UARQ55YV.mjs";
import "./chunk-5WAZFWXB.mjs";
import "./chunk-MFQ6MZNO.mjs";
import "./chunk-WC7MTD3P.mjs";
import "./chunk-PBL77IDG.mjs";
import "./chunk-L4YTJVYZ.mjs";
import "./chunk-MS6C3LD6.mjs";
import "./chunk-TXHLZ6OS.mjs";
import "./chunk-HMLNSKNO.mjs";
import "./chunk-5IOOD5UU.mjs";
import "./chunk-CMX5GW5W.mjs";
import "./chunk-3ICYLAAJ.mjs";
import "./chunk-ZWLPZ7ZS.mjs";
import "./chunk-AP25PHGL.mjs";
import "./chunk-Y4VHNI27.mjs";
import "./chunk-WAAZK5KM.mjs";
import "./chunk-BC5WD6ER.mjs";
import "./chunk-ZLB7CELC.mjs";
import "./chunk-GP2EYOPN.mjs";
import "./chunk-J4L72MJX.mjs";
import "./chunk-ZWUAFPJ7.mjs";
import "./chunk-55VCL34Z.mjs";
import "./chunk-F54AADET.mjs";
import "./chunk-4TO2D4LE.mjs";
import "./chunk-RMFJAZST.mjs";
import "./chunk-3LSITSQT.mjs";
import "./chunk-TG3IONQT.mjs";
import "./chunk-MZ4Y7GGI.mjs";
import "./chunk-LCLRCZIE.mjs";
import "./chunk-3KMUEB3P.mjs";
import "./chunk-GVONAOQJ.mjs";
import "./chunk-SJBQMJN5.mjs";
import "./chunk-OB4YRABA.mjs";
import "./chunk-WR6EJCXU.mjs";
import "./chunk-W4O4A6XN.mjs";
import "./chunk-5MUR4BWO.mjs";
import "./chunk-4U7NPKTN.mjs";
import "./chunk-ENM6OMP3.mjs";
import "./chunk-KSFPCLC2.mjs";
import "./chunk-VZP4HHR3.mjs";
import "./chunk-PAHVYZ3D.mjs";
import "./chunk-TOQOQODP.mjs";
import "./chunk-3RGEATHH.mjs";
import "./chunk-3FQLLEIT.mjs";
import "./chunk-CYFBHW4K.mjs";
import "./chunk-EHMN7MLT.mjs";
import {
  PORT
} from "./chunk-LQ4FDPEO.mjs";
import "./chunk-IA6SR652.mjs";
import "./chunk-CRDUVCFD.mjs";
import "./chunk-JTCOZVH6.mjs";
import "./chunk-QWHVMCYD.mjs";
import "./chunk-FFBDVLMB.mjs";
import "./chunk-KK564ENV.mjs";
import "./chunk-PYQS4V3E.mjs";
import "./chunk-UJEHM647.mjs";
import "./chunk-2VBYS3HI.mjs";
import "./chunk-JVFB7EOP.mjs";
import "./chunk-YJ24QUYX.mjs";
import "./chunk-RDTFPORB.mjs";
import "./chunk-OKUYDJP7.mjs";
import "./chunk-XPRAXHRK.mjs";
import "./chunk-VSL3XMPJ.mjs";
import "./chunk-VCVDMLCO.mjs";
import "./chunk-NVHV3LZV.mjs";
import "./chunk-TZRMYLTD.mjs";
import "./chunk-LQ42ZIS4.mjs";
import "./chunk-FZISDGRE.mjs";
import "./chunk-NMCVMRIE.mjs";
import "./chunk-7FIEQXWC.mjs";
import "./chunk-5UD35LCP.mjs";
import "./chunk-BY2MAOUE.mjs";
import "./chunk-TTC2N45X.mjs";
import "./chunk-5TLAZIX5.mjs";
import "./chunk-JU2WBWK2.mjs";
import "./chunk-OODWIYZF.mjs";
import "./chunk-EPETXKTI.mjs";
import "./chunk-KPA6WMZR.mjs";
import "./chunk-7YSGPZ7X.mjs";
import "./chunk-RRVSZO2D.mjs";
import "./chunk-EB6IQL5Y.mjs";
import "./chunk-L6A6B2LO.mjs";
import "./chunk-LUOTVOXW.mjs";
import "./chunk-SE5MY7CD.mjs";
import "./chunk-LYZIYF25.mjs";
import "./chunk-SVQNGVSR.mjs";
import "./chunk-2EE6L7RO.mjs";
import "./chunk-XRVKF5DQ.mjs";
import "./chunk-QQ3YNBZB.mjs";
import "./chunk-6TCJVVRE.mjs";
import "./chunk-DZXH2SBN.mjs";
import "./chunk-ZOCCYKEF.mjs";
import {
  UI_APPLICATION_IDENTIFIERS
} from "./chunk-OHNY4ITV.mjs";
import {
  DATABASE_IDENTIFIERS
} from "./chunk-XLG4QA2P.mjs";
import "./chunk-IV6S7MV4.mjs";

// src/index.ts
import "reflect-metadata";
(async () => {
  const appContainer = new AppContainer();
  appContainer.init();
  appContainer.get(UI_APPLICATION_IDENTIFIERS.EXPRESS_APPLICATION).initialize();
  appContainer.get(
    UI_APPLICATION_IDENTIFIERS.INVERSIFY_APPLICATION
  );
  await appContainer.get(DATABASE_IDENTIFIERS.ORM).initialize();
  appContainer.get(
    UI_APPLICATION_IDENTIFIERS.INVERSIFY_APPLICATION
  ).build().listen(PORT, () => console.log(`Server listening on ${PORT}`));
})();
//# sourceMappingURL=index.mjs.map