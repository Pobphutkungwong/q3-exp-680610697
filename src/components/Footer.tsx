import React, { useState } from "react";
import { StudentInfo } from "./StudentInfo";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";

export function Footer() {
  const [isOpen, setIsOpen] = useState(false);

  // ข้อมูลตัวอย่างของนักศึกษา
  const student = {
    name: "Pobphut Kungwong",
    image: "../public/profile.jpg",
    bio: "นักศึกษาชั้นปีที่ 2 สาขาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยเชียงใหม่",
    hobbies: "เขียนโค้ด, ถ่ายภาพ, ฟังเพลง",
    cmuEmail: "pobphut_kung@cmu.ac.th",
    social: "https://www.facebook.com/phopphut.kungwong/"
  };

  return (
    <footer className="w-full">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:py-16">
        <div className="mt-12 border-t pt-8 flex items-center justify-between sm:justify-start gap-4 flex-wrap">
          <div className="flex flex-row items-center gap-4 flex-wrap text-center">
              {/* ปุ่มคลิกชื่อ-สกุลนักศึกษาเพื่อเปิด Drawer */}
              <button 
                onClick={() => setIsOpen(true)} 
                className="rounded-md px-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                <StudentInfo />
              </button>
            </div> 
            <span className="text-sm text-muted-foreground whitespace-nowrap">
              &copy; {new Date().getFullYear()} CPE207 Corp. All rights reserved.
            </span>
          </div>
      </div>

      {/* Drawer Component ด้านข้าง */}
      <Drawer open={isOpen} onOpenChange={setIsOpen} direction="left">
          <DrawerContent className="fixed left-0 inset-y-0 w-100 p-6 bg-white text-black rounded-none">
          <DrawerHeader>
            <DrawerTitle>ข้อมูลนักศึกษา</DrawerTitle>
            <DrawerDescription>StudentInfomation</DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-col items-center mt-4 space-y-4">
            {/* รูปภาพ */}
            <img
              src={student.image}
              alt={student.name}
              className="w-24 h-24 rounded-full object-cover border"
            />
            {/* ชื่อ-สกุล */}
            <h3 className="text-lg font-bold">{student.name}</h3>
            {/* คำอธิบายสั้นๆ */}
            <p className="text-sm text-center text-gray-600">{student.bio}</p>
            <div className="w-full border-t pt-4 space-y-2 text-left text-sm">
              {/* งานอดิเรก */}
              <p>
                <strong>งานอดิเรก:</strong> {student.hobbies}
              </p>
              {/* CMU Email */}
              <p>
                <strong>CMU Email:</strong>{" "}
                <a
                  href={`mailto:${student.cmuEmail}`}
                  className="text-blue-600 underline"
                >
                  {student.cmuEmail}
                </a>
              </p>
              <p>
                <strong>Social:</strong>{" "}
                <a
                  href={student.social}
                  className="text-blue-600 underline"
                >
                  {student.social}
                </a>
              </p>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </footer>
  );
}
