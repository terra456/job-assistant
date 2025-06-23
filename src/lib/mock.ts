import { AllResponse, Question, Vacancy } from "./definitions";

export const vacancies: AllResponse<Vacancy> = {
  "items": [
      {
          "id": 1,
          "active": false,
          "external_id": "aedc21ec-6b86-4b14-91ff-0d29c2b9e8aa",
          "company_name": "Nixon, Perez and Cruz",
          "title": "Make",
          "salary": "3364-10666",
          "location": "Andrewchester",
          "speciality": "Java",
          "internship": true,
          "remote": true,
          "url": "https://morris-brown.org/",
          "description": "Service language star appear. Church beautiful shake believe.\nDog bill argue explain since. Likely run must system policy himself. Like among leg herself next art.\nChoose nearly be.",
          "source": "Hh.ru",
          "image": "https://placekitten.com/429/901",
          "date_publication": "2025-05-11T09:56:18.791940"
      },
      {
          "id": 2,
          "active": false,
          "external_id": "328fb59f-ed09-49a9-9030-112e7baf6ee6",
          "company_name": "May, Nelson and Brock",
          "title": "Engineer, building services",
          "salary": "6745-13570",
          "location": "Williamsville",
          "speciality": "DataScience",
          "internship": true,
          "remote": false,
          "url": "https://powell-allen.biz/",
          "description": "Likely prove total recent manager. Cause west across. Air too remain popular least well.\nWhose so west among. Fight general threat me. Pass billion human. Field adult American.",
          "source": "LinkedIn",
          "image": "https://dummyimage.com/604x811",
          "date_publication": "2025-06-03T15:42:14.352315"
      },
      {
          "id": 3,
          "active": true,
          "external_id": "8858ccb5-3e42-449f-835a-78ec21d514c6",
          "company_name": "Chaney, Harris and Burton",
          "title": "Health and safety adviser",
          "salary": "3917-10426",
          "location": "Myershaven",
          "speciality": "Python",
          "internship": true,
          "remote": false,
          "url": "https://www.floyd.com/",
          "description": "Style health beautiful husband. Gun much pick sound significant. Than social attack yeah him test.",
          "source": "Indeed",
          "image": "https://placekitten.com/762/150",
          "date_publication": "2025-06-03T19:39:09.117906"
      },
      {
          "id": 4,
          "active": true,
          "external_id": "31eaacd4-9dfb-4e26-8318-087a4662d099",
          "company_name": "Fletcher-Dodson",
          "title": "Location manager",
          "salary": "3373-14025",
          "location": "Devonbury",
          "speciality": "ML",
          "internship": false,
          "remote": true,
          "url": "https://johnson.biz/",
          "description": "Unit will arrive attorney. Sport choice lead.\nOffice what might speak. Better financial behind identify party compare behind century. Sport consumer learn consider listen budget run.",
          "source": "LinkedIn",
          "image": "https://placekitten.com/630/747",
          "date_publication": "2025-05-29T00:57:33.285513"
      },
      {
          "id": 5,
          "active": false,
          "external_id": "141b3410-888f-496b-a11a-bea999cf0393",
          "company_name": "Clark-Mcmahon",
          "title": "Tour manager",
          "salary": "3782-11225",
          "location": "Port Laurenland",
          "speciality": "ML",
          "internship": false,
          "remote": true,
          "url": "http://gilbert.net/",
          "description": "Message picture security gas. Send cause prepare claim let add.\nSet city professor.\nMachine any experience explain product. Go nature same. Herself Republican summer movement little.",
          "source": "Indeed",
          "image": "https://placekitten.com/402/602",
          "date_publication": "2025-05-28T03:33:36.046040"
      },
      {
          "id": 6,
          "active": false,
          "external_id": "0f66775b-34d3-4840-bda4-2e031736c1a5",
          "company_name": "Moss-Scott",
          "title": "Administrator",
          "salary": "4189-10073",
          "location": "West Dennisfurt",
          "speciality": "JS",
          "internship": true,
          "remote": true,
          "url": "http://www.beck.com/",
          "description": "To send in would son response. Pressure better film scene trip. Operation per we race interesting.\nRate clear society safe federal approach tell. Must fear really soon space.",
          "source": "LinkedIn",
          "image": "https://placekitten.com/25/788",
          "date_publication": "2025-05-21T18:17:31.563741"
      },
      {
          "id": 7,
          "active": true,
          "external_id": "4f76b422-b423-43e9-986d-4bc9bce48121",
          "company_name": "Wright-Strong",
          "title": "Museum/gallery conservator",
          "salary": "3839-13976",
          "location": "Williamfurt",
          "speciality": "Java",
          "internship": false,
          "remote": false,
          "url": "http://davis.org/",
          "description": "Recognize issue possible. Computer employee company really not purpose guess office. History situation majority best.\nAssume act argue. Meet debate boy mouth exist business.",
          "source": "Indeed",
          "image": "https://placekitten.com/977/465",
          "date_publication": "2025-05-09T03:23:17.759479"
      }
  ],
  "total": 170,
  "skip": 0,
  "limit": 7
}

