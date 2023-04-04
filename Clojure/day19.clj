(ns day19
  (:require [input :refer [f->str]]
            [clojure.set :refer [union]]))

(defn parse [it]
  (let [wx (re-seq #"\w+" it)]
    [(last wx)
     (->> wx butlast (partition 2) (reduce (fn [m [s r]] (update m (seq s) conj (seq r))) {}) vec)]))

(defn replace-one [m [st rs]]
  (let [len (count m), cm (count st)]
    (loop [n 0, a #{}]
      (if (> n len) a
          (let [[h t] ((juxt #(take n %) #(drop n %)) m), c (take cm t)]
            (recur
             (inc n)
             (cond-> a (= c st) (into (for [r rs] (apply str (concat h r (drop cm t))))))))))))

(defn -main [day]
  (let [[molecule replacements] (->> day f->str parse)]
    {:part1 (count (apply union (for [r replacements] (replace-one molecule r))))
     :part2 nil}))
