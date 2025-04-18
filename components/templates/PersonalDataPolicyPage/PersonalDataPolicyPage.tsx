'use client'
import Breadcrumbs from '@/components/modules/Breadcrumbs/Breadcrumbs'
import { useBreadcrumbs } from '@/hooks/useBreadcrumbs'
import styles from '@/styles/policy/index.module.scss'
import { Suspense } from 'react'

const PersonalDataPolicyPage = () => {
  const { getDefaultTextGenerator, getTextGenerator } = useBreadcrumbs(
    'personal_data_policy'
  )

  return (
    <main>
      <Suspense>
      <Breadcrumbs
        getDefaultTextGenerator={getDefaultTextGenerator}
        getTextGenerator={getTextGenerator}
      />
      </Suspense>
      <section className={styles.policy}>
        <div className='container'>
          <h1>Политика обработки персональных данных</h1>
          <p>
            <strong>1. ТЕРМИНЫ И ОПРЕДЕЛЕНИЯ</strong>
          </p>
          <p>
            1.1. <strong>Персональные данные </strong>— любая информация,
            относящаяся к определенному или определяемому на основании такой
            информации физическому лицу (субъекту персональных данных), в том
            числе его фамилия, имя, отчество, год, месяц, дата и место рождения,
            адрес, адрес электронной почты, телефонный номер (домашний,
            сотовый),&nbsp; другая информация.
          </p>
          <p>
            1.2. <strong>Обработка персональных данных </strong>— действия
            (операции) с персональными данными, включая их сбор, запись,
            систематизацию, накопление, хранение, уточнение (обновление,
            изменение), использование, извлечение, распространение их путем
            передачи, в том числе трансграничной, обезличивание, блокирование,
            уничтожение, удаление, в том числе в целях.
          </p>
          <p>
            1.3. <strong>Конфиденциальность персональных данных </strong>—
            обязательное для соблюдения назначенного ответственного лица,
            получившего доступ к персональным данным, требование не допускать их
            распространения без согласия субъекта или иного законного основания.
          </p>
          <p>
            1.4. <strong>Распространение персональных данных </strong>—
            действия, направленные на передачу персональных данных определенному
            кругу лиц (передача персональных данных) или на ознакомление с
            персональными данными неограниченного круга лиц, в том числе
            обнародование персональных данных в средствах массовой информации,
            размещение в информационно-телекоммуникационных сетях или
            предоставление доступа к персональным данным каким-либо иным
            способом.
          </p>
          <p>
            1.5. <strong>Использование персональных данных </strong>— действия
            (операции) с персональными данными, совершаемые в целях принятия
            решений или совершения иных действий, порождающих юридические
            последствия в отношении субъектов персональных данных либо иным
            образом затрагивающих их права и свободы или права и свободы других
            лиц.
          </p>
          <p>
            1.6. <strong>Блокирование персональных данных </strong>— временное
            прекращение сбора, систематизации, накопления, использования,
            распространения персональных данных, в том числе их передачи.
          </p>
          <p>
            1.7. <strong>Уничтожение персональных данных </strong>— действия, в
            результате которых невозможно восстановить содержание персональных
            данных в информационной системе персональных данных или в результате
            которых уничтожаются материальные носители персональных данных.
          </p>
          <p>
            1.8. <strong>Обезличивание персональных данных </strong>— действия,
            в результате которых невозможно без использования дополнительной
            информации определить принадлежность персональных данных конкретному
            субъекту.
          </p>
          <p>
            1.9. <strong>Общедоступные персональные данные </strong>—
            персональные данные, доступ неограниченного круга лиц к которым
            предоставлен с согласия субъекта или на которые в соответствии с
            федеральными законами не распространяется требование соблюдения
            конфиденциальности.
          </p>
          <p>
            1.10<strong>. Информация </strong>— сведения (сообщения, данные)
            независимо от формы их представления.
          </p>
          <p>
            1.11. <strong>Клиент (субъект персональных данных) </strong>-
            физическое лицо,&nbsp; потребитель товаров/услуг ООО «Панавто»,
            далее «Компания».
          </p>
          <p>
            1.12. <strong>Оператор </strong>- государственный орган,
            муниципальный орган, юридическое или физическое лицо, самостоятельно
            или совместно с другими лицами организующие и (или) осуществляющие
            обработку персональных данных, а также определяющие цели обработки
            персональных данных, состав персональных данных, подлежащих
            обработке, действия (операции), совершаемые с персональными данными.
            В рамках настоящего документа Операторами являются ООО Панавто»
            (Продавец) - 143085, Московская область, Одинцовский р-н, р.п.
            Заречье, ул. Торговая, д.4, стр.1, а также другие организации, с
            которыми Операторы заключили / заключат соответствующие Договоры для
            реализации целей обработки персональных данных Клиентов,
            определенных условиями настоящего Положения, в частности для
            направления Клиентам по различным средствам связи рекламной
            информации Операторов и т.д., а также договоры в целях проведения
            социологических и других исследований, в том числе исследований
            индекса удовлетворенности потребителей качеством предоставляемых
            Операторами товаров и услуг, проводимых Операторами самостоятельно,
            или с привлечением третьих лиц, для осуществления рассылок.
          </p>
          <p>&nbsp;</p>
          <p>
            <strong>2. ОБЩИЕ ПОЛОЖЕНИЯ</strong>
          </p>
          <p>
            2.1. Настоящая Политика обработки и защиты персональных данных
            Клиентов ООО «Панавто» (далее — Положение) разработано в
            соответствии с Конституцией Российской Федерации, Гражданским
            кодексом Российской Федерации, Федеральным законом «Об информации,
            информационных технологиях и о защите информации», Федеральным
            законом «О персональных данных», иными нормативными правовыми
            актами, действующими на территории Российской Федерации.
          </p>
          <p>
            2.2. Цель разработки Положения — определение порядка обработки и
            защиты персональных данных всех Клиентов Компании, данные которых
            подлежат обработке, на основании полномочий оператора; обеспечение
            защиты прав и свобод человека и гражданина при обработке его
            персональных данных, в том числе защиты прав на неприкосновенность
            частной жизни, личную и семейную тайну, а также установление
            ответственности должностных лиц, имеющих доступ к персональным
            данным, за невыполнение требований норм, регулирующих обработку и
            защиту персональных данных.
          </p>
          <p>&nbsp;</p>
          <p>
            <strong>3. ПРИНЦИПЫ ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ</strong>
          </p>
          <p>
            3.1. Обработка персональных данных в Компании основана на следующих
            принципах:
          </p>
          <ul>
            <li>
              законности целей и способов обработки персональных данных и
              добросовестности;
            </li>
            <li>
              соответствия целей обработки персональных данных целям, заранее
              определенным и заявленным при сборе персональных данных, а также
              полномочиям Компании;
            </li>
            <li>
              соответствия объема и характера обрабатываемых персональных
              данных, способов обработки персональных данных целям обработки
              персональных данных;
            </li>
            <li>
              достоверности персональных данных, их актуальности и достаточности
              для целей обработки, недопустимости обработки избыточных по
              отношению к целям сбора персональных данных;
            </li>
            <li>
              легитимности организационных и технических мер по обеспечению
              безопасности персональных данных;
            </li>
            <li>
              непрерывности повышения уровня знаний работников Компании в сфере
              обеспечения безопасности персональных данных при их обработке;
            </li>
            <li>
              стремления к постоянному совершенствованию системы защиты
              персональных данных.
            </li>
          </ul>
          <p>&nbsp;</p>
          <p>
            <strong>4. ЦЕЛИ ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ</strong>
          </p>
          <p>
            4.1. Обработка персональных данных в Компании осуществляется с
            целью:
          </p>
          <ul>
            <li>
              планирования операционной деятельности розничных подразделений
              Компании;
            </li>
            <li>
              использования для автоматизации процессов формирования первичных
              документов (договоров, счетов на оплату, универсальных
              передаточных документов, различных Актов, паспортов транспортных
              средств,&nbsp; Наряд-заказом, предварительных наряд-заказов,
              накладных и т.п.);
            </li>
            <li>
              идентификации клиента при его обращении в Компанию по телефону
              и/или электронным средствам связи;
            </li>
            <li>
              идентификации клиента при осуществлении основных
              видов-деятельности Компании, предусмотренных Уставом;
            </li>
            <li>
              использования для автоматизации процессов документарного
              оформления бизнес–процессов при продаже автомобилей, оказании
              услуг (выполнения работ) по ремонту и техническому обслуживанию
              автомобилей и формирования отчетов, при продаже запчастей,
              аксессуаров;
            </li>
            <li>
              формирования единой клиентской базы покупателей автомобилей&nbsp;
              для автоматизации задач послепродажного обслуживания и маркетинга;
            </li>
            <li>обеспечения рекламной деятельности Компании;</li>
            <li>
              использования для автоматизации процессов формирования отчетных
              документов по&nbsp; деятельности страховых агентов;
            </li>
            <li>
              автоматизации, оптимизации операционной деятельности Компании;
            </li>
            <li>ведения и актуализации клиентской базы;</li>
            <li>
              получения и исследования статистических данных об объемах продаж и
              качестве оказываемых услуг;
            </li>
            <li>проведения маркетинговых программ;</li>
            <li>
              изучения конъюнктуры рынка автомобилей, автомобильных запасных
              частей и аксессуаров, услуг по ремонту автомобилей;
            </li>
            <li>
              проведению опросов и исследований, направленных на выявление
              удовлетворенности/неудовлетворенности клиентов, постоянного
              совершенствования уровня предоставляемых услуг;
            </li>
            <li>
              информирования клиентов по каналам связи (СМС-рассылку, рассылку
              мультимедийных сообщений через мобильные приложения и т.д.) о
              предлагаемых Компанией автомобилях, запасных частях и аксессуарах,
              оказываемых услугах, проводимых бонусных, сервисных мероприятий,
              рекламных, отзывных акций и т.д..;
            </li>
            <li>
              рекламирования и иного любого продвижения товаров и услуг
              Операторов на рынке путем осуществления прямых контактов с
              субъектами персональных данных;
            </li>
            <li>
              реализации страховых продуктов, в том числе, но не ограничиваясь,
              оформление полисов КАСКО, ОСАГО и т.д.;
            </li>
            <li>
              технической поддержки при обработке информации, документации и
              персональных данных с использованием средств автоматизации и без
              такого использования.
            </li>
          </ul>
          <p>
            4.2. В том числе обработка персональных данных осуществляется в
            автоматизированных информационных системах. Состав персональных
            данных, обрабатываемых с использованием информационных систем
            персональных данных Компании должен соответствовать целям и задачам
            сбора, обработки и использования персональных данных.
          </p>
          <p>&nbsp;</p>
          <p>
            <strong>5. ПОРЯДОК ПОЛУЧЕНИЯ (СБОРА) ПЕРСОНАЛЬНЫХ ДАННЫХ</strong>
          </p>
          <p>
            5.1.Все персональные данные Клиента получаются у него лично с его
            письменного согласия либо&nbsp; в электронном виде, после прочтения
            согласия и нажатия соответствующей кнопки, кроме случаев,
            предусмотренных законами РФ.
          </p>
          <p>
            5.2.Согласие Клиента на использование его персональных данных
            хранится в Компании в бумажном и/или электронном виде.
          </p>
          <p>
            5.3. Согласие субъекта на обработку персональных данных действует в
            течение всего срока действия договора, а также{' '}
            <strong>в течение 10 лет </strong>с даты прекращения действия
            договорных отношений Клиента с Компанией. По истечении указанного
            срока действие согласия считается продленным на каждые следующие
            пять лет при отсутствии сведений о его отзыве.
          </p>
          <p>
            5.4. Если персональные данные Клиента возможно получить только у
            третьей стороны, Клиент должен быть уведомлен об этом заранее и от
            него должно быть получено письменное согласие. Третье лицо,
            предоставляющее персональные данные Клиента, должно обладать
            согласием субъекта на передачу персональных данных Компании.
            Компания обязана получить подтверждение от третьего лица,
            передающего персональные данные Клиента о том, что персональные
            данные передаются с его согласия. Компания обязана при
            взаимодействии с третьими лицами заключить с ними соглашение о
            конфиденциальности информации, касающейся персональных данных
            Клиентов.
          </p>
          <p>
            5.5. Компания обязана сообщить Клиенту о целях, предполагаемых
            источниках и способах получения персональных данных, а также о
            характере подлежащих получению персональных данных и последствиях
            отказа Клиента персональных данных дать письменное согласие на их
            получение.
          </p>
          <p>
            5.6. Обработка персональных данных Клиентов без их согласия
            осуществляется в следующих случаях:
          </p>
          <p>5.6.1. Персональные данные являются общедоступными.</p>
          <p>
            5.6.2. По требованию полномочных государственных органов в случаях,
            предусмотренных федеральным законом.
          </p>
          <p>
            5.6.3. Обработка персональных данных осуществляется на основании
            федерального закона, устанавливающего ее цель, условия получения
            персональных данных и круг субъектов, персональные данные которых
            подлежат обработке, а также определяющего полномочия оператора.
          </p>
          <p>
            5.6.4. Обработка персональных данных осуществляется в целях
            заключения и исполнения договора, одной из сторон которого является
            субъект персональных данных – Клиент.
          </p>
          <p>
            5.6.5. Обработка персональных данных осуществляется для
            статистических целей при условии обязательного обезличивания
            персональных данных.
          </p>
          <p>5.6.6. В иных случаях, предусмотренных законом.</p>
          <p>
            5.7. Организация не имеет права получать и обрабатывать персональные
            данные Клиента о его расовой, национальной принадлежности,
            политических взглядах, религиозных или философских убеждениях,
            состоянии здоровья, интимной жизни.
          </p>
          <p>&nbsp;</p>
          <p>
            <strong>6. ХРАНЕНИЕ ПЕРСОНАЛЬНЫХ ДАННЫХ</strong>
          </p>
          <p>
            6.1. &nbsp;Персональные данные Клиентов на бумажных носителях
            хранятся в сейфах.
          </p>
          <p>
            6.2. Персональные данные Клиентов в электронном виде хранятся в
            локальной компьютерной сети Компании, в электронных папках и файлах
            &nbsp;на сервере Компании.
          </p>
          <p>
            6.3. Документы, содержащие персональные данные Клиентов, хранятся в
            запирающихся шкафах (сейфах), обеспечивающих защиту от
            несанкционированного доступа. В конце рабочего дня все документы,
            содержащие персональные данные Клиентов, помещаются в шкафы (сейфы),
            обеспечивающие защиту от несанкционированного доступа.
          </p>
          <p>
            6.4. Защита доступа к электронным базам данных, содержащим
            персональные данные Клиентов, обеспечивается:
          </p>
          <ul>
            <li>
              Использованием лицензированных антивирусных и антихакерских
              программ, не допускающих несанкционированный вход в локальную сеть
              Компании.
            </li>
            <li>
              Разграничением прав доступа с использованием учетной записи.
            </li>
            <li>
              Системой паролей: на уровне локальной компьютерной сети. Пароли
              устанавливаются Системным администратором Компании и сообщаются
              индивидуально сотрудникам, имеющим доступ к персональным данным
              Клиентов.
            </li>
          </ul>
          <p>
            6.5. Несанкционированный вход в ПК, в которых содержатся
            персональные данные Клиентов, блокируется паролем, который
            устанавливается Системным администратором и не подлежит разглашению.
          </p>
          <p>
            6.6. Все электронные папки и файлы, содержащие персональные данные
            Клиентов, защищаются паролем, который устанавливается
            непосредственным пользователем компьютера&nbsp; и&nbsp; в
            обязательном порядке изменяется каждые 90 (Девяносто)_ дней, при это
            нельзя использовать последние введенные 5 (Пять) паролей.
          </p>
          <p>
            6.7. Копировать и делать выписки персональных данных Клиента
            разрешается исключительно в служебных целях с письменного разрешения
            Генерального директора Компании.
          </p>
          <p>
            6.8. Ответы на письменные запросы других организаций и учреждений о
            персональных данных Клиентов даются только с письменного согласия
            самого Клиента, если иное не установлено законодательством. Ответы
            оформляются в письменном виде, на бланке Компании, и в том объеме,
            который позволяет не разглашать излишний объем персональных данных
            Клиента.
          </p>
          <p>&nbsp;</p>
          <p>
            <strong>7. ПОРЯДОК ОБРАБОТКИ ПЕРСОНАЛЬНЫХ ДАННЫХ</strong>
          </p>
          <p>
            7.1. &nbsp;Субъект персональных данных предоставляет Компании
            &nbsp;достоверные сведения о себе.
          </p>
          <p>
            7.2. &nbsp;К обработке персональных данных Клиентов могут иметь
            доступ только сотрудники Компании, допущенные к работе с
            персональными данными Клиента и подписавшие Соглашение о
            неразглашении персональных данных Клиента.
          </p>
          <p>
            7.3. &nbsp;Поименный перечень сотрудников Компании, имеющих доступ к
            персональным данным Клиентов, определяется приказом Генерального
            директора Компании.
          </p>
          <p>
            7.4. &nbsp;Обработка персональных данных Клиента может
            осуществляться исключительно в целях установленных Положением и
            соблюдения законов и иных нормативных правовых актов РФ.
          </p>
          <p>
            7.5. При определении объема и содержания, обрабатываемых
            персональных данных Компания руководствуется Конституцией Российской
            Федерации, законом о персональных данных, и иными федеральными
            законами.
          </p>
          <p>&nbsp;</p>
          <p>
            <strong>8. БЕЗОПАСНОСТЬ</strong>
          </p>
          <p>
            8.1. Компания проводит оценку вреда, который может быть причинен
            субъектам персональных данных и определяет угрозы безопасности
            персональных данных. В соответствии с выявленными актуальными
            угрозами Компания применяет необходимые и достаточные
            организационные и технические меры, включающие в себя использование
            средств защиты информации, обнаружение фактов несанкционированного
            доступа, восстановление персональных данных, установление правил
            доступа к персональным данным, а также контроль и оценку
            эффективности применяемых мер.
          </p>
          <p>
            8.2. В Компании назначены лица, ответственные за организацию
            обработки и обеспечения безопасности персональных данных.
          </p>
          <p>
            8.3. В Компании разработано, доведено до сведения сотрудников и
            применяется в работе «Положение о персональных данных».
          </p>
          <p>
            8.4. Компания постоянно повышает уровень безопасности персональных
            данных благодаря периодическим внутренним аудитам и, при обнаружения
            несоответствий или слабых мест в защите, в самые короткие сроки
            устраняет их причины.
          </p>
          <p>
            8.5.Руководство Компании осознает необходимость и заинтересовано в
            обеспечении должного как с точки зрения требований нормативных
            документов РФ, так и обоснованного с точки зрения оценки рисков для
            бизнеса уровня безопасности персональных данных, обрабатываемых в
            рамках выполнения основных видов деятельности Компании.
          </p>
          <p>
            Настоящие Стандарты являются общедоступным документом и подлежат
            размещению на официальном сайте.
          </p>
        </div>
      </section>
    </main>
  )
}

export default PersonalDataPolicyPage