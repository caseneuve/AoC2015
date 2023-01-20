(ns day11
  (:require [input :refer [f->str]]))

(def iol (set (map int "iol")))

(def iol? #(some iol %))

(def abc?
  #(reduce
    (fn [r [a b c]] (if (= (inc a) b (dec c)) (reduced true) r))
    false (partition 3 1 %)))

(def pairs?
  #(> (count (set (keep (fn [[a b]] (when (= a b) a)) (partition 2 1 %)))) 1))

(def int->s #(->> % (map char) (apply str)))

(defn increment [it]
  (reduce
   (fn [v i] (if (= (v i) 122) (assoc v i 97) (reduced (update v i inc))))
   it (range 7 -1 -1)))

(defn skip [it]
  (reduce
   (fn [[t? p] i]
     (cond t? [t? (assoc p i 97)], (contains? iol (p i)) [:t (update p i inc)], :else [t? p]))
   [nil it] (range 8)))

(defn password [it]
  (loop [p it]
    (cond ((every-pred pairs? abc?) p) p
          (iol? p) (recur (second (skip p)))
          :else (recur (increment p)))))

(defn -main [day]
  (let [p1 (->> day f->str (mapv int) password)]
    {:part1 (int->s p1) :part2 (->> p1 increment password int->s)}))


(comment
  (let [test-input [["abcdefgh" "abcdffaa"] ["ghijklmn" "ghjaabcc"]]]
    (for [[i e] test-input] (= e (->> i (mapv int) password int->s))))
  )
