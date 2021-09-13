import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { useState } from 'react'

export default function AddBlog() {
    const [value, setValue] = useState()
    return (
        <section id="blog">
            <div className="blog">
                <h2>Elan yerləşdir</h2>
                <div className="blog__form">
                    <div className="blog__form--item">
                        <h3>Kategoriya</h3>
                        <select name="" id="">
                            <option value=""></option>
                            <option value="">Çimərliklər</option>
                            <option value="">Aqua Parklar</option>
                            <option value="">Sanatoriyalar</option>
                        </select>
                    </div>
                    <div className="blog__form--item">
                        <h3>Başlıq</h3>
                        <input type="text" name="" id="" />
                    </div>
                    <div className="blog__form--item">
                        <h3>Məlumat</h3>
                        <textarea rows="10"></textarea>
                    </div>
                    <div className="blog__form--item price-num">
                        <h3>Qiymət</h3>
                        <div className="price">
                            <input type="number" /><span>AZN</span>
                        </div>
                    </div>
                    <div className="blog__form--item">
                        <h3>Ünvan</h3>
                        <input type="text" name="" id="" />
                    </div>
                    <div className="blog__form--item">
                        <h3>Telefon</h3>
                        <PhoneInput
                            placeholder="nömrənizi daxil edin.."
                            value={value}
                            onChange={setValue} />
                    </div>
                    <button className="send__btn">Göndər</button>
                </div>
            </div>
        </section>
    )
}
