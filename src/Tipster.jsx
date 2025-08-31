import { useState } from 'react';
import Field from './Field';
export default function Tipster() {

    // camelCase для переменных/функций
    const [bill, setBill] = useState('');
    const [tipPercent, setTipPercent] = useState('');
    const [people, setPeople] = useState('1'); // строка, чтобы input легко чистился
    const peopleNum = Math.max(1, Number(people) || 1); // защитимся от 0/NaN
    const billNum = Number(bill) || 0;
    const tipPct = Number(tipPercent) || 0;
    const tip = billNum * (tipPct / 100);
    const total = billNum + tip;
    const tipPerPerson = tip / peopleNum;
    const totalPerPerson = total / peopleNum;

    //Хелпер по кнопкам
    const chooseTip = (pct) => setTipPercent(String(pct));
    // Кнопки через map Объявляем константу значений
    const tipOptions = [5, 10, 15, 20];

    return (
        < div >
            <Field label="Сумма счёта (₽)"
                value={bill}
                onChange={e => setBill(e.target.value)} />

            <Field label="Процент чаевых (%)"
                value={tipPercent}
                onChange={e => setTipPercent(e.target.value)} />
            <p>
                <div>
                    {tipOptions.map(pct => (<button key={pct} aria-pressed={tipPercent === String(pct)} style={{
                        margin: 10,
                        background: tipPercent === String(pct) ? '#2a7ade' : '',
                        color: tipPercent === String(pct) ? '#fff' : ''
                    }}
                        onClick={() => setTipPercent(String(pct))}
                    >
                        {pct}%
                    </button>))}
                </div>
                {/* <button
                    onClick={() => setTipPercent(5)
                    }
                >
                    5%
                </button>
                <button
                    onClick={() => chooseTip(10)}
                    aria-pressed={tipPercent === '10'}
                    style={{
                        margin: 10,
                        background: tipPercent === '10' ? '#2a7ade' : '',
                        color: tipPercent === '10' ? '#fff' : ''
                    }}
                >
                    10%
                </button>

                <button
                    style={{ margin: 10 }}
                    onClick={() => setTipPercent(15)
                    }
                >
                    15%
                </button>
                <button
                    style={{ margin: 10 }}
                    onClick={() => setTipPercent(20)
                    }
                >
                    20%
                </button> */}
            </p>
            <h4>Сколько человек</h4>
            <input
                type="number"
                min="1"
                step="1"
                value={people}
                onChange={e => setPeople(e.target.value)}
            />

            <p>Чаевые: {tip.toFixed(2)} ₽</p>
            <p>Итого: {total.toFixed(2)} ₽</p>
            <p>С каждого: {totalPerPerson.toFixed(2)} ₽ (в т.ч. чаевые {tipPerPerson.toFixed(2)} ₽)</p>

        </div>
    )
}
