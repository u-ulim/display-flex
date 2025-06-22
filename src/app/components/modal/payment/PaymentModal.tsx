"use client";

import type React from "react";
import { useState } from "react";
import { X, CreditCard, Smartphone, Building, Shield } from "lucide-react";
import { Button } from "@/app/components/button";
import { Modal } from "../common";
import { Badge } from "@/app/components/badge";
import { IPaymentModalProps } from "./paymentModal.type";

export const PaymentModal = ({
  isOpen,
  onClose,
  selectedPlan,
  planType,
  planOriginalPrice,
  planFeatures,
  planPrice,
  planIcon,
  planName,
  planColor,
}: IPaymentModalProps) => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isProcessing, setIsProcessing] = useState(false);

  // 베이직 플랜이거나 플랜이 선택되지 않았을 때는 모달을 렌더링하지 않음
  if (!selectedPlan || planType === "basic") {
    return null;
  }

  const handlePayment = async () => {
    setIsProcessing(true);
    // 결제 처리 시뮬레이션
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsProcessing(false);
    onClose();
    // 성공 알림 등 추가 처리
  };

  return (
    <Modal open={isOpen} onOpenChange={onClose}>
      <Modal.Content
        className="max-w-2xl w-full max-h-[90vh] bg-white dark:bg-gray-900 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
       rounded-xl overflow-hidden z-50 p-0"
      >
        <div className="p-6 max-h-[90vh] overflow-y-auto">
          <Modal.Header className="flex items-center justify-between mb-6">
            <Modal.Title className="text-xl font-semibold text-gray-900 dark:text-white">
              결제하기
            </Modal.Title>
            <Button
              type="button"
              variant="default"
              size="sm"
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
            >
              <X className="w-5 h-5" />
            </Button>
          </Modal.Header>

          <div>
            {/* Selected Plan Summary */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-4">
              <div className="flex items-center space-x-3 mb-3">
                <div
                  className={`w-10 h-10 ${planColor} rounded-full flex items-center justify-center`}
                >
                  {planIcon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {planName}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                      ₩{`${planPrice?.toLocaleString()}`}
                    </span>
                    {planOriginalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        ₩{planOriginalPrice.toLocaleString()}
                      </span>
                    )}
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      /월
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {planFeatures?.map((feature, index) => (
                  <Badge
                    key={index}
                    variant="default"
                    size="sm"
                    className="font-sb-12"
                  >
                    {feature}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Payment Method */}
            <div className="mb-4">
              <label className="text-base font-semibold mb-4 block text-gray-900 dark:text-white">
                결제 수단
              </label>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                  <input
                    type="radio"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-4 h-4 text-orange-600 focus:ring-orange-500"
                  />
                  <CreditCard className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  <label className="flex-1 cursor-pointer text-gray-900 dark:text-white">
                    신용카드/체크카드
                  </label>
                </div>
                <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                  <input
                    type="radio"
                    value="phone"
                    checked={paymentMethod === "phone"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-4 h-4 text-orange-600 focus:ring-orange-500"
                  />
                  <Smartphone className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  <label className="flex-1 cursor-pointer text-gray-900 dark:text-white">
                    휴대폰 결제
                  </label>
                </div>
                <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer">
                  <input
                    type="radio"
                    value="bank"
                    checked={paymentMethod === "bank"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-4 h-4 text-orange-600 focus:ring-orange-500"
                  />
                  <Building className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                  <label className="flex-1 cursor-pointer text-gray-900 dark:text-white">
                    계좌이체
                  </label>
                </div>
              </div>
            </div>

            {/* Card Details (if card is selected) */}
            {paymentMethod === "card" && (
              <div className="space-y-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    카드번호
                  </label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      유효기간
                    </label>
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      CVC
                    </label>
                    <input
                      type="text"
                      placeholder="123"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    카드 소유자명
                  </label>
                  <input
                    type="text"
                    placeholder="홍길동"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                  />
                </div>
              </div>
            )}

            <hr className="border-gray-200 dark:border-gray-700 mb-4" />

            {/* Billing Summary */}
            <div className="space-y-3 mb-4">
              <h4 className="font-semibold text-gray-900 dark:text-white">
                결제 내역
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-gray-700 dark:text-gray-300">
                  <span>{planName} (1개월)</span>
                  <span>₩{planPrice?.toLocaleString()}</span>
                </div>
                {planOriginalPrice && (
                  <div className="flex justify-between text-green-600">
                    <span>할인</span>
                    <span>
                      -₩
                      {(planOriginalPrice - (planPrice ?? 0)).toLocaleString()}
                    </span>
                  </div>
                )}
                <div className="flex justify-between text-gray-700 dark:text-gray-300">
                  <span>VAT (10%)</span>
                  <span>
                    ₩{Math.floor((planPrice ?? 0) * 0.1).toLocaleString()}
                  </span>
                </div>
                <hr className="border-gray-200 dark:border-gray-700" />
                <div className="flex justify-between font-semibold text-lg text-gray-900 dark:text-white">
                  <span>총 결제금액</span>
                  <span>
                    ₩{Math.floor((planPrice ?? 0) * 1.1).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            {/* Security Notice */}
            <div className="flex items-center space-x-2 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg mb-4">
              <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span className="text-sm text-blue-700 dark:text-blue-300">
                SSL 보안 결제로 안전하게 보호됩니다
              </span>
            </div>

            {/* Payment Button */}
            <Button
              type="button"
              onClick={handlePayment}
              disabled={isProcessing}
              className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 text-lg font-semibold rounded-lg transition-colors mb-4"
            >
              {isProcessing ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>결제 처리 중...</span>
                </div>
              ) : (
                `₩${Math.floor(
                  (planPrice ?? 0) * 1.1
                ).toLocaleString()} 결제하기`
              )}
            </Button>

            {/* Terms */}
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
              결제 진행 시{" "}
              <span className="underline cursor-pointer">이용약관</span> 및{" "}
              <span className="underline cursor-pointer">개인정보처리방침</span>
              에 동의한 것으로 간주됩니다.
            </p>
          </div>
        </div>
      </Modal.Content>
    </Modal>
  );
};
