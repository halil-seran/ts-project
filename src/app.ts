// / <reference path="components/project-input.ts"/>
// / <reference path="components/project-list.ts"/>
// 3 slash 2 den farkli ts icin ozel, these file is now available inside of app.ts
// ayrica yukardaki file larda bulunan class vs herseyi export etmemiz gerekiyor
//ts.config outFile:./ i true yapmamiz gerekiyo ve uzantisini bir js dosyasina yazmak gerekiyor mesela bundle.js yazdik
//evet bu da yetmiyor , hatalar alabiliriz module u amd ye cevirmek gerekebilir. js adamdir
//dist de siliyoruz, yeniden compile ediyoruz ki son bundle file imizi alabilelim. :(
//index.html den de uzantiyi degistirmeyi unutmayalim app degil artik bundle oldu
import { ProjectInput } from "./components/project-input.js";
import { ProjectList } from "./components/project-list.js";

const prjInput = new ProjectInput();
const activePrjList = new ProjectList("active");
const finishedPrjList = new ProjectList("finished");
console.log(prjInput, activePrjList, finishedPrjList);

/*
 /// <reference path="models/drag-drop.ts"/>
/// <reference path="models/project.ts"/>
/// <reference path="state/project-state.ts"/>
/// <reference path="util/validation.ts"/>
/// <reference path="decorators/autobind.ts"/>
/// <reference path="components/base-component.ts"/>
/// <reference path="components/project-item.ts"/>
subfolderlara gerekli importlari yapitgimiz icin bunlara gerek kalmadi.
*/
