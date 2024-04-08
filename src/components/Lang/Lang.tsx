const Lang = () => {
    const langs = [
        {
            id: 1,
            title: "Am",
            flag: ""
        },

        {
            id: 2,
            title: "En",
            flag: ""
        },

        {
            id: 3,
            title: "Ru",
            flag: ""
        }
    ];
    return (
        <div className='langs w-[95%] flex justify-end items-end gap-3'>
            {
                langs.map(lang => <span key={lang.id}>{lang.title}</span>)
            }
        </div>
    );
}

export default Lang;