import "./estimateAbout.scss";
import React, { Component, PropTypes } from "react";
import CONSTANT from "shared/constant";
import utils from "forsnap-utils";
import Img from "shared/components/image/Img";
import classNames from "classnames";

export default class EstimateAbout extends Component {
    render() {
        return (
            <section className="estimate-about">
                <h1 className="sr-only">촬영요청 이용안내</h1>
                <article className="estimate-about__header">
                    <h2 className="title">{CONSTANT.ESTIMATE_ABOUT.HEADER.title}</h2>
                    <p className="describe">{utils.linebreak(CONSTANT.ESTIMATE_ABOUT.HEADER.description)}</p>
                </article>
                <article className="estimate-about__step">
                    <h2 className="title">{CONSTANT.ESTIMATE_ABOUT.STEP.title}</h2>
                    <p className="describe">{utils.linebreak(CONSTANT.ESTIMATE_ABOUT.STEP.description)}</p>
                    <div className="wrap-steps">
                        {CONSTANT.ESTIMATE_ABOUT.STEP.step.map((obj, idx) => {
                            return (
                                <div className="step" key={`step_${idx}`}>
                                    <Img image={{ src: obj.src, type: "image" }} isImageCrop={false} />
                                    <p className="step-text">
                                        <span style={{ color: "#999" }}>{`${obj.no}`}</span><br />
                                        <span>{obj.text}</span>
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </article>
                <article className="estimate-about__tip">
                    <h2 className="title">{CONSTANT.ESTIMATE_ABOUT.TIP.title}</h2>
                    {CONSTANT.ESTIMATE_ABOUT.TIP.tip.map((obj, idx) => {
                        return (
                            <ol className="tip" key={`tip_${idx}`}>
                                <li className="text">{`${obj.no}. ${obj.title}`}</li>
                                <ul style={{ paddingLeft: 10 }}>
                                    {obj.text.map((t, i) => <p key={`about-tip__${i}`} className={classNames("caption", { "strong": obj.strong })}>{utils.linebreak(t)}</p>)}
                                </ul>
                            </ol>
                        );
                    })}
                </article>
            </section>
        );
    }
}