export const questions: AllResponse<Question> = {
    "items": [
        {
            "id": 1,
            "stack": "java java",
            "question": "<div class=\"card-body\">\n                        <p class=\"card-text\"></p><p>В питоне есть оператор&nbsp;<code>with</code>. Размещенный внутри код выполняется с особенностью: до и после гарантированно срабатывают события входа в блок&nbsp;<code>with</code>и выхода из него. Объект, который определяет эту логику, называется контекстным менеджером.</p>\n\n<p>События входа и выхода из блока определены методами&nbsp;<code>__enter__</code>&nbsp;и&nbsp;<code>__exit__</code>. Первый срабатывает в тот момент, когда ход исполнения программы переходит внутрь&nbsp;<code>with</code>. Метод может вернуть значение. Оно будет доступно низлежащему внутри блока&nbsp;<code>with</code>&nbsp;коду.</p>\n\n<p><code>__exit__</code>&nbsp;срабатывает в момент выхода из блока, в т.ч. и по причине исключения. В этом случае в метод будет передана тройка значений&nbsp;<code>(exc_class, exc_instance, traceback)</code>.</p>\n\n<p>Самый распространённый контекстный менеджер – класс, порожденный функцией&nbsp;<code>open</code>. Он гарантирует, что файл будет закрыт даже в том случае, если внутри блока возникнет ошибка.</p>\n\n<p>Нужно стараться выходить из контекстного менеджера как можно быстрее, чтобы освобождать контекст и ресурсы.</p>\n\n<pre><code class=\"language-python hljs\"><span class=\"hljs-keyword\">with</span> <span class=\"hljs-built_in\">open</span>(<span class=\"hljs-string\">'file.txt'</span>) <span class=\"hljs-keyword\">as</span> f:\n    data = f.read()\nprocess_data(data)</code></pre>\n\n<p>Пример реализации своего контекстного менеджера на основе класса:</p>\n\n<pre><code class=\"language-python hljs\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title class_\">Printable</span>:\n    <span class=\"hljs-keyword\">def</span> <span class=\"hljs-title function_\">__enter__</span>(<span class=\"hljs-params\">self</span>):\n        <span class=\"hljs-built_in\">print</span>(<span class=\"hljs-string\">'enter'</span>)\n\n    <span class=\"hljs-keyword\">def</span> <span class=\"hljs-title function_\">__exit__</span>(<span class=\"hljs-params\">self, <span class=\"hljs-built_in\">type</span>, value, traceback</span>):\n        <span class=\"hljs-built_in\">print</span>(<span class=\"hljs-string\">'exit'</span>)</code></pre>\n\n<p>Пример реализации своего контекстного менеджера с использованием встроенной библиотеки contextlib</p>\n\n<pre><code class=\"language-python hljs\"><span class=\"hljs-keyword\">from</span> contextlib <span class=\"hljs-keyword\">import</span> contextmanager\n\n<span class=\"hljs-meta\">@contextmanager</span>\n<span class=\"hljs-keyword\">def</span> <span class=\"hljs-title function_\">printable</span>():\n    <span class=\"hljs-built_in\">print</span>(<span class=\"hljs-string\">'enter'</span>)\n    <span class=\"hljs-keyword\">try</span>:\n      <span class=\"hljs-keyword\">yield</span>\n    <span class=\"hljs-keyword\">finally</span>:\n      <span class=\"hljs-built_in\">print</span>(<span class=\"hljs-string\">'exit'</span>)</code></pre>\n\n<p>Контекстные менеджеры также можно использовать для временной замены параметров, переменных окружения, транзакций БД.</p><p></p>\n                        \n                        <p class=\"card-text\"><small class=\"text-muted\">Oct. 10, 2023, <a class=\"link-secondary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover\" target=\"_blank\" href=\"https://github.com/yakimka/python_interview_questions/blob/master/questions.md/#что-такое-контекстный-менеджер-как-написать-свой\">Источник</a></small></p>\n                        \n                    </div>",
            "position": "Nurse, learning disability",
            "freq": 41,
            "answer": "В чем разница передачи параметров по ссылке и значению?",
            "tags": "sort return wonder"
        },
        {
            "id": 2,
            "stack": "js java go",
            "question": "Experience down total wear American believe back. Individual test head same provide subject list. Heavy generation be use everyone. Sport western use newspaper laugh candidate.",
            "position": "Geographical information systems officer",
            "freq": 57,
            "answer": null,
            "tags": "garden accept former face quickly"
        },
        {
            "id": 3,
            "stack": "java datascience java",
            "question": "Up during defense upon not lay. Within show price talk bill western citizen. High through husband six magazine participant. Feel direction hot only fear someone.",
            "position": "Chemist, analytical",
            "freq": 7,
            "answer": "Animal during including hot collection surface.",
            "tags": "as place pick involve yeah"
        },
        {
            "id": 4,
            "stack": "python datascience python",
            "question": "Bring report although own capital fear issue. Ahead true society usually election voice. Guy can must certain job. Herself high even cut.",
            "position": "Press photographer",
            "freq": 86,
            "answer": "Nice strong continue live ahead skin the. Environment kitchen drug government allow note if.",
            "tags": "mouth ground with recent next"
        },
        {
            "id": 5,
            "stack": "go java",
            "question": "Bar late myself should many consider painting. Soon whatever yard. Whether new year suddenly interview.",
            "position": "Restaurant manager, fast food",
            "freq": 70,
            "answer": null,
            "tags": "bed north per"
        },
        {
            "id": 6,
            "stack": "datascience js",
            "question": "Now far meet single question ten. Project model benefit sea five sense.\nCare push bit heavy campaign appear media foot. All state both late best. Traditional interview where beat.",
            "position": "Music therapist",
            "freq": 33,
            "answer": "Decade discussion upon west prove thought. Hold certain center. However surface teach site else.",
            "tags": "wide many"
        },
        {
            "id": 7,
            "stack": "ml",
            "question": "Catch southern onto his window campaign. But style who thousand young account production. Already party win institution mention rule.",
            "position": "Sales professional, IT",
            "freq": 66,
            "answer": "Since environment market enter seven safe rule bag. Inside evening brother focus.",
            "tags": "bag sell glass standard now"
        },
        {
            "id": 8,
            "stack": "js ml js",
            "question": "Boy return generation eight six. Receive government wish. New buy agreement author final. Personal it character establish.",
            "position": "Psychologist, forensic",
            "freq": 15,
            "answer": "True before run far face state especially. Structure several happen meet east glass.",
            "tags": "even since heart goal let"
        },
        {
            "id": 9,
            "stack": "ml python",
            "question": "Training this energy hand matter red. Learn blue offer option money force young. Wonder lot statement effect boy those.",
            "position": "Therapist, occupational",
            "freq": 80,
            "answer": null,
            "tags": "best popular"
        },
        {
            "id": 10,
            "stack": "java",
            "question": "Deep language follow onto by above.\nYou page near maintain remain manager. Just fast machine doctor it.",
            "position": "IT consultant",
            "freq": 98,
            "answer": null,
            "tags": "piece but parent"
        }
    ],
    "total": 20,
    "skip": 0,
    "limit": 10
}