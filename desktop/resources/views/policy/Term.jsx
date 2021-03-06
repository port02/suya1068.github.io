import React from "react";
import { navUrlData, policyClasses } from "./policy_config";
import { Link } from "react-router";

class Term extends React.Component {
    render() {
        return (
            <div className="container">
                <section className="site_main__index">
                    <h6>포스냅 이용 약관</h6>
                    <div className="row">
                        <div className="columns column-4">
                            <ol className={policyClasses.siteMainList}>
                                <li>제1조(목적)</li>
                                <li>제2조(용어의 정리)</li>
                                <li>제3조(약관 변경)</li>
                                <li>제4조(회사정보 동의 제공)</li>
                                <li>제5조(회원가입)</li>
                                <li>제6조(회원의 해제)</li>
                                <li>제7조(회원 자격상실 및 이의제기)</li>
                                <li>제8조(개인정보의 보호 및 권리)</li>
                                <li>제9조(계정 관리)</li>
                                <li>제10조(계정 보안)</li>
                            </ol>
                        </div>
                        <div className="columns column-4">
                            <ol start="11" className={policyClasses.siteMainList}>
                                <li>제11조(주문 및 결제)</li>
                                <li>제12조(결제취소 및 환불)</li>
                                <li>제13조(서비스 이용의 기술적 요구 사항)</li>
                                <li>제14조(콘텐츠 이용 및 권한)</li>
                                <li>제15조(서비스 중단)</li>
                                <li>제16조(손해 배상)</li>
                                <li>제17조(과오금)</li>
                                <li>제18조(면책 사항)</li>
                                <li>제19조(분쟁해결)</li>
                                <li>제20조(재판권 및 준거법)</li>
                            </ol>
                        </div>
                    </div>
                    <section className={policyClasses.contentBody}>
                        <h6>제1장 총칙</h6>
                        <section className={policyClasses.panel}>
                            <h6 className={policyClasses.panelHeading}>제1조(목적)</h6>
                            <div className={policyClasses.panelBody}>
                                <p>
                                    본 이용 약관은 포스냅이 운영하는 포스냅의 서비스 이용 권한을 부여 받기 위한 조건을 명시하며, 이용자의 권리, 의무 및 책임 사항 규정을 목적으로 합니다.
                                    포스냅의 이용자는 본 약관의 규정에 따라 이용해야만 하며 약관에 동의해야 이용 할 수 있습니다.
                                </p>
                            </div>
                        </section>
                        <section className={policyClasses.panel}>
                            <h6 className={policyClasses.panelHeading}>제2조(용어의 정의)</h6>
                            <div className={policyClasses.panelBody}>
                                <ol>
                                    <li>약관에서 명시하는 이용자란 회사가 제공하는 유/무료 서비스를 이용하는 회원/비회원을 통칭합니다.</li>
                                    <li>회원이란 본 약관에 동의하고 계정을 생성한 자로서, 회사가 제공하는 정보와 서비스를 지속적으로 이용할 수 있는 자를 말합니다.</li>
                                    <li>비회원이란 회원에 가입하지 않고 회사가 제공하는 정보와 서비스를 이용하는 자를 말합니다.</li>
                                </ol>
                            </div>
                        </section>
                        <section className={policyClasses.panel}>
                            <h6 className={policyClasses.panelHeading}>제3조(약관 변경)</h6>
                            <div className={policyClasses.panelBody}>
                                <ol>
                                    <li>회사는 필요에 따라 약관을 수정할 수 있으며, 개정 전 약관과 함께 적용일자 7일 전부터 웹 사이트에서 확인할 수 있도록 게시합니다.</li>
                                    <li>기존 이용자에게 변경 약관에 대한 내용을 가입 시 기재한 전자 우편 주소(계정명)로 발송합니다.</li>
                                    <li>회원은 변경된 약관에 동의하지 않을 경우, 회원 탈퇴(해지)를 할 수 있으며, 변경된 약관의 효력 발생일 이후에도 서비스를 계속 이용할 경우,
                                        약관의 변경 사항에 동의한 것으로 간주 됩니다.</li>
                                    <li>본 약관에 명시하지 않은 사항과 본 약관의 해석에 관하여는 정부가 제정한 소비자 보호 지침 및 전자 상 거래 등에서의 소비자 보호 지침 및
                                        관계 법령 또는 상관례에 따릅니다.</li>
                                </ol>
                            </div>
                        </section>
                        <section className={policyClasses.panel}>
                            <h6 className={policyClasses.panelHeading}>제4조(회사정보 등의 제공)</h6>
                            <div className={policyClasses.panelBody}>
                                <p>회사는 다음의 각 사항을 홈페이지에 게시하여, 이용자가 이를 알 수 있도록 합니다.</p>
                                <ol>
                                    <li>상호 및 대표자의 성명</li>
                                    <li>영업소 소재지 주소 및 전자 우편 주소</li>
                                    <li>사업자 등록번호, 통신 판매업 신고번호</li>
                                    <li>개인정보 취급 방침</li>
                                    <li>서비스 이용약관</li>
                                </ol>
                            </div>
                        </section>
                    </section>
                    <section className={policyClasses.contentBody}>
                        <h6>제2장 이용계약의 체결</h6>
                        <section className={policyClasses.panel}>
                            <h6 className={policyClasses.panelHeading}>제5조(회원가입)</h6>
                            <div className={policyClasses.panelBody}>
                                <ol>
                                    <li>회원으로서 회사 서비스의 이용을 희망하는 자는 약관의 내용에 동의함을 표시하고,
                                        회사가 제사하는 회원가입 양식에 관련사항을 기재하여 회원가입을 신청해야 합니다.</li>
                                    <li>회원 가입 시 기재하는 계정 정보는 이용자 본인의 유효한 전자우편 주소를 기재해야 합니다.
                                        <b>이용자의 실수 또는 의도적으로 유효하지 않은 전자우편 주소를 기재하여 회사의 정보 및 서비스 이용과 관련된 정보가 수신 되지 않을 경우, 이에 대한 책임은 이용자에게 있습니다.</b></li>
                                    <li>SNS 계정으로 가입한 경우, 반드시 본인의 유효한 계정으로 가입, 로그인 해야 하며 실수 또는 의도적으로 본인의 유효한 계정으로
                                        가입하지 않은 경우 회사의 정보 및 서비스 이용과 관련된 정보가 수신되지 않을 경우, 이에 대한 책임은 이용자에게 있습니다. </li>
                                    <li>만 14세 미만의 경우에는 계정을 생성할 수 없습니다.</li>
                                    <li>작가가입 시 실명으로 작가명이 등록되며, 공공질서 또는 미풍양속을 저해할 우려가 있는 작가명이나 직거래 유도를 의도한 작가명 등 사이트 운영 정책에 어긋나는 작가명으로 변경할 수 없습니다. 작가명 변경 승인 후에도 정책에 맞지 않는 경우 실명으로 다시 변경 될 수 있습니다.</li>
                                </ol>
                            </div>
                        </section>
                        <section className={policyClasses.panel}>
                            <h6 className={policyClasses.panelHeading}>제6조(회원의 해제)</h6>
                            <div className={policyClasses.panelBody}>
                                <ol>
                                    <li>회원은 언제든 서비스 이용을 중단하고 이용계약을 해지(이하 &#39;회원 탈퇴&#39;라 한다)할 수 있습니다.</li>
                                    <li>회원이 회원탈퇴를 원하는 경우 홈페이지 내 회원탈퇴 절차를 통하여 회원탈퇴를 할 수 있습니다.</li>
                                    <li>회원이 회원탈퇴를 할 경우, 계정에 속한 모든 이용 권한과 컨텐츠를 포함한 재산적 가치는 즉시 소멸하며, 복구 되지 않습니다.
                                        이는 계정 공유 및 계정 도용으로 인한 회원 탈퇴에도 적용됩니다.</li>
                                    <li>제7조에 의하여 회원자격을 상실한후 회원탈퇴를 하게 된 경우 재가입이 불가능 할 수 있습니다.</li>
                                </ol>
                            </div>
                        </section>
                        <section className={policyClasses.panel}>
                            <h6 className={policyClasses.panelHeading}>제7조(회원 자격상실 및 이의제기)</h6>
                            <div className={policyClasses.panelBody}>
                                <ol>
                                    <li>회사는 회원이 서비스 이용 내용에 있어 다음 각 호에 해당하는 경우 사전 통보 없이 서비스 이용을 제한하거나 회원자격을 상실 시킬 수 있습니다.
                                        <ol type="a">
                                            <li>서비스 제공을 방해하거나, 안내하는 방법 외 다른 방법으로 서비스를 사용하는 경우, 다른 이용자의 개인정보를 무단으로 수집 제공하는 경우,
                                                영리적 목적으로 이용하는 경우, 음란정보, 저작권 침해 등 공서양속 및 법령에 위반되는 내용의 정보 등을 발송 또는 게시하는 행위</li>
                                            <li>귀하는 당사의 서면허가를 받은 경우를 제외하고 당사가 제공하는 소프트웨어의 일부를 복사, 수정, 배포, 판매 또는 대여가 불가능하고
                                                역설계하거나 소스 코드의 추출을 시도하는 등 포스냅의 서비스를 복제, 분해하거나 기타 변형하는 행위</li>
                                            <li>법령, 법원의 판결, 결정 혹은 명령 또는 법령상 구속력을 가지는 행정 조치에 위반되는 행위</li>
                                            <li>공공질서 또는 미풍양속을 저해할 우려가 있는 행위</li>
                                            <li>당사 또는 제3자의 저작권, 상표권, 특허권 등의 지적재산권, 명예권, 프라이버시권, 기타 법령상 또는 계약상의 권리를 침해하는 행위</li>
                                            <li>과도하게 폭력적인 표현, 노골적인 성적 표현, 인종, 국적, 신조, 성별, 사회적 신분과 가문 등에 관하여 차별하는 표현, 자살, 자상 행위,
                                                약물 남용을 유인 또는 조장하는 표현, 기타 반사회적인 내용을 포함하고 타인에게 불쾌감을 주는 표현을 투고 또는 송신하는 행위</li>
                                            <li>포스냅 또는 제3자를 사칭하는 행위 또는 의도적으로 허위 정보를 유포하는 행위</li>
                                            <li>동일하거나 유사한 메시지를 불특정 다수의 이용자에게 송신하는 행위(당사가 인정한 것은 제외)</li>
                                            <li>당사가 정한 방법 외의 방법으로 본 콘텐츠의 이용권(코인)을 현금, 재물 기타 경제적 이익과 교환하는 행위</li>
                                            <li>영업, 선전, 광고, 권유, 기타 영리를 목적으로 하는 행위(당사가 인정한 것은 제외함) 등 포스냅이 스팸으로 판단한 행위</li>
                                            <li>다른 이용자에 대한 악의적인 행위나 비방 및 중상모략 등을 목적으로 하는 행위</li>
                                            <li>반 사회적인 세력에 대한 이익 공여와 기타 협력 행위.</li>
                                            <li>종교 활동 또는 종교 단체로 권유하는 행위</li>
                                            <li>타인의 개인정보, 등록 정보, 이용 이력 정보 등을 불법으로 수집, 공개 또는 제공하는 행위</li>
                                            <li>기타 본 서비스가 미리 정한 이용 목적과 다른 목적으로 본 서비스를 이용하는 행위</li>
                                            <li>타인의 결제수단 및 메일 주소를 허락 없이 도용하여 사용하는 행위</li>
                                            <li>본 약관을 포함하여 기타 회사가 정한 제반 규정 또는 이용 조건을 위반한 경우</li>
                                            <li>서비스 품질 향상을 위해 사이트 내에서 이루어지는 모든 대화는 모니터링 될 수 있으며 이를 바탕으로 회사가 제공하는 서비스의 원활한 진행을 방해하는 행위를 하거나 시도한 경우</li>
                                            <li>사이트에서 제공하거나 인정하는 방법 외의 다른 수단으로 회원간 거래를 시도하거나 유도한 경우 (고객이 다른 수단을 유도하는 경우에도 사이트에서 제공하거나 인정하는 방법으로 의사소통 하여야 함)</li>
                                        </ol>
                                    </li>
                                    <li>서비스 이용 제한은 일시정지, 초기화, 영구정지, 이용계약 해지 등으로 구분됩니다.</li>
                                    <li>회사는 이용 제한을 하는 경우에 회원에게 가입 시 기재한 전자우편을 통해 회원에게 내용을 통보합니다.</li>
                                    <li>회원이 회사의 이용 제한에 불복하고자 할 때에는 통보를 받은 날로부터 15일
                                        이내에 회사의 이용 제한에 불복하는 이유를 기재한 이의 신청서를 회사가 정한 방법으로 제출해야 합니다.</li>
                                    <li>3항의 이의 신청서를 접수한 회사는 접수한 날로부터 15일 이내에 회원의 불복 이유에 대해 전자우편으로 답변 합니다.
                                        다만, 회사는 15일 이내에 답변이 곤란한 경우, 회원에게 그 사유와 처리 일정을 통보합니다.</li>
                                    <li>회사는 위 답변 내용에 따라 상응하는 조치를 취하여야 합니다.</li>
                                </ol>
                            </div>
                        </section>
                        <section className={policyClasses.panel}>
                            <h6 className={policyClasses.panelHeading}>제8조(개인정보의 보호 및 관리)</h6>
                            <div className={policyClasses.panelBody}>
                                <ol>
                                    <li>회사는 관련 법령이 정하는 바에 따라 계정정보를 포함한 회원의 개인정보를 보호하기 위해 노력합니다.
                                        회원 개인정보의 보호 및 사용에 대해서는 관련 법령 및 회사가 별도로 고지하는 개인정보 취급방침이 적용됩니다.</li>
                                    <li>서비스의 일부로 제공되는 개별 서비스를 제외한 것으로 홈페이지 및 웹 사이트에 단순히 링크된 제3자 제공의 서비스에
                                        대하여는 회사의 개인정보 취급방침이 적용되지 않습니다.</li>
                                    <li><strong>회사는 회원의 귀책사유로 인하여 노출된 회원의 계정정보를 포함한 모든 정보에 대해서 일체의 책임을 지지 않습니다.</strong></li>
                                    <li onClick={() => window.scrollTo(0, 0)}><Link to="/policy/private"><span style={{ color: "blue" }}>개인정보 취급 방침</span></Link></li>
                                </ol>
                            </div>
                        </section>
                    </section>
                    <section className={policyClasses.contentBody}>
                        <h6>제3장 계정 관리 및 보안</h6>
                        <section className={policyClasses.panel}>
                            <h6 className={policyClasses.panelHeading}>제9조(계정관리)</h6>
                            <div className={policyClasses.panelBody}>
                                <ol>
                                    <li>포스냅 계정 또는 로그인 정보를 본인 외의 제 3자에게 공유하거나 양도할 수 없습니다.</li>
                                    <li>회원은 자신의 계정정보를 비밀로 유지할 책임이 있으며, 로그인 정보 사용에 대한 책임을 집니다.</li>
                                    <li>마지막 접속 시점으로부터 1년이상 경과한 계정은 이용자에게 통지 없이 삭제될 수 있습니다.</li>
                                </ol>
                            </div>
                        </section>
                        <section className={policyClasses.panel}>
                            <h6 className={policyClasses.panelHeading}>제10조(계정보안)</h6>
                            <div className={policyClasses.panelBody}>
                                <ol>
                                    <li>로그인 정보의 분실, 도난 또는 허가 없는 유출 등을 포함(이에 국한되지 않음)하여 보안에 대한 위반사실을 발견하거나 의심이 가는 경우,
                                        이용자는 hcpark@forsnap.com 으로 즉시 알려주셔야 합니다.</li>
                                    <li>계정 관리의 소홀 또는 계정 공유로 인해 발생하는 손해에 대해서는 회사가 책임을 지지 않습니다.</li>
                                </ol>
                            </div>
                        </section>
                    </section>
                    <section className={policyClasses.contentBody}>
                        <h6>제4장 서비스 이용</h6>
                        <section className={policyClasses.panel}>
                            <h6 className={policyClasses.panelHeading}>제11조(서비스 이용)</h6>
                            <div className={policyClasses.panelBody}>
                                <ol>
                                    <li>포스냅은 중개서비스 제공자로 중개서비스는 회사가 회원 각자의 자기결정에 의하여 회원 상호간에 서비스 및 물품매매거래가 이루어질 수 있도록 사이버 거래장소(marketplace)를 온라인으로 제공하는 것입니다.</li>
                                    <li>포스냅은 회원간 거래의 안전성 및 신뢰성을 증진시키는 도구만을 제공합니다. 회원 간에 성립된 거래와 관련된 책임은 거래당사자인 회원들 스스로가 부담하여야 합니다.</li>
                                    {/*<li>포스냅은 중개서비스 수수료가 0%로 서비스 자체에 대한 세금계산서는 재화와 용역의 실제적인 공급자(작가)가 공급받는 자(고객)에게 발행해 주어야 합니다.</li>*/}
                                    {/*<li>포스냅은 중개서비스 수수료에 대한 세금계산서만 작가에게 발급합니다. 서비스 자체에 대한 세금계산서는 재화와 용역의 실제적인 공급자(작가)가 공급받는 자(고객)에게 발행해 주어야 합니다.</li>*/}
                                    <li>포스냅은 사이트 이용 시 발생하는 수수료에 대한 세금계산서만 작가에게 발급합니다. 서비스 자체에 대한 세금계산서는 재화와 용역의 실제적인 공급자(작가)가 공급받는 자 (고객)에게 발행해 주어야 합니다.</li>
                                </ol>
                            </div>
                        </section>
                        <section className={policyClasses.panel}>
                            <h6 className={policyClasses.panelHeading}>제12조(주문 결제 및 취소, 환불)</h6>
                            <div className={policyClasses.panelBody}>
                                <ol>
                                    <li>회원은 회사가 제공하는 절차에 의하여 재화, 콘텐츠,상품 구매를 신청할 수 있으며, 아래 사항을 각 재화 및 콘텐츠, 상품 또는 관련 게시물에 표시합니다.</li>
                                    <li>재화, 콘텐츠, 상품의 명칭, 종류, 내용, 가격</li>
                                    <li>회원은 회사에서 정하고 있는 방법으로 유료서비스의 결제가 가능합니다. 단, 미성년 회원의 결제는 원칙적으로 보호자(법정대리인)의 명의 또는 동의 하에 이루어져야 하고, 보호자(법정대리인)는 본인 동의 없이 체결된 자녀(미성년자)의 계약을 취소할 수 있습니다.</li>
                                    <li>회사와 유료서비스 이용에 관한 계약을 체결한 회원은 회사의 취소와 환불 정책에따라 결제취소를 신청할 수 있습니다. 단, 다음 각호의 경우에는 결제취소 및 환불이 불가능 합니다.
                                        <ul>
                                            <li>이용자가 약관을 위반하거나 위반 가능성으로 인해 계정이 정지된 경우, 환불이 가능하지 않습니다.</li>
                                        </ul>
                                    </li>
                                    {/*<li>본 약관 제 12조(주문 결제 및 취소, 환불)에 의거한 환불에 대한 신청은 메뉴의 예약 취소/환불 기능을 이용해 신청할 수 있습니다.*/}
                                    <li>본 약관 제 12조(주문 결제 및 취소, 환불)에 의거한 환불에 대한 신청은 메뉴의 예약 취소/환불 기능 또는 고객센터를 이용해 신청할 수 있습니다.
                                        <ul>
                                            <li>포스냅 메뉴 내 : 예약 취소</li>
                                        </ul>
                                    </li>
                                    <li>회원의 환불 의사표시에 대하여 회사가 회신한 날로 부터 영업일 기준 14일 이내에 환불처리 되며, 환불이 불가할 시에는 이를 사전에 고지합니다.</li>
                                </ol>
                            </div>
                        </section>
                        <section className={policyClasses.panel}>
                            <h6 className={policyClasses.panelHeading}>제13조(서비스 이용의 기술적 요구 사항)</h6>
                            <div className={policyClasses.panelBody}>
                                <ol>
                                    <li>회사는 서비스를 공급하면서 아래의 &#8249;서비스 이용 필수 사양&#8250;이 충족되어야 정상적인 서비스 이용이 가능하며,
                                        이용자가 해당 사양에 충족되지 못한 사유로 서비스 이용의 이의를 제기할 시 회사는 책임을 지지 않습니다.
                                        <ol>
                                            <li>서비스 이용 필수 사양
                                                <ul>
                                                    <li>웹브라우저 :Internet Explorer 10.0이상 , Chrome , Safari , Firefox 등 대부분의 웹 브라우저
                                                        (HTML5 지원되는 브라우저에 최적화 되어 있습니다.)</li>
                                                </ul>
                                            </li>
                                        </ol>
                                    </li>
                                    <li>포스냅의 서비스 이용은 인터넷 연결을 통해 가능합니다. 서비스 접속 시 발생되는 인터넷 연결 비용은 이용자가 부담 합니다.</li>
                                </ol>
                            </div>
                        </section>
                        <section className={policyClasses.panel}>
                            <h6 className={policyClasses.panelHeading}>제14조(콘텐츠 이용 및 권한)</h6>
                            <div className={policyClasses.panelBody}>
                                <ol>
                                    <li>촬영 후 업로드된 콘텐츠는 가입한 계정에 소장되며, 포스냅 사이트을 통해 열람할 수 있습니다.</li>
                                    <li>소장한 콘텐츠를 삭제한 경우, 복구는 가능하지 않습니다. 본인이 삭제하지 않은 경우에도 해당 약관의 계정관리 항목에 따라 도움이 불가능 합니다.</li>
                                    <li>이용자는정해진 이용 행위를 넘어 콘텐츠의 복제, 송신, 전재, 수정 등의 행위를 하면 안됩니다.</li>
                                    <li>이용자가 게재한 게시물에 대한 백업은 본인이 수행해야 하며 당사는 이용자가 생성한 콘텐츠에 대한 백업 의무가 없습니다.</li>
                                    <li>콘텐츠의 계약이 종료된 경우 판매가 중단되며, 회사는 종료되는 콘텐츠 대해 사전 공지를 진행 합니다.</li>
                                </ol>
                            </div>
                        </section>
                        <section className={policyClasses.panel}>
                            <h6 className={policyClasses.panelHeading}>제15조(서비스 중단)</h6>
                            <div className={policyClasses.panelBody}>
                                <ol>
                                    <li>포스냅 서비스는 회사의 영업방침에 따라 정해진 시간 동안 제공합니다.</li>
                                    <li>제 1항에도 불구하고, 다음 각 호의 어느 하나에 해당하는 경우에는 일정한 시간 동안 포스냅의 서비스가 제공되지 아니할 수 있으며,
                                        해당 시간 동안 회사는 포스냅의 서비스를 제공할 의무가 없습니다.
                                        <ol type="a">
                                            <li>컴퓨터 등 정보통신설비의 보수점검, 교체, 정기점검 또는 콘텐츠 내용이나 포스냅 서비스의 수정을 위하여 필요한 경우</li>
                                            <li>해킹 등의 전자적 침해사고, 통신사고, 회원들의 비정상적인 서비스 이용행태, 미처 예상하지 못한 서비스 불안정성에 대응하기 위하여 필요한 경우</li>
                                            <li>관련 법령에서 특정 방법으로 서비스의 제공을 금지하는 경우</li>
                                            <li>천재지변, 비상사태, 정전, 서비스 설비의 장애 또는 서비스 이용의 폭주 등으로 정상적인 서비스 제공이 불가능한 경우</li>
                                            <li>회사의 분할, 합병, 영업양도, 영업의 폐지, 당 해 회사의 수익 약화 등 경영상 중대한 필요에 의한 경우</li>
                                        </ol>
                                    </li>
                                    <li>위의 이유로 인해 회사는 서비스 전부를 중단할 수 있으며, 30일 전에 홈페이지에 이를 공지합니다. 사전에 통지할 수 없는 부득이한 사정이 있는 경우는 사후에 통지를 할 수 있습니다.</li>
                                    <li>회사가 위의 사유로 서비스를 종료하는 경우, 회원은 무료 서비스 및 사용 기간이 남아 있지 않은 유료 서비스 / 계속적 유료 이용 계약에 대하여 손해배상을 청구할 수 없습니다.
                                        사용 기간에 제한이 없는 무료 쿠폰 등은 서비스 종료일까지를 해당 쿠폰의 사용 기간으로 봅니다.</li>
                                </ol>
                            </div>
                        </section>
                    </section>
                    <section className={policyClasses.contentBody}>
                        <h6>제5장 손해배상 및 면책 사항</h6>
                        <section className={policyClasses.panel}>
                            <h6 className={policyClasses.panelHeading}>제16조(손해 배상)</h6>
                            <div className={policyClasses.panelBody}>
                                <ol>
                                    <li>회사는 회사가 제공하는 서비스 이용과 관련하여 회원에게 발생한 손해에 대해 회사의 고의 또는 과실이 있는 경우 책임을 지도록 하겠습니다.</li>
                                    <li>회사가 개별서비스 제공자와 제휴 협정을 맺고 회원에게 개별서비스를 제공하면서 회원이 개별서비스 이용약관에 동의한 뒤 개별서비스 제공자의
                                        귀책사유로 인해 손해가 발생할 경우 관련 손해에 대해서는 개별서비스 제공자가 책임을 집니다.</li>
                                    <li>회사는 이용자에게 제공한 콘텐츠 내용이 표시.광고된 내용과 다를 경우 당해 콘텐츠를 공급 받은 날로부터 3월 이내,
                                        그 사실을 안 날 또는 알 수 있었던 날로부터 30일 이내에 손해에 대해 보상을 합니다.</li>
                                </ol>
                            </div>
                        </section>
                        <section className={policyClasses.panel}>
                            <h6 className={policyClasses.panelHeading}>제17조(과오금)</h6>
                            <div className={policyClasses.panelBody}>
                                <ol>
                                    <li>회사는 과오금이 발생한 경우 회원이 결제한 방법과 동일한 방법으로 환불하며, 동일한 방법으로 환불이 불가능할 때에는 이를 사전에 고지합니다.</li>
                                    <li>회사의 책임이 있는 사유로 과오금이 발생한 경우에는 과오금 전액을 환불하며, 회원의 책임이 있는 사유로 과오금이 발생한 경우,
                                        회사가 과오금을 환불하는데 소요되는 비용은 합리적인 범위 내에서 회원이 부담하여야 합니다.</li>
                                    <li>회사는 과오금의 환불절차를 콘텐츠 이용자보호지침에 따라 처리 합니다.</li>
                                </ol>
                            </div>
                        </section>
                        <section className={policyClasses.panel}>
                            <h6 className={policyClasses.panelHeading}>제18조(면책 사항)</h6>
                            <div className={policyClasses.panelBody}>
                                <ol>
                                    <li>회사는 천재지변, 전쟁 및 기타 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 대한 책임이 면제됩니다.</li>
                                    <li>회사는 기간통신 사업자가 전기통신 서비스를 중지하거나 정상적으로 제공하지 아니하여 손해가 발생한 경우 책임이 면제됩니다.</li>
                                    <li>회사는 서비스용 설비의 보수, 교체, 정기점검, 공사 등 부득이한 사유로 발생한 손해에 대한 책임이 면제됩니다.</li>
                                    <li>회사는 회원의 귀책사유로 인한 서비스 이용의 장애 또는 손해에 대하여 책임을 지지 않습니다.</li>
                                    <li>회사는 이용자의 PC 및 휴대기기 오류에 의해 손해가 발생한 경우, 또는 회원이 전자우편 주소를 부실하게 기재하여 손해가 발생한 경우 책임을 지지 않습니다.</li>
                                    <li>회사는 회원이 서비스를 이용하면서 얻은 자료로 인한 손해에 대하여 책임을 지지 않습니다. 또한 회사는 회원이 서비스를 이용하며 타
                                        회원으로 인해 입게 되는 정신적 피해에 대하여 보상할 책임을 지지 않습니다.</li>
                                    <li>회사는 회원이 서비스에 게재한 각종 정보, 자료, 사실의 신뢰도, 정확성 등 내용에 대하여 책임을 지지 않습니다.</li>
                                    <li>회사는 이용자 상호간 및 이용자와 제삼자 상호 간에 서비스를 매개로 발생한 분쟁에 대해 개입할 의무가 없으며, 이에 따른 손해를 배상할 책임도 없습니다.</li>
                                </ol>
                            </div>
                        </section>
                        <section className={policyClasses.panel}>
                            <h6 className={policyClasses.panelHeading}>제19조(분쟁해결)</h6>
                            <div className={policyClasses.panelBody}>
                                <ol>
                                    <li>회사는 회원이 제기하는 정당한 의견이나 불만을 반영하고 그 피해를 보상처리하기 위하여 피해보상처리기구를 설치/운영합니다.</li>
                                    <li>회사는 회원으로부터 제출되는 불만사항 및 의견은 우선으로 그 사항을 처리합니다. 다만, 신속한 처리가 곤란한 경우에는 이용자에게 그 사유와 처리일정을 즉시 통보해 드립니다.</li>
                                    <li>회사와 회원 간에 발생한 전자상거래 분쟁과 관련하여 이용자의 피해구제신청이 있는 경우에는 공정거래위원회 또는 시/도지사가 의뢰하는 분쟁조정기관의 조정에 따를 수 있습니다.</li>
                                </ol>
                            </div>
                        </section>
                        <section className={policyClasses.panel}>
                            <h6 className={policyClasses.panelHeading}>제20조(재판권 및 준거법)</h6>
                            <div className={policyClasses.panelBody}>
                                <ol>
                                    <li>회사와 회원간에 발생한 분쟁으로 소송이 제기되는 경우, 이용자의 주소지 관활법인(주소가 없는 경우에는 관련법 규정에 따릅니다.)을 전속관할로 합니다.</li>
                                    <li>본 약관과 회사와 이용자간에 제기된 전자상거래 소송에는 대한민국 법률을 적용합니다.</li>
                                </ol>
                            </div>
                        </section>
                        <section className={policyClasses.panel}>
                            <h6>부칙</h6>
                            <h6 className={policyClasses.panelHeading}>제1조(시행일)</h6>
                            <div className={policyClasses.panelBody}>
                                <p>이 약관은 2017년 2월 21일부터 시행합니다.</p>
                            </div>
                        </section>
                    </section>
                </section>
            </div>
        );
    }
}

export default Term;
