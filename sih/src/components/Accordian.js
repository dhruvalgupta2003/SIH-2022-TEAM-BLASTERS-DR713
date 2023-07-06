import React, { useState } from 'react'

export default function Accordion() {
    const [active, setActive] = useState(false);
    return (
        <>
            <div className="accordion-item">
                <div className="accordion-label" onClick={() => setActive(!active)}>
                    <h3 className="accordion-title">Lorem ipsum</h3>
                    <p className="accordion-title">{active ? '-' : '+'}</p>
                </div>

                {
                    active && <div className="accordion-content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, illum! Fugit nam, labore iure tenetur, architecto, quod distinctio dolorem exercitationem delectus obcaecati ut velit sed dicta dolor voluptatum. Exercitationem, unde.</p>
                    </div>
                }
            </div>
        </>
    )
}
