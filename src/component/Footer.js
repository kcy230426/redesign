import React, {useEffect} from "react";
import logo from "../asset/f_logo.png"


const Footer = (props) => {
    const ft = props.dbf
    const cb = props.dbq
    const fsns = props.dbs
    const fmenus = props.dbm
    const finfo = props.dbi
    const fnotice =props.dbn


    useEffect(() => {
        const handleMouseEnter = (event) => {
          event.target.classList.add('hovered');
        };
      
        const handleMouseLeave = (event) => {
          event.target.classList.remove('hovered');
        };
      
        const sclassElements = document.querySelectorAll('.snsbox li');
      
        sclassElements.forEach((element) => {
          element.addEventListener('mouseenter', handleMouseEnter);
          element.addEventListener('mouseleave', handleMouseLeave);
        });
      

        return () => {
          sclassElements.forEach((element) => {
            element.removeEventListener('mouseenter', handleMouseEnter);
            element.removeEventListener('mouseleave', handleMouseLeave);
          });
        };
      }, []);

  


    return(
        <footer id="ft">
                <div className="quick">
                    <ul className='d-flex flex-column justify-content-center'>
                        {
                            cb.quick.map((v,i)=>{
                                return(
                                    <li key={v.id} className={`rel btn${v.id} `}><a key={v.id} href={v.href} target={v.target}><img src={v.img} alt={v.alt} className={v.cls} /><span className={v.spancls}>{v.content}</span></a></li>
                                )
                            })
                        }
                    </ul>
                </div>
            <div className="ftbox d-flex justify-content-between">
                <div className="firstbox d-flex">
                {Object.keys(ft).map((category) => (
                    <ul key={category} className={`d-flex ft ${category}`}>
                        {ft[category].map((item) => (
                        <li key={item.id} className="ft-item">
                            <a key={`${item.id}_title`} href={`#${item.href}`} className="d2a">
                            {item.title}
                            </a>
                            {Object.keys(item).slice(4).map((key, index) => (
                            <a key={`${item.id}_${key}_${index}`} href={`#${item.href}_${index}`} className="d2a">
                                {item[key]}
                            </a>
                            ))}
                        </li>
                         ))}
                    </ul>
                ))}
                </div>
                <ul className="snsbox">
	                {Object.keys(fsns).map((category) => (
                        <li key={category} className={`sclass ${category}`}>
                        {fsns[category].map((item) => (
                            <a key={item.id} href={`#${item.href}`}>
                                <img key={`${item.id}_black`} className="black" src={item.img} alt={item.imgalt}/>
                                <img key={`${item.id}_white`} className="white" src={item.wimg} alt={item.imgalt}/>
                            </a>
                        ))}
                        </li>
                    ))}
                </ul>

                <ul className="menubox">
                    {Object.keys(fmenus).map((category) => (
                        <React.Fragment key={category}>
                        {fmenus[category].map((item) => (
                            <li className={item.class} key={item.id}>
                            <a key={item.id} href={`#${item.href}`}>{item.c1}</a>
                            </li>
                        ))}
                        </React.Fragment>
                    ))}
                </ul>

                <div className="last">
                        <h3 className="logo"><img src={logo} alt="푸터 로고" /></h3>
                            <div className="txt">
                        {Object.keys(finfo).map((category)=>(
                                <React.Fragment key={category}>
                                {finfo[category].map((item)=>(
                                    <ul className="cbox" key={item.id}>
                                        <li key={`${item.id}_c1`} className={item.class}>{item.c1}</li>
                                        <li key={`${item.id}_c2`} className={item.class}>{item.c2}</li>
                                        <li key={`${item.id}_c3`} className={item.class}>{item.c3}</li>
                                        <li key={`${item.id}_c4`} className={item.class}>{item.c4}</li>
                                    </ul>
                                ))}
                                </React.Fragment>
                         ))}
                         <div className="notice">
                            {Object.keys(fnotice).map((category)=>(
                            <React.Fragment key={category}>
                            {fnotice[category].map((item)=>(
                                <ul className="notice1" key={item.id}>
                                <li key={`${item.id}_c1`} className={item.class}>{item.c1}</li>
                                <li key={`${item.id}_c2`} className={item.class}>{item.c2}</li>
                            </ul>
                            ))}
                            </React.Fragment>
                            ))}
                            {Object.keys(fnotice).map((category)=>(
                            <React.Fragment key={category}>
                            {fnotice[category].map((item)=>(
                                <ul className="notice2" key={item.id}>
                                <li key={`${item.id}_c3`} className={item.class}>{item.c3}</li>
                                <li key={`${item.id}_btn`}><button key={item.id}>{item.button}</button></li>
                            </ul>
                            ))}
                            </React.Fragment>
                            ))}
                        </div>
                         
            </div>
            
            </div>



            </div>
            
        </footer>
    )
}

export default Footer;
