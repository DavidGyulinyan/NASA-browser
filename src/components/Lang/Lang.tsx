import './Lang.css'

const Lang = () => {
    const langs = ['En', 'Ru', 'Am'];
    return (
        <div className='langs flex-justify-end'>
            {
                langs.map(lang => <a href='' key={lang}>{lang}</a>)
            }
        </div>
    );
}

export default Lang;