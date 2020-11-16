import React from 'react'
import GetApiData from './GetApiData';

// первый вариант табов const TabContent = ({prise, phone, winnerData}) => (
// <div className="winners__list">         <div className="winners__list-item">
//            <div className="winners__prise">{prise}</div>             <div
// className="winners__tel">{phone}</div>             <div
// className="winners__data">{winnerData}</div>         </div>     </div> );

const LoadMoreButton = ({onClick}) => (
    <div className="winners__btn-wrap">
        <button onClick={onClick} className="winners__btn">
            Показать ещё
        </button>
    </div>
)

function Tabs({items, content}) {
    const [active, setActive] = React.useState("weekly");
    const [page, setPage] = React.useState(1);
    const [isActiveButton, setButtonStatus] = React.useState(true);

    const openTab = filter => setActive(filter)

    const incrementPage = () => {
        setPage(page + 1)
    }

    const disableButton = () => {
        setButtonStatus(false)
    }

    return (
		<>
			<div className="winners__tipe">
				{items.map((n, i) => (
					<div
						className={`winners__tipe-item ${
							n.filter === active
								? "winners__tipe-item_active"
								: ""
						}`}
						onClick={() => openTab(n.filter)}
						data-index={i}
						key={i}
					>
						{n.title}
					</div>
				))}
			</div>
			{/* первый вариант табов */}
			{/* {content[active] && <TabContent {...content[active]}/>} */}
			{/* второй вариант табов */}
			{/* <div className="winner__list">
                {
                    content.map((name,i) => (
                        <div className="winners__list-item" key={i}>
                            <div className="winners__prise">{name.prise}</div>
                            <div className="winners__tel">{name.phone}</div>
                            <div className="winners__data">{name.winnerData}</div>
                        </div>
                    ))
                }

            </div>    */}
			{/* третий вариант табов */}
			<GetApiData
				active={active}
				page={page}
				disableButton={disableButton}
			/>
			{isActiveButton && <LoadMoreButton onClick={incrementPage} />}

		</>
	);
}

export default Tabs
