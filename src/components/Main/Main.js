import Depth from './components/Depth';

const getParentList = (nodes) => {
    const parentList = [];
    let focussed = nodes.parent;
    do {
        focussed && Object.keys(focussed).length && parentList.push(focussed);
        focussed = focussed?.parent;
    } while (!focussed || Object.keys(focussed).length)
    return parentList.reverse();
}

const getChildrenList = (nodes) => {
    const childrenList = [];
    let focussed = nodes.children
    do {
        focussed?.forEach(element => {
            element && Object.keys(element).length && childrenList.push(element);
            focussed = element?.children;
        })
    } while (focussed && Object.keys(focussed).length)
    return childrenList
}

const renderParents = (nodes) => {
    const parentList = getParentList(nodes);
    return parentList.map(parent => (
        <div className={"row"}>
            <div className="col mb-4">
                <div className="bg-secondary bg-gradient text-white p-3">
                    <div>{`${parent.name} ${parent.lastname}`}</div>
                    <div>{parent.role}</div>
                </div>
            </div>
        </div>
    ))
}

const renderChildren = (nodes) => {
    const childrenList = getChildrenList(nodes);
    return childrenList.map(children => (
        <div className="col mb-4">
            <div className="bg-secondary bg-gradient text-white p-3">
                <div>{`${children.name} ${children.lastname}`}</div>
                <div>{children.role}</div>
            </div>
        </div>
    ))
}

const Main = ({nodes}) => {
    return (
        <main>
            <div className="container text-center">
                <div className="d-flex">
                    <div className="flex-grow-1 me-3 mt-5">
                        {renderParents(nodes)}
                        <div className="row">
                            <div className="col mb-4">
                                <div className="bg-secondary bg-gradient text-white p-3">
                                    <div>{`${nodes.name} ${nodes.lastname}`}</div>
                                    <div>{nodes.role}</div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {renderChildren(nodes)}
                        </div>
                    </div>
                    <div>
                        <Depth />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main;
