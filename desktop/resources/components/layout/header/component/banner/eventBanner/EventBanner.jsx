import "./eventBanner.scss";
import React, { Component } from "react";
import Img from "shared/components/image/Img";
import utils from "forsnap-utils";

export default class EventBanner extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onCancelToBanner = this.onCancelToBanner.bind(this);
        this.onEventBanner = this.onEventBanner.bind(this);
    }

    onCancelToBanner() {
        if (typeof this.props.onCancelToBanner === "function") {
            this.props.onCancelToBanner();
        }
    }

    onEventBanner(e) {
        e.preventDefault();
        let page = "메인";
        const pathname = location.pathname;
        if (pathname.startsWith("/products") && location.search.startsWith("?category=")) {
            page = "리스트";
        } else if (pathname.startsWith("/products/")) {
            page = "상세";
        }
        const node = e.currentTarget;
        const eCategory = "페이백이벤트 배너";
        const eAction = "";
        const eLabel = page;
        utils.ad.gaEvent(eCategory, eAction, eLabel);
        location.href = node.href;
    }

    render() {
        return (
            <div className="event_banner" id="event_banner">
                <div className="container">
                    <a className="content-area" role="button" href="/events/20180322" onClick={this.onEventBanner}>
                        <div className="event_banner-dog">
                            <Img image={{ src: "/banner/20180321/images/dog.png", type: "image" }} />
                        </div>
                        <div className="event_banner-content">
                            <p className="event_banner-content__title">지금 예약하고 페이백 받으시개</p>
                            <p className="event_banner-content__description">
                                {"\"결제금액의 7% 페이백(최대5만원) 드립니다.\""}
                            </p>
                        </div>
                        <div className="event_banner-coupon">
                            <Img image={{ src: "/banner/20180321/images/coupon.png", type: "image" }} />
                        </div>
                        <div className="event_banner-dog">
                            <Img image={{ src: "/banner/20180321/images/tree.png", type: "image" }} />
                        </div>
                    </a>
                    <div className="event_banner-close" onClick={this.onCancelToBanner}>
                        <div>
                            <Img image={{ src: "/banner/20180321/images/close.png", type: "image" }} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

