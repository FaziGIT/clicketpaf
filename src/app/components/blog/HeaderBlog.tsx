interface Props {
    title: string;
    time: string;
    by: string;
}

export default function HeaderBlog({title, time, by}: Props) {
    return <>
        <a href="#"
           className="text-white hover:text-gray-700 transition duration-500 ease-in-out text-sm">
            Election
        </a>
        <h1 className="text-white font-bold text-4xl">{title}</h1>
        <div className="py-5 text-sm font-regular text-white flex">
                    <span className="mr-3 flex flex-row items-center">
                       <svg className="text-white" fill="currentColor" height="13px" width="13px" version="1.1"
                            id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                            x="0px" y="0px" viewBox="0 0 512 512"
                       >
	<g>
		<path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
			c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
		                   	c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"></path></g></svg>
                      <span className="ml-1">{time}</span>
                    </span>

            <a href="#" className="flex flex-row items-center hover:text-white  mr-3">
                <svg className="text-white" fill="currentColor" height="16px" aria-hidden="true"
                     role="img"
                     focusable="false" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor"
                          d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z">
                    </path>
                    <path d="M0 0h24v24H0z" fill="none"></path>
                </svg>
                <span className="ml-1">{by}</span></a>
        </div>
        <hr/>

    </>
}
