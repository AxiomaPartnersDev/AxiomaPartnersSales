import Accordion from 'react-bootstrap/Accordion';

function AccordionBlock() {
    return (
        <Accordion >
            <Accordion.Item bsPrefix="accordion__item"  eventKey="0">
                <Accordion.Header bsPrefix="accordion__header">Як ви будете продавати мій товар?</Accordion.Header>
                <Accordion.Body>
                    Всі питання, що стосуються реклами/маркетингу/прийому платежів Axioma Partners бере на себе.
                    Ви отримаєте доступ до CRM системи, в якій будете отримувати замовлення на Ваш товар.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item bsPrefix="accordion__item" eventKey="1">
                <Accordion.Header bsPrefix="accordion__header">Що таке CRM система?</Accordion.Header>
                <Accordion.Body>
                    Customer Relationship Management («управління взаємовідносинами з клієнтами») — це спеціальний
                    інструмент,
                    який зберігає всю інформацію про клієнтів в одному місці, реєструє проблеми обслуговування, управляє
                    маркетинговими кампаніями і т.д.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item bsPrefix="accordion__item" eventKey="2">
                <Accordion.Header bsPrefix="accordion__header">Як мій товар потрапить до покупця?</Accordion.Header>
                <Accordion.Body>
                    Після отримання замовлення, Ви обробляєте його та готуєте свій товар до віправки Новою Поштою
                    (у ній передбачена міжнародна доставка).
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item bsPrefix="accordion__item" eventKey="3">
                <Accordion.Header bsPrefix="accordion__header">Як я отримаю кошти за свій товар?</Accordion.Header>
                <Accordion.Body>
                    Як ми вже зазначали, прийомом платежу буде займатися наша компанія.
                    Для партнера будуть доступні такі виводи коштів, як оплата на ФОП/карту фіз.особи/криптовалюти.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default AccordionBlock;